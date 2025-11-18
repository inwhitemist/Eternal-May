import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import crypto from "crypto";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { connectDB, User, Event, LegendaryUnlock } from "./db.js";

const app = express();
const PORT = process.env.PORT || 8080;
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_PROOF_TTL = Number(process.env.ADMIN_PROOF_TTL || 600);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";
const CLIENT_ORIGIN_PATH = process.env.CLIENT_ORIGIN_PATH || "";

const DEV_ADMIN_PROOF_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDG2OVZQu+Z1nTN
uEfinNCRyVqf9hKIvWTrxSog/qFkA05N4KOLJdOmjcwqriGYmCjRzMzvpkxsQ148
pgxPwVyuqv1uKC7l9hK3YJHTRzsjLOXuNOyWNRLa92XLZ0Ttwqx0aP7757zjc5aw
p0HwC9hYFYjnO4sm6CVQECuRCXBC57R4HDtOa/TCyMy+FPu/ljJNbdtNGrxpfm3P
bafHhBnq26/29UGnWjq25OCzfwYkybPJNZvl14skbD8N9PLdfJXHxC6OsJQm/zSd
txEYl2azsPmYxP5Gbw0ixUFl1J6oBMtaigptoCGrIrE+afe+icwD6qVCCckgJwUd
Ke0FjCq/AgMBAAECggEANekIBTNIkoS6FiwoESBCy8OzdjrYu4ndmq5RxbBDQUJE
MIj+zfLrdvRqrgeXxC88oeTMiwyjG5cILZk3LUhXQGPLYdozHNWiLWVZI9bkCZ1a
mUJwAilRe1wnlQXigjONXeI5f0JMy73C1RIDpnkPppHwFADosRuvQg2gQio07W45
3n2d9pJu09rJcdNfzAXoVANPuwpSAmOf71nVu9FCKDAuIYLIB23lq0JVUMuCBr1Z
H7QRk7FBoMKMPJ4n/JyRZN1jAkmbwdOn6xXDjulylcsr6HlTBfDrEN9Qjy2gpVxX
3X5pgdCD/6U0pZ9/rM/bcJUTOm+z2Zv8fhTNPNW7QQKBgQDsX0CLTqJvtP4dVSr1
wRA9nTID80AMKOo66iauaB2TDG9M5yby8GnwE+YLDPu8FOhrCh4EtH2Is3tbcEty
LiPNXhm3LKfwzO7+pALsMhV0Id7rWcczWx3V0SCu6mrBcb1CPlohzbciWEyK9srv
Y6L1fD+fsCUMnqgmhzv6KXvLZQKBgQDXW/LoEnRDJdvIeIVChCWIbayhUPMNM7QX
4ZA1V+xC9TY8xRog7FXhYnKqfzI37ux3eHnkTrP0HpUux5VhaJ/t2ku4vfKJIzTW
5rf3pllabtASV9AZFBBO7A+/HFjsRLsRyTjp46fnsThKxwr1Rka7yFLKVOB/DTJ6
KVUtRktFUwKBgHEjcph7bgK8BjnyDxsMawKi4FLFtu1bFCpY82TdjvJYrFmJ9rmn
230/eQfnEgNHmqvJbu7fmYq6JhxxVptzfE2LchGcPVJkNS0LQh7eJiitIa9TDKcH
QPOcIuG2cJzhHS68+5VciwDUdOa7FA2bil+oNifwPvuYYXH3nvyxqICFAoGAYq5B
WdHK8FHSqcN/3IDM6fzHU4vSM0Rzy1WSTL8jBXNzDNmMJXXlzEbeH/30tuiF9iCA
Sfs+PigdV7ggXOgiEE0s0VRIZEp7ldVWiuXwn52TPjR6qGMnLeLBPGLy5CCCT54S
tCma8HGmR614+fbfxn/+X7QQwmb7sDpsSzigmP0CgYEAxoGLL2D8O9fXaUvRB4o8
8R/HtWaojthWHF1qTYqxvMKEFFe+D5xCYOZHM9qsGVVcSuOoA4eYIE5gpo/H8TmY
ULC4ig0s3fLbIOIg6mHNFu6/0fgcNAZSpaE6LIG7/INJQV9lAkjSitwsV5lORfj8
4Ydnn49nvEPX3ChIAi24ICw=
-----END PRIVATE KEY-----`;
const DEV_ADMIN_PROOF_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxtjlWULvmdZ0zbhH4pzQ
kclan/YSiL1k68UqIP6hZANOTeCjiyXTpo3MKq4hmJgo0czM76ZMbENePKYMT8Fc
rqr9bigu5fYSt2CR00c7Iyzl7jTsljUS2vdly2dE7cKsdGj+++e843OWsKdB8AvY
WBWI5zuLJuglUBArkQlwQue0eBw7Tmv0wsjMvhT7v5YyTW3bTRq8aX5tz22nx4QZ
6tuv9vVBp1o6tuTgs38GJMmzyTWb5deLJGw/DfTy3XyVx8QujrCUJv80nbcRGJdm
s7D5mMT+Rm8NIsVBZdSeqATLWooKbaAhqyKxPmn3vonMA+qlQgnJICcFHSntBYwq
vwIDAQAB
-----END PUBLIC KEY-----`;

