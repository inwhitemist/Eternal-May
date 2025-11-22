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
import rateLimit from "express-rate-limit";
import fs from "fs/promises";
import path from "path";
import { connectDB, User, Event, LegendaryUnlock } from "./db.js";

const app = express();
const PORT = process.env.PORT || 8080;
const JWT_SECRET = process.env.JWT_SECRET;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";
const CLIENT_ORIGIN_PATH = process.env.CLIENT_ORIGIN_PATH || "";
const CHAT_DIR = path.join(process.cwd(), "data", "chats");

const authLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => res.status(429).json({ error: "too_many_requests" }),
});

if (!JWT_SECRET) throw new Error("JWT_SECRET is required");
if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is required");

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb" }));
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
  // Using res.clearCookie may fail when additional attributes like
  // `partitioned` are present, so overwrite the cookie with an
  // immediately expired one using the same options.
  res.cookie("token", "", { ...cookieOpts(), maxAge: 0 });
}
function auth(req, res, next) {
  let token = req.cookies.token;
  const header = req.get("authorization");
  if (!token && header?.startsWith("Bearer ")) token = header.slice(7);
  if (!token) return res.status(401).json({ error: "unauthorized" });
  try { req.user = jwt.verify(token, JWT_SECRET); next(); }
  catch { return res.status(401).json({ error: "invalid_token" }); }
}

async function ensureChatDir() {
  await fs.mkdir(CHAT_DIR, { recursive: true });
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
  chatId: z.string().trim().min(1).optional().nullable(),
  chatFromId: z.coerce.number().int().optional().nullable(),
  chatToId: z.coerce.number().int().optional().nullable(),
});

const chatMessageSchema = z.object({
  id: z.coerce.number().int(),
  datetime: z.string().min(1),
  author: z.string().min(1),
  text: z.string().default(""),
});

const chatUploadSchema = z.object({
  chatId: z.string().trim().min(1).regex(/^[a-zA-Z0-9_-]+$/),
  messages: z.array(chatMessageSchema),
});

const legendaryEventsData = {
  TESTCODE: {
    title: "Секретное событие",
    description: "Это легендарное событие",
  },
};

app.get("/api/health", (_, res) => res.json({ ok: true }));

app.post("/api/auth/register", authLimiter, async (req, res) => {
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

app.post("/api/auth/login", authLimiter, async (req, res) => {
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
  const unlocked = await LegendaryUnlock.find({ userId: req.user.uid }).select("code");
  const codes = unlocked.map(u => u.code);
  const docs = await Event.find({
    $or: [{ code: null }, { code: { $in: codes } }]
  }).sort({ date: 1 });
  const events = docs.map(d => d.toJSON());
  res.json({ events });
});

app.post("/api/events", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  try {
    let data = eventSchema.parse(req.body);
    let { id, code, tags = [], chatId, chatFromId, chatToId, ...rest } = data;          // <-- выбрасываем client-side id
    code = code ? code.trim().toUpperCase() : undefined;
    if (code && !tags.includes("legendary")) tags.push("legendary");
    if (code) {
      const exists = await Event.findOne({ code });
      if (exists) return res.status(409).json({ error: "duplicate_code" });
    }
    const ev = await Event.create({
      ...rest,
      tags,
      code: code || null,
      userId: req.user.uid,
      chatId: chatId || null,
      chatFromId: chatFromId ?? null,
      chatToId: chatToId ?? null,
    });
    if (code) {
      await LegendaryUnlock.create({ userId: req.user.uid, code });
    }
    res.json({ event: ev.toJSON() });
  } catch (e) {
    res.status(400).json({ error: e.errors?.[0]?.message || "bad_request" });
  }
});

app.post("/api/events/unlock", auth, async (req, res) => {
  try {
    const codeRaw = (req.body?.code || "").toString().trim().toUpperCase();
    if (!codeRaw) return res.status(404).json({ error: "invalid_code" });
    const unlocked = await LegendaryUnlock.findOne({ userId: req.user.uid, code: codeRaw });
    if (unlocked) return res.status(409).json({ error: "already_unlocked" });
    let ev = await Event.findOne({ code: codeRaw });
    if (!ev) {
      const data = legendaryEventsData[codeRaw];
      if (!data) {
        console.log("Invalid legendary code", codeRaw, "user", req.user.uid);
        return res.status(404).json({ error: "invalid_code" });
      }
      const todayISO = new Date().toISOString().slice(0, 10);
      const tags = Array.from(new Set([...(data.tags || []), "legendary"]));
      ev = await Event.create({
        title: data.title,
        description: data.description || "",
        date: data.date || todayISO,
        tags,
        color: data.color,
        imageData: data.imageData,
        code: codeRaw,
      });
    }
    await LegendaryUnlock.create({ userId: req.user.uid, code: codeRaw });
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
    let { id: _clientId, code, tags = [], chatId, chatFromId, chatToId, ...rest } = data;   // <-- игнорируем client-side id
    code = code ? code.trim().toUpperCase() : undefined;
    if (code && !tags.includes("legendary")) tags.push("legendary");
    if (code) {
      const exists = await Event.findOne({ code, _id: { $ne: id } });
      if (exists) return res.status(409).json({ error: "duplicate_code" });
    }
    const ev = await Event.findById(id);
    if (!ev) return res.status(404).json({ error: "not_found" });
    Object.assign(ev, rest, {
      tags,
      code: code || null,
      chatId: chatId || null,
      chatFromId: chatFromId ?? null,
      chatToId: chatToId ?? null,
    });
    await ev.save();
    if (code) {
      await LegendaryUnlock.updateOne(
        { userId: req.user.uid, code },
        {},
        { upsert: true }
      );
    }
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

// ======= Переписки (чтение) =======
app.get("/api/chats/:chatId", auth, async (req, res) => {
  try {
    const chatId = (req.params.chatId || "").trim();
    if (!/^[a-zA-Z0-9_-]+$/.test(chatId)) return res.status(400).json({ error: "invalid_chat_id" });
    const fromId = req.query.fromId !== undefined ? Number(req.query.fromId) : undefined;
    const toId = req.query.toId !== undefined ? Number(req.query.toId) : undefined;
    await ensureChatDir();
    const filePath = path.join(CHAT_DIR, `${chatId}.json`);
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error("bad_format");
    let messages = parsed;
    if (fromId !== undefined && !Number.isNaN(fromId)) messages = messages.filter((m) => Number(m.id) >= fromId);
    if (toId !== undefined && !Number.isNaN(toId)) messages = messages.filter((m) => Number(m.id) <= toId);
    res.json({ messages });
  } catch (e) {
    if (e.code === "ENOENT") return res.status(404).json({ error: "chat_not_found" });
    res.status(400).json({ error: "bad_chat_data" });
  }
});

// ======= Админ: загрузка переписок =======
app.post("/api/admin/chats", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  try {
    const { chatId, messages } = chatUploadSchema.parse(req.body);
    await ensureChatDir();
    const filePath = path.join(CHAT_DIR, `${chatId}.json`);
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2), "utf8");
    res.json({ ok: true, messages: messages.length });
  } catch (e) {
    res.status(400).json({ error: e.errors?.[0]?.message || "bad_request" });
  }
});

// ======= Админ: управление пользователями =======
app.get("/api/admin/users", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  const users = await User.find().select("email role");
  const unlocks = await LegendaryUnlock.find({ userId: { $in: users.map(u => u._id) } }).select("userId code");
  const map = new Map();
  users.forEach(u => map.set(u._id.toString(), []));
  unlocks.forEach(u => {
    const arr = map.get(u.userId.toString());
    if (arr) arr.push(u.code);
  });
  const data = users.map(u => ({ id: u._id, email: u.email, role: u.role, codes: map.get(u._id.toString()) || [] }));
  res.json({ users: data });
});

