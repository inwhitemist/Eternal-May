import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { z } from "zod";
import { connectDB, User, Event } from "./db.js";

const app = express();
const PORT = process.env.PORT || 8080;
const JWT_SECRET = process.env.JWT_SECRET;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";
const CLIENT_ORIGIN_PATH = process.env.CLIENT_ORIGIN_PATH || "";

if (!JWT_SECRET) throw new Error("JWT_SECRET is required");
if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is required");

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(morgan("dev"));
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use(cors({
  origin: [CLIENT_ORIGIN, `${CLIENT_ORIGIN}${CLIENT_ORIGIN_PATH}`],
  credentials: true
}));
function cookieOpts() {
  const isLocal = (process.env.CLIENT_ORIGIN || "").startsWith("http://localhost");
  return {
    httpOnly: true,
    sameSite: isLocal ? "lax" : "none",
    secure: isLocal ? false : true,
    maxAge: 7 * 24 * 3600 * 1000,
    ...(isLocal ? {} : { partitioned: true }),
  };
}
function issueToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}
function setAuthCookie(res, token) {
  res.cookie("token", token, cookieOpts());
}
function clearAuthCookie(res) {
  res.clearCookie("token", cookieOpts());
}
function auth(req, res, next) {
  let token = req.cookies.token;
  const header = req.get("authorization");
  if (!token && header?.startsWith("Bearer ")) token = header.slice(7);
  if (!token) return res.status(401).json({ error: "unauthorized" });
  try { req.user = jwt.verify(token, JWT_SECRET); next(); }
  catch { return res.status(401).json({ error: "invalid_token" }); }
}

const registerSchema = z.object({ email: z.string().email(), password: z.string().min(6), invite: z.string().min(1).optional() });
const loginSchema = z.object({ email: z.string().email(), password: z.string().min(6) });
const eventSchema = z.object({
  id: z.string().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  title: z.string().min(1),
  description: z.string().optional().default(""),
  tags: z.array(z.string()).optional().default([]),
  color: z.string().optional(),
  imageData: z.string().optional(),
  code: z.string().optional(),
});

const legendaryEventsData = {
  TESTCODE: {
    title: "Секретное событие",
    description: "Это легендарное событие",
  },
};

app.get("/api/health", (_, res) => res.json({ ok: true }));

app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password, invite } = registerSchema.parse(req.body);
    const exists = await User.findOne({ email }); if (exists) return res.status(409).json({ error: "email_taken" });
    const passwordHash = await bcrypt.hash(password, 10);
    let role = "user";
    if (invite) {
      if (invite !== process.env.ADMIN_INVITE_CODE) return res.status(403).json({ error: "invalid_invite" });
      role = "admin";
    }
    const user = await User.create({ email, passwordHash, role });
    const token = issueToken({ uid: user._id, role: user.role });
    setAuthCookie(res, token);
    res.json({ user: { id: user._id, email: user.email, role: user.role }, token });
  } catch (e) { return res.status(400).json({ error: e.errors?.[0]?.message || "bad_request" }); }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "invalid_credentials" });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "invalid_credentials" });
    const token = issueToken({ uid: user._id, role: user.role });
    setAuthCookie(res, token);
    res.json({ user: { id: user._id, email: user.email, role: user.role }, token });
  } catch (e) { return res.status(400).json({ error: e.errors?.[0]?.message || "bad_request" }); }
});

app.post("/api/auth/logout", (req, res) => { clearAuthCookie(res); res.json({ ok: true }); });
app.get("/api/me", auth, async (req, res) => {
  const user = await User.findById(req.user.uid);
  if (!user) return res.status(401).json({ error: "invalid_user" });
  res.json({ user: { id: user._id, email: user.email, role: user.role } });
});

app.get("/api/events", auth, async (req, res) => {
  const docs = await Event.find({ userId: req.user.uid }).sort({ date: 1 });
  const events = docs.map(d => d.toJSON()); // тут появится id и пропадёт _id/__v
  res.json({ events });
});

app.post("/api/events", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  try {
    let data = eventSchema.parse(req.body);
    let { id, code, tags = [], ...rest } = data;          // <-- выбрасываем client-side id
    code = code ? code.trim().toUpperCase() : undefined;
    if (code && !tags.includes("legendary")) tags.push("legendary");
    if (code) {
      const exists = await Event.findOne({ userId: req.user.uid, code });
      if (exists) return res.status(409).json({ error: "duplicate_code" });
    }
    const ev = await Event.create({ ...rest, tags, code: code || null, userId: req.user.uid });
    res.json({ event: ev.toJSON() });
  } catch (e) {
    res.status(400).json({ error: e.errors?.[0]?.message || "bad_request" });
  }
});

app.post("/api/events/unlock", auth, async (req, res) => {
  try {
    const codeRaw = (req.body?.code || "").toString().trim().toUpperCase();
    if (!codeRaw) return res.status(404).json({ error: "invalid_code" });
    const data = legendaryEventsData[codeRaw];
    if (!data) {
      console.log("Invalid legendary code", codeRaw, "user", req.user.uid);
      return res.status(404).json({ error: "invalid_code" });
    }
    const exists = await Event.findOne({ userId: req.user.uid, code: codeRaw });
    if (exists) return res.status(409).json({ error: "already_unlocked" });
    const todayISO = new Date().toISOString().slice(0, 10);
    const tags = Array.from(new Set([...(data.tags || []), "legendary"]));
    const ev = await Event.create({
      userId: req.user.uid,
      title: data.title,
      description: data.description || "",
      date: data.date || todayISO,
      tags,
      color: data.color,
      imageData: data.imageData,
      code: codeRaw,
    });
    res.json({ event: ev.toJSON() });
  } catch (e) {
    res.status(400).json({ error: "bad_request" });
  }
});

app.put("/api/events/:id", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "invalid_id" });
    }
    let data = eventSchema.parse(req.body);
    let { id: _clientId, code, tags = [], ...rest } = data;   // <-- игнорируем client-side id
    code = code ? code.trim().toUpperCase() : undefined;
    if (code && !tags.includes("legendary")) tags.push("legendary");
    if (code) {
      const exists = await Event.findOne({ userId: req.user.uid, code, _id: { $ne: id } });
      if (exists) return res.status(409).json({ error: "duplicate_code" });
    }
    const ev = await Event.findById(id);
    if (!ev) return res.status(404).json({ error: "not_found" });
    Object.assign(ev, rest, { tags, code: code || null });
    await ev.save();
    res.json({ event: ev.toJSON() });
  } catch (e) {
    res.status(400).json({ error: e.errors?.[0]?.message || "bad_request" });
  }
});

app.delete("/api/events/:id", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "invalid_id" });
    }
    const ev = await Event.findById(id);
    if (!ev) return res.status(404).json({ error: "not_found" });
    await ev.deleteOne();
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: e.errors?.[0]?.message || "bad_request" });
  }
});
connectDB(process.env.MONGODB_URI).then(() => {
  app.listen(PORT, () => console.log(`API on :${PORT}`));
}).catch(err => { console.error("DB connect error", err); process.exit(1); });