function normalizeKey(key) {
  if (!key) return "";
  return key.replace(/\\n/g, "\n").trim();
}

const ADMIN_PROOF_PRIVATE_KEY = normalizeKey(process.env.ADMIN_PROOF_PRIVATE_KEY) || DEV_ADMIN_PROOF_PRIVATE_KEY;
const ADMIN_PROOF_PUBLIC_KEY = normalizeKey(process.env.ADMIN_PROOF_PUBLIC_KEY) || DEV_ADMIN_PROOF_PUBLIC_KEY;

const authLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => res.status(429).json({ error: "too_many_requests" }),
});

if (!JWT_SECRET) throw new Error("JWT_SECRET is required");
if (!ADMIN_PROOF_PRIVATE_KEY || !ADMIN_PROOF_PUBLIC_KEY) {
  throw new Error("ADMIN_PROOF_PRIVATE_KEY and ADMIN_PROOF_PUBLIC_KEY are required");
}
if (!process.env.ADMIN_PROOF_PRIVATE_KEY || !process.env.ADMIN_PROOF_PUBLIC_KEY) {
  console.warn("[security] Using bundled dev admin proof keys. Set ADMIN_PROOF_PRIVATE_KEY and ADMIN_PROOF_PUBLIC_KEY in production.");
}
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

function toBase64Url(buffer) {
  return buffer.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function fromBase64Url(str) {
  let input = str.replace(/-/g, "+").replace(/_/g, "/");
  while (input.length % 4 !== 0) input += "=";
  return Buffer.from(input, "base64");
}
function createAdminProofToken(uid) {
  const payload = {
    uid,
    ts: Date.now(),
    exp: Date.now() + ADMIN_PROOF_TTL * 1000,
    nonce: crypto.randomBytes(12).toString("hex"),
  };
  const payloadJson = JSON.stringify(payload);
  const signature = crypto.sign("sha256", Buffer.from(payloadJson), {
    key: ADMIN_PROOF_PRIVATE_KEY,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    saltLength: 32,
  });
  const payloadEncoded = toBase64Url(Buffer.from(payloadJson));
  return `${payloadEncoded}.${toBase64Url(signature)}`;
}
function verifyAdminProofToken(token, uid) {
  if (!token) return false;
  const [payloadB64, signatureB64] = token.split(".");
  if (!payloadB64 || !signatureB64) return false;
  try {
    const payloadBuf = fromBase64Url(payloadB64);
    const payload = JSON.parse(payloadBuf.toString("utf8"));
    if (payload.uid !== uid) return false;
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return false;
    const signatureBuf = fromBase64Url(signatureB64);
    const ok = crypto.verify(
      "sha256",
      payloadBuf,
      {
        key: ADMIN_PROOF_PUBLIC_KEY,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: 32,
      },
      signatureBuf
    );
    return Boolean(ok);
  } catch {
    return false;
  }
}
function requireAdminProof(req, res, next) {
  if (req.user?.role !== "admin") return res.status(403).json({ error: "forbidden" });
  const proof = req.get("x-admin-proof");
  if (!verifyAdminProofToken(proof, req.user.uid)) {
    return res.status(403).json({ error: "missing_admin_proof" });
  }
  return next();
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

app.post("/api/events", auth, requireAdminProof, async (req, res) => {
  try {
    let data = eventSchema.parse(req.body);
    let { id, code, tags = [], ...rest } = data;          // <-- выбрасываем client-side id
    code = code ? code.trim().toUpperCase() : undefined;
    if (code && !tags.includes("legendary")) tags.push("legendary");
    if (code) {
      const exists = await Event.findOne({ code });
      if (exists) return res.status(409).json({ error: "duplicate_code" });
    }
    const ev = await Event.create({ ...rest, tags, code: code || null, userId: req.user.uid });
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

app.put("/api/events/:id", auth, requireAdminProof, async (req, res) => {
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
      const exists = await Event.findOne({ code, _id: { $ne: id } });
      if (exists) return res.status(409).json({ error: "duplicate_code" });
    }
    const ev = await Event.findById(id);
    if (!ev) return res.status(404).json({ error: "not_found" });
    Object.assign(ev, rest, { tags, code: code || null });
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

app.delete("/api/events/:id", auth, requireAdminProof, async (req, res) => {
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

app.post("/api/admin/proof", auth, (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "forbidden" });
  const proof = createAdminProofToken(req.user.uid);
  res.json({ proof, expiresIn: ADMIN_PROOF_TTL });
});

// ======= Админ: управление пользователями =======
app.get("/api/admin/users", auth, requireAdminProof, async (req, res) => {
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

app.post("/api/admin/users/:id/legendary", auth, requireAdminProof, async (req, res) => {
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

app.delete("/api/admin/users/:id/legendary/:code", auth, requireAdminProof, async (req, res) => {
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
app.get("/api/admin/legendary-catalog", auth, requireAdminProof, async (req, res) => {
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