app.post("/api/admin/users/:id/legendary", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "invalid_id" });
    }
    const codeRaw = (req.body?.code || "").toString().trim().toUpperCase();
    if (!codeRaw) return res.status(400).json({ error: "invalid_code" });
    const exists = await LegendaryUnlock.findOne({ userId: id, code: codeRaw });
    if (exists) return res.status(409).json({ error: "already_unlocked" });
    let ev = await Event.findOne({ code: codeRaw });
    if (!ev) {
      const data = legendaryEventsData[codeRaw];
      if (!data) return res.status(404).json({ error: "invalid_code" });
      const todayISO = new Date().toISOString().slice(0, 10);
      const tags = Array.from(new Set([...(data.tags || []), "legendary"]));
      ev = await Event.create({
        title: data.title,
        description: data.description || "",
        date: data.date || todayISO,
        tags,
        color: data.color,
        imageData: data.imageData,
        code: codeRaw,
      });
    }
    await LegendaryUnlock.create({ userId: id, code: codeRaw });
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: "bad_request" });
  }
});

app.delete("/api/admin/users/:id/legendary/:code", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  try {
    const { id, code } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "invalid_id" });
    }
    const codeUpper = code.toString().trim().toUpperCase();
    await LegendaryUnlock.deleteOne({ userId: id, code: codeUpper });
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: "bad_request" });
  }
});

// ======= Админ: список доступных легендарных событий/кодов =======
app.get("/api/admin/legendary-catalog", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  try {
    // Коды из встроенного справочника
    const builtin = Object.entries(legendaryEventsData).map(([code, data]) => ({
      code,
      title: data.title || "",
      description: data.description || "",
      tags: Array.from(new Set([...(data.tags || []), "legendary"])),
      color: data.color || null,
      date: data.date || null,
      source: "builtin",
    }));
    // Коды из БД (созданные события с прописанным code)
    const dbEvents = await Event.find({ code: { $ne: null } }).select("code title description tags color date");
    const db = dbEvents.map((e) => ({
      code: e.code,
      title: e.title || "",
      description: e.description || "",
      tags: Array.from(new Set([...(e.tags || []), "legendary"])),
      color: e.color || null,
      date: e.date || null,
      source: "db",
    }));
    // Объединяем по коду, приоритет БД для отображения метаданных
    const map = new Map();
    for (const item of builtin) map.set(item.code, item);
    for (const item of db) map.set(item.code, item);
    const catalog = Array.from(map.values()).sort((a, b) => a.code.localeCompare(b.code));
    res.json({ catalog });
  } catch (e) {
    res.status(400).json({ error: "bad_request" });
  }
});
connectDB(process.env.MONGODB_URI).then(() => {
  app.listen(PORT, () => console.log(`API on :${PORT}`));
}).catch(err => { console.error("DB connect error", err); process.exit(1); });
