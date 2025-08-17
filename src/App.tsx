"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isObjectId } from "./utils/isObjectId";
import {
  Calendar as CalendarIcon,
  Plus,
  Search,
  Tag,
  Upload,
  Sparkles,
  Filter,
  X,
  SunMedium,
  MoonStar,
  ChevronLeft,
  ChevronRight,
  Edit3,
  Trash2,
  Wand2,
  LogIn,
  LogOut,
  Image as ImageIcon,
  Info,
  ArrowDown,
  Settings,
  FileJson,
  FileDown,
} from "lucide-react";

/* =========================
   Типы данных
========================= */
type EventItem = {
  id: string;
  date: string; // ISO 8601: YYYY-MM-DD
  title: string;
  description?: string;
  tags: string[];
  color?: string;
  emoji?: string; // устар.
  imageData?: string;
};

/* =========================
   API клиент (server-mode)
========================= */
const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
const API_BASE: string =
  isLocalhost
    ? "http://localhost:8080"
    : (import.meta as any).env?.VITE_API_BASE || "";

type MeUser = { id: string; email: string; role: "admin" | "user" };

async function http<T = any>(path: string, opts: RequestInit = {}): Promise<T> {
  const res = await fetch(API_BASE + path, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    ...opts,
  });
  if (!res.ok) {
    let msg = res.statusText;
    try {
      const j = await res.json();
      if (j?.error) msg = j.error;
    } catch {}
    throw new Error(msg || "request_failed");
  }
  return (await res.json()) as T;
}

const api = {
  me: () => http<{ user: MeUser }>("/api/me"),
  login: (email: string, password: string) =>
    http<{ user: MeUser }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  logout: () => http<{ ok: true }>("/api/auth/logout", { method: "POST" }),
  register: (email: string, password: string, invite: string) =>
    http<{ user: MeUser }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, invite }),
    }),
  getEvents: () => http<{ events: EventItem[] }>("/api/events"),
  createEvent: (e: EventItem) =>
    http<{ event: EventItem }>("/api/events", {
      method: "POST",
      body: JSON.stringify(e),
    }),
  updateEvent: (id: string, e: EventItem) =>
    http<{ event: EventItem }>(`/api/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(e),
    }),
  deleteEvent: (id: string) => {
    if (!isObjectId(id)) throw new Error("invalid_id");
    return http<{ ok: true }>(`/api/events/${id}`, { method: "DELETE" });
  },
};

/* =========================
   Вспомогательные утилиты
========================= */
const THEME_KEY = "life-timeline-theme";

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
function formatDateHuman(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
function getYear(iso: string) {
  return new Date(iso).getFullYear();
}
function getMonth(iso: string) {
  return new Date(iso).getMonth();
}

function downloadFile(
  filename: string,
  content: string,
  type = "application/json"
) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function toICS(events: EventItem[]) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Life Timeline//EN",
  ];
  for (const ev of events) {
    const dt = new Date(ev.date);
    const dtStart = dt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const dtEndDate = new Date(dt.getTime() + 24 * 60 * 60 * 1000);
    const dtEnd =
      dtEndDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${ev.id}@life-timeline`);
    lines.push(`DTSTAMP:${dtStart}`);
    lines.push(`DTSTART:${dtStart}`);
    lines.push(`DTEND:${dtEnd}`);
    lines.push(`SUMMARY:${ev.title}`);
    if (ev.description)
      lines.push(`DESCRIPTION:${ev.description.replace(/\n/g, "\\n")}`);
    if (ev.tags?.length) lines.push(`CATEGORIES:${ev.tags.join(",")}`);
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.join("\n");
}

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

/* =========================
   Примеры (локальный fallback)
========================= */
const SAMPLE: EventItem[] = [
  {
    id: uid(),
    date: "2019-07-12",
    title: "Первое большое путешествие",
    description: "Море, фото на плёнку и чувство полной свободы.",
    tags: ["путешествия", "лето"],
    color: "#60a5fa",
  },
  {
    id: uid(),
    date: "2021-11-05",
    title: "Первый релиз собственного плагина",
    description: "Долгие ночи за клавиатурой окупились.",
    tags: ["код", "релиз"],
    color: "#34d399",
  },
  {
    id: uid(),
    date: "2023-02-14",
    title: "Особенный день",
    description: "Кофе, снег и тёплый разговор.",
    tags: ["личное"],
    color: "#f472b6",
  },
];

/* =========================
   Мини UI-компоненты
========================= */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

function Button({
  className,
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: React.PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline" | "soft";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition active:scale-[.98]";
  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white hover:opacity-95",
    ghost:
      "bg-transparent hover:bg-white/10 text-foreground dark:text-white border border-transparent",
    outline:
      "border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10",
    soft: "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        base,
        variants[variant],
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

function Chip({
  selected,
  label,
  onClick,
}: {
  selected?: boolean;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 rounded-full text-xs border transition",
        selected
          ? "bg-indigo-500/90 text-white border-transparent"
          : "bg-white/70 dark:bg-white/5 backdrop-blur border-black/10 dark:border-white/10 hover:bg-white"
      )}
    >
      {label}
    </button>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm outline-none",
        "focus:ring-2 focus:ring-indigo-400/60",
        props.className
      )}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm outline-none",
        "focus:ring-2 focus:ring-indigo-400/60",
        props.className
      )}
    />
  );
}

function Dialog({
  open,
  onClose,
  children,
}: React.PropsWithChildren<{ open: boolean; onClose: () => void }>) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        className="relative z-10 w-[92vw] max-w-2xl rounded-2xl border border-white/10 bg-white/95 shadow-2xl dark:bg-neutral-900/95"
      >
        <div className="flex max-h-[85vh] flex-col">{children}</div>
      </motion.div>
    </div>
  );
}
/* ======= Подтверждение ======= */
function ConfirmDialog({
  open, title = "Вы уверены?", description, confirmText = "Да", cancelText = "Отмена",
  onConfirm, onCancel,
}: {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;
  return (
    <Dialog open={open} onClose={onCancel}>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="mt-2 text-sm opacity-80">{description}</p>}
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}><X size={16}/> {cancelText}</Button>
          <Button onClick={onConfirm}><Sparkles size={16}/> {confirmText}</Button>
        </div>
      </div>
    </Dialog>
  );
}

/* ======= Диалог авторизации ======= */
function AuthDialog({
  open, mode, onClose, onSuccess,
}: {
  open: boolean;
  mode: "login" | "register";
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [form, setForm] = useState({ email: "", password: "", invite: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{ setError(null); }, [mode, open]);

  async function submit() {
    setLoading(true);
    setError(null);
    try {
      if (mode === "login") {
        await api.login(form.email, form.password);
      } else {
        if (!form.invite) { setError("Нужен инвайт-код"); setLoading(false); return; }
        await api.register(form.email, form.password, form.invite);
      }
      onSuccess();
      onClose();
    } catch (e:any) {
      setError(e?.message || "Ошибка авторизации");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95">
        <div className="flex items-center gap-2 text-lg font-semibold">
          {mode === "login" ? <><LogIn size={18}/> Вход</> : <><Sparkles size={18}/> Регистрация</>}
        </div>
        <Button variant="ghost" onClick={onClose}><X size={18}/></Button>
      </div>

      <div className="p-4">
        <div className="grid gap-3">
          <div className="grid gap-1">
            <label className="text-xs opacity-70">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e)=>setForm({...form, email: e.target.value})}
            />
          </div>

          <div className="grid gap-1">
            <label className="text-xs opacity-70">Пароль</label>
            <div className="relative">
              <Input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(e)=>setForm({...form, password: e.target.value})}
                className="pr-10"
              />
              <button
                type="button"
                onClick={()=>setShowPass(v=>!v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs opacity-70 hover:opacity-100"
              >
                {showPass ? "Скрыть" : "Показать"}
              </button>
            </div>
            <p className="text-[11px] opacity-60">Мин. 6 символов</p>
          </div>

          {mode === "register" && (
            <div className="grid gap-1">
              <label className="text-xs opacity-70">Инвайт-код</label>
              <Input
                placeholder="XXXX-XXXX"
                value={form.invite}
                onChange={(e)=>setForm({...form, invite: e.target.value})}
              />
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200/60 bg-red-50/80 px-3 py-2 text-xs text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="mt-1 flex items-center justify-between">
            <button
              type="button"
              className="text-xs opacity-70 hover:opacity-100 underline underline-offset-4"
              onClick={()=>{ /* тут можно сделать forgot password */ alert("Скоро добавим восстановление пароля 🙂"); }}
            >
              Забыли пароль?
            </button>
            <button
              type="button"
              className="text-xs opacity-70 hover:opacity-100 underline underline-offset-4"
              onMouseDown={(e)=>e.preventDefault()}
              onClickCapture={()=>{}}
              onClick={()=>{
                // переключаем режим без закрытия
                // хак: не закрываем диалог, просто меняем state выше (через пропы нельзя, так что вынесем наружу)
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs opacity-70">
            {mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
            <button
              className="underline underline-offset-4 hover:opacity-100 opacity-80"
              onClick={()=>{
                // ничего не отправляем, просто переключим режим
                const ev = new CustomEvent("switch-auth-mode", { detail: mode === "login" ? "register" : "login" });
                window.dispatchEvent(ev);
              }}
            >
              {mode === "login" ? "Зарегистрируйтесь" : "Войти"}
            </button>
          </div>

          <Button onClick={submit} disabled={loading}>
            {loading ? "..." : (mode === "login" ? (<><LogIn size={16}/> Войти</>) : (<><Sparkles size={16}/> Зарегистрироваться</>))}
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
/* ======= Parallax фон для hero ======= */
function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    function onMove(e: MouseEvent) {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      if (!mounted) return;
      ref.current.style.setProperty("--px", x.toFixed(3));
      ref.current.style.setProperty("--py", y.toFixed(3));
    }
    window.addEventListener("mousemove", onMove);
    return () => {
      mounted = false;
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={
        {
          "--px": "0",
          "--py": "0",
        } as React.CSSProperties
      }
      aria-hidden
    >
      {/* Слои параллакса */}
      <span
        className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #a78bfa88 0%, transparent 70%)",
          transform:
            "translate(-50%, -50%) scale(1.1) translate3d(calc(var(--px,0) * 40px), calc(var(--py,0) * 30px), 0)",
          filter: "blur(40px)",
          opacity: 0.3,
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #f472b688 0%, transparent 70%)",
          transform:
            "translate(-50%, -50%) scale(1) translate3d(calc(var(--px,0) * 80px), calc(var(--py,0) * 60px), 0)",
          filter: "blur(60px)",
          opacity: 0.5,
        }}
      />
      <span
        className="absolute left-1/2 top-2/3 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #60a5fa88 0%, transparent 70%)",
          transform:
            "translate(-50%, -50%) scale(1) translate3d(calc(var(--px,0) * 120px), calc(var(--py,0) * 90px), 0)",
          filter: "blur(80px)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}

/* =========================
   Основное приложение
========================= */
export default function LifeTimelineApp() {
  // Тема
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem(THEME_KEY);
    return saved
      ? saved === "dark"
      : window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark]);

  // Данные теперь с сервера
  const [events, setEvents] = useState<EventItem[]>([]);
  const [me, setMe] = useState<MeUser | null>(null);
  const admin = Boolean(me);

  async function refreshMe() {
    try {
      const r = await api.me();
      setMe(r.user);
    } catch {
      setMe(null);
    }
  }
  async function refreshEvents() {
    try {
      const r = await api.getEvents();
      setEvents(r.events || []);
    } catch {
      setEvents(SAMPLE); /* fallback чтобы не пусто */
    }
  }

  useEffect(() => {
    refreshMe();
    refreshEvents();
  }, []);

  useEffect(()=>{
  function onSwitch(e: any) {
    const next = (e?.detail === "register") ? "register" : "login";
    setAuthMode(next as any);
  }
  window.addEventListener("switch-auth-mode", onSwitch as any);
  return ()=> window.removeEventListener("switch-auth-mode", onSwitch as any);
},[]);

  // UI состояние
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<number | "all">("all");
  const [month, setMonth] = useState<number | "all">("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [view, setView] = useState<"timeline" | "calendar">("timeline");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selected, setSelected] = useState<EventItem | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [deleting, setDeleting] = useState<EventItem | null>(null);

  // Фильтрация/поиск
  const allTags = useMemo(() => {
    const s = new Set<string>();
    for (const e of events) e.tags.forEach((t) => s.add(t));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [events]);

  const years = useMemo(() => {
    const ys = new Set<number>();
    for (const e of events) ys.add(getYear(e.date));
    return Array.from(ys).sort((a, b) => a - b);
  }, [events]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events
      .filter((e) => (year === "all" ? true : getYear(e.date) === year))
      .filter((e) => (month === "all" ? true : getMonth(e.date) === month))
      .filter((e) =>
        !activeTags.length
          ? true
          : activeTags.every((t) =>
              e.tags.map((x) => x.toLowerCase()).includes(t.toLowerCase())
            )
      )
      .filter((e) =>
        !q
          ? true
          : [e.title, e.description, e.tags.join(" ")]
              .filter(Boolean)
              .some((s) => s!.toLowerCase().includes(q))
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events, query, year, month, activeTags]);

  // Навигация с клавы
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!listRef.current) return;
      const items = Array.from(
        listRef.current.querySelectorAll("[data-timeline-card]")
      ) as HTMLElement[];
      const activeIndex = items.findIndex(
        (el) => el === document.activeElement
      );
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(items.length - 1, activeIndex + 1);
        (items[next] || items[0])?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(0, activeIndex - 1);
        (items[prev] || items[items.length - 1])?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Прокрутка к таймлайну
  const timelineAnchorRef = useRef<HTMLDivElement>(null);
  const scrollToTimeline = () =>
    timelineAnchorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  /* ======= CRUD через API ======= */
  function upsertEvent(ev: EventItem) {
    (async () => {
      try {
        const exists = events.some((x) => x.id === ev.id);
        if (exists) await api.updateEvent(ev.id, ev);
        else await api.createEvent(ev);
        await refreshEvents();
      } catch (e: any) {
        alert("Ошибка сохранения: " + (e?.message || "unknown"));
      }
    })();
  }
  function deleteEvent(id: string) {
    (async () => {
      try {
        if (!isObjectId(id)) {
          alert(
            "Нельзя удалить локальное/несинхронизированное событие — у него нет серверного ID."
          );
          return;
        }
        await api.deleteEvent(id);
        await refreshEvents();
      } catch (e: any) {
        alert("Ошибка удаления: " + (e?.message || "unknown"));
      }
    })();
  }
  function clearAll() {
    if (!admin) return;
    if (!confirm("Удалить все события на сервере?")) return;
    (async () => {
      try {
        await Promise.all(events.map((e) => api.deleteEvent(e.id)));
        await refreshEvents();
      } catch (e: any) {
        alert("Ошибка очистки: " + (e?.message || "unknown"));
      }
    })();
  }

  // Импорт JSON (на сервер)
  function handleImportJSON(file: File) {
    if (!admin) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (Array.isArray(data)) {
          const valid: EventItem[] = data
            .filter((x) => x && x.date && x.title)
            .map((x) => ({
              id: x.id || uid(),
              date: x.date,
              title: x.title,
              description: x.description || "",
              tags: Array.isArray(x.tags) ? x.tags : [],
              color: x.color || undefined,
              emoji: x.emoji || undefined,
              imageData: x.imageData || undefined,
            }));
          for (const ev of valid) {
            try {
              await api.createEvent(ev as any);
            } catch {}
          }
          await refreshEvents();
        } else {
          alert("Ожидался массив событий");
        }
      } catch {
        alert("Не удалось прочитать JSON");
      }
    };
    reader.readAsText(file);
  }

  // Авторизация (сервер)
  function handleLogin() {
  setAuthMode("login");
  setAuthOpen(true);
}
  function handleLogout() {
  setLogoutConfirmOpen(true);
}

  /* ======= UI: форма, карточки, сетки (без изменений по дизайну) ======= */
  function EventForm({
    initial,
    onSubmit,
    onCancel,
  }: {
    initial?: Partial<EventItem>;
    onSubmit: (e: EventItem) => void;
    onCancel: () => void;
  }) {
    const [date, setDate] = useState(
      initial?.date || new Date().toISOString().slice(0, 10)
    );
    const [title, setTitle] = useState(initial?.title || "");
    const [description, setDescription] = useState(initial?.description || "");
    const [tags, setTags] = useState((initial?.tags as string[]) || []);
    const [tagInput, setTagInput] = useState("");
    const [color, setColor] = useState(initial?.color || "");
    const [imageData, setImageData] = useState<string | undefined>(
      initial?.imageData
    );
    const presetColors = [
      "#60a5fa",
      "#34d399",
      "#f472b6",
      "#fb923c",
      "#a78bfa",
      "#fbbf24",
    ];
    function addTag() {
      const t = tagInput.trim();
      if (!t) return;
      if (!tags.includes(t)) setTags([...tags, t]);
      setTagInput("");
    }
    function onFile(e: React.ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith("image/")) return alert("Выберите изображение");
      const reader = new FileReader();
      reader.onload = () => setImageData(String(reader.result));
      reader.readAsDataURL(file);
    }
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const ev: EventItem = {
            id: (initial?.id as string) || uid(),
            date,
            title: title.trim() || "Без названия",
            description: description.trim(),
            tags,
            color: color || undefined,
            imageData,
          };
          onSubmit(ev);
        }}
        className="flex min-h-0 flex-1 flex-col"
      >
        <div className="grid max-h-[60vh] gap-3 overflow-y-auto pr-1">
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">
              Дата
            </label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">
              Заголовок
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Например: Переезд в новый город"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">
              Описание
            </label>
            <Textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Короткая история/заметки"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">
              Теги
            </label>
            <div className="flex gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Добавить тег"
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTag())
                }
              />
              <Button variant="soft" onClick={addTag}>
                <Tag size={16} />
                Добавить
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  onClick={() => setTags(tags.filter((x) => x !== t))}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <label className="text-xs text-black/60 dark:text-white/60">
              Цвет акцента
            </label>
            <div className="flex flex-wrap items-center gap-3">
              {[
                "#60a5fa",
                "#34d399",
                "#f472b6",
                "#fb923c",
                "#a78bfa",
                "#fbbf24",
              ].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={cn(
                    "h-6 w-6 rounded-full border border-black/20 dark:border-white/10",
                    color === c && "ring-2 ring-offset-2 ring-indigo-400"
                  )}
                  style={{ background: c }}
                  aria-label={`Выбрать цвет ${c}`}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <label className="text-xs text-black/60 dark:text-white/60 flex items-center gap-2">
              <ImageIcon size={16} /> Фото (необязательно, 1 шт)
            </label>
            <div className="flex flex-col items-start gap-2">
              <label
                className={cn(
                  "relative flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-indigo-300/60 bg-white/60 px-4 py-4 text-sm font-medium transition hover:bg-indigo-50 dark:bg-white/10 dark:hover:bg-indigo-950/20",
                  imageData && "border-solid border-indigo-400 bg-indigo-50/60 dark:bg-indigo-900/30"
                )}
                style={{ minHeight: 120, minWidth: 180, width: "100%", maxWidth: 320 }}
              >
                {imageData ? (
                  <img
                    src={imageData}
                    alt="Превью"
                    className="h-28 w-full object-cover rounded-lg shadow"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full gap-2 py-2 text-indigo-500 dark:text-indigo-300">
                    <ImageIcon size={32} />
                    <span className="text-xs opacity-70">Выбрать изображение</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={onFile}
                  className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                  tabIndex={-1}
                  aria-label="Выбрать изображение"
                />
              </label>
              {imageData && (
                <Button
                  variant="outline"
                  className="mt-1"
                  onClick={() => setImageData(undefined)}
                >
                  <X size={14} /> Удалить фото
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 -mx-4 mt-3 flex justify-end gap-2 border-t border-black/10 bg-white/90 px-4 py-3 backdrop-blur dark:border-white/10 dark:bg-neutral-900/90">
          <Button variant="outline" onClick={onCancel}>
            <X size={16} />
            Отмена
          </Button>
          <Button type="submit">
            <Sparkles size={16} />
            Сохранить
          </Button>
        </div>
      </form>
    );
  }

  function EventCard({
    ev,
    className = "",
  }: {
    ev: EventItem;
    className?: string;
  }) {
    const accent = ev.color || "#8b5cf6";
    return (
      <motion.button
        layout
        data-timeline-card
        tabIndex={0}
        onClick={() => {
          setSelected(ev);
          setDetailOpen(true);
        }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className={cn(
          "group relative w-full text-left rounded-3xl border border-black/5 p-5 shadow-lg backdrop-blur transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300",
          "bg-white/70 dark:bg-white/5",
          className
        )}
        style={{
          backgroundImage: `linear-gradient(180deg, ${accent}0f, transparent 55%)`,
        }}
      >
        <div
          className="absolute inset-x-4 top-0 h-1 rounded-b-full"
          style={{ background: accent }}
        />
        <div className="flex items-start justify-between gap-3">
          <div className="text-base font-semibold text-neutral-900 dark:text-white sm:text-lg">
            {ev.title}
          </div>
          {admin && (
            <div
              className="flex items-center gap-2 opacity-90"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="soft"
                onClick={() => {
                  setEditing(ev);
                  setDialogOpen(true);
                }}
              >
                <Edit3 size={16} />
              </Button>
              <Button variant="outline" onClick={() => setDeleting(ev)}>
                <Trash2 size={16} />
              </Button>
            </div>
          )}
        </div>
        <div className="pt-1 text-sm text-neutral-700 dark:text-neutral-300">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10">
            <CalendarIcon size={14} /> {formatDateHuman(ev.date)}
          </span>
        </div>
        {ev.description && (
          <p className="pt-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            {ev.description}
          </p>
        )}
        {ev.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {ev.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-700 dark:text-indigo-300"
                style={{ border: `1px solid ${accent}55` }}
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}
      </motion.button>
    );
  }

  function MonthGrid() {
    const grouped: Record<number, EventItem[]> = {};
    for (let i = 0; i < 12; i++) grouped[i] = [];
    for (const ev of filtered) grouped[getMonth(ev.date)].push(ev);
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MONTHS.map((m, i) => (
          <div
            key={m}
            className="rounded-3xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="font-semibold text-neutral-900 dark:text-white">
                {m}
              </div>
              <div className="text-xs opacity-60">
                {grouped[i].length} событий
              </div>
            </div>
            <div className="grid gap-2">
              {grouped[i].length ? (
                grouped[i].map((ev) => <EventCard key={ev.id} ev={ev} />)
              ) : (
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Нет событий
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const currentYearIndex = year === "all" ? -1 : years.indexOf(year);
  function prevYear() {
    if (currentYearIndex > 0) setYear(years[currentYearIndex - 1]);
  }
  function nextYear() {
    if (currentYearIndex < years.length - 1)
      setYear(years[currentYearIndex + 1]);
  }

  return (
    <div className="min-h-dvh bg-gradient-to-br from-indigo-50 via-white to-rose-50 text-neutral-900 transition dark:from-[#0B0B12] dark:via-[#0B0B12] dark:to-[#14121B] dark:text-white">
                  <style>{`
                    :root {
                      scrollbar-color: #a78bfa #f8fafc;
                    }
                    * {
                      scrollbar-width: thin;
                      scrollbar-color: #a78bfa #f8fafc;
                    }
                    *::-webkit-scrollbar {
                      width: 10px;
                      height: 10px;
                      background: #f8fafc;
                    }
                    *::-webkit-scrollbar-thumb {
                      background: linear-gradient(180deg, #a78bfa 0%, #f472b6 100%);
                      border-radius: 8px;
                      border: 2px solid #f8fafc;
                    }
                    *::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(180deg, #8b5cf6 0%, #be185d 100%);
                    }
                    *::-webkit-scrollbar-track {
                      background: #f8fafc;
                    }
                    html.dark, body.dark, .dark * {
                      scrollbar-color: #a78bfa #18181b;
                    }
                    .dark *::-webkit-scrollbar {
                      background: #18181b;
                    }
                    .dark *::-webkit-scrollbar-thumb {
                      background: linear-gradient(180deg, #a78bfa 0%, #f472b6 100%);
                      border: 2px solid #18181b;
                    }
                    .dark *::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(180deg, #8b5cf6 0%, #be185d 100%);
                    }
                    .dark *::-webkit-scrollbar-track {
                      background: #18181b;
                    }
                  `}</style>

      {/* Hero */}
      <header className="relative isolate min-h-[100svh] overflow-hidden">
        <ParallaxBackground />
        {/*<AuroraLayer /> */}
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-40 [background:radial-gradient(600px_200px_at_10%_-10%,#a78bfa,transparent_60%),radial-gradient(600px_200px_at_90%_-10%,#f472b6,transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs backdrop-blur dark:border-white/10 dark:bg-white/10 cursor-default">
              <Sparkles size={14} /> Моя личная хроника
            </div>
            <div className="relative flex items-center gap-2">
              <Button variant="soft" onClick={() => setDark((d) => !d)}>
                {dark ? <SunMedium size={16} /> : <MoonStar size={16} />} Тема
              </Button>
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setSettingsOpen((v) => !v)}
                >
                  <Settings size={16} /> Настройки
                </Button>
                {settingsOpen && (
                  <div className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-neutral-900/95">
                    <button
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                      onClick={() =>
                        downloadFile(
                          "events.json",
                          JSON.stringify(events, null, 2)
                        )
                      }
                    >
                      <FileJson size={16} /> Экспорт JSON
                    </button>
                    <button
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                      onClick={() =>
                        downloadFile(
                          "events.ics",
                          toICS(events),
                          "text/calendar"
                        )
                      }
                    >
                      <FileDown size={16} /> Экспорт iCal
                    </button>
                    {admin && (
                      <>
                        <label className="flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                          <Upload size={16} /> Импорт JSON
                          <input
                            type="file"
                            className="hidden"
                            accept="application/json"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleImportJSON(file);
                              (e.currentTarget as HTMLInputElement).value = "";
                            }}
                          />
                        </label>
                        <button
                          className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                          onClick={clearAll}
                        >
                          <Trash2 size={16} /> Очистить всё
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
                          {!admin ? (
              <Button variant="outline" onClick={handleLogin}>
                <LogIn size={16} /> Войти
              </Button>
            ) : (
              <>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                  {me?.email}
                </div>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut size={16} /> Выйти
                </Button>
              </>
            )}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl cursor-default"
          >
            Экскурсия в мой мир
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300 cursor-default"
          >
            Таймлайн важных событий моей жизни. Фильтры, поиск, теги и красивый
            просмотр деталей.
          </motion.p>
          <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex items-center justify-center">
            <Button
              className="pointer-events-auto backdrop-blur"
              variant="soft"
              onClick={scrollToTimeline}
            >
              <ArrowDown size={16} /> Перейти к событиям
            </Button>
          </div>
        </div>
      </header>

      {/* Контент */}
      <main
        ref={timelineAnchorRef}
        className="mx-auto max-w-6xl mt-6 px-4 pb-24"
      >
        <section className="-mt-6 mb-6 rounded-3xl border border-black/10 bg-white/70 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative w-full">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
                  size={18}
                />
                <Input
                  className="pl-10"
                  placeholder="Поиск по событиям, описаниям и тегам"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <Button
                variant="soft"
                onClick={() => {
                  setActiveTags([]);
                  setYear("all");
                  setMonth("all");
                  setQuery("");
                }}
              >
                <Filter size={16} />
              </Button>
              {admin && (
                <Button
                  onClick={() => {
                    setEditing(null);
                    setDialogOpen(true);
                  }}
                >
                  <Plus size={16} /> Новое
                </Button>
              )}
            </div>
            <div className="text-xs opacity-70">
              Найдено {filtered.length} событий
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">
                Годы
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip
                  label="Все"
                  selected={year === "all"}
                  onClick={() => setYear("all")}
                />
                {years.map((y) => (
                  <Chip
                    key={y}
                    label={String(y)}
                    selected={year === y}
                    onClick={() => setYear(y)}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">
                Месяцы
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip
                  label="Все"
                  selected={month === "all"}
                  onClick={() => setMonth("all")}
                />
                {MONTHS.map((m, i) => (
                  <Chip
                    key={m}
                    label={m.slice(0, 3)}
                    selected={month === i}
                    onClick={() => setMonth(i)}
                  />
                ))}
              </div>
            </div>
            {allTags.length ? (
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">
                  Теги
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      selected={activeTags.includes(t)}
                      onClick={() =>
                        setActiveTags((prev) =>
                          prev.includes(t)
                            ? prev.filter((x) => x !== t)
                            : [...prev, t]
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </section>

        {year !== "all" && (
          <div className="mb-4 flex items-center justify-between">
            <Button variant="soft" onClick={prevYear}>
              <ChevronLeft size={16} /> Предыдущий
            </Button>
            <div className="rounded-full border border-black/10 bg-white/70 px-4 py-1 text-sm shadow-sm dark:border-white/10 dark:bg-white/10">
              {year}
            </div>
            <Button variant="soft" onClick={nextYear}>
              Следующий <ChevronRight size={16} />
            </Button>
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {view === "timeline" ? (
            <motion.div
              ref={listRef}
              layout
              className="relative grid gap-5 sm:gap-6 md:grid-cols-2"
            >
              {filtered.length ? (
                filtered.map((ev, idx) => (
                  <EventCard
                    key={ev.id}
                    ev={ev}
                    className={cn(
                      idx % 2 === 1 && "md:-translate-y-2",
                      "transition-transform"
                    )}
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl border border-black/10 bg-white/70 p-6 text-center text-sm text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
                >
                  Ничего не найдено. Попробуй изменить фильтры или добавить
                  событие.
                </motion.div>
              )}
            </motion.div>
          ) : (
            <MonthGrid />
          )}
        </AnimatePresence>
      </main>
{/* ======= Модалка авторизации ======= */}
<AnimatePresence>
  {authOpen && (
    <AuthDialog
      open={authOpen}
      mode={authMode}
      onClose={()=>setAuthOpen(false)}
      onSuccess={async()=>{ await refreshMe(); }}
    />
  )}
</AnimatePresence>
{/* ======= Подтверждение удаления ======= */}
<ConfirmDialog
  open={!!deleting}
  title="Удалить событие?"
  description={`Событие «${deleting?.title}» будет удалено безвозвратно.`}
  confirmText="Удалить"
  onConfirm={() => {
    if (deleting) deleteEvent(deleting.id);
    setDeleting(null);
    setDetailOpen(false);
    setSelected(null);
  }}
  onCancel={() => setDeleting(null)}
/>
{/* ======= Подтверждение выхода ======= */}
<ConfirmDialog
  open={logoutConfirmOpen}
  title="Выйти из аккаунта?"
  description="Сессия будет завершена, действия администратора станут недоступны."
  confirmText="Выйти"
  onConfirm={async ()=>{
    try { await api.logout(); } finally {
      setMe(null);
      setLogoutConfirmOpen(false);
    }
  }}
  onCancel={()=>setLogoutConfirmOpen(false)}
/>
      {/* Диалог добавления/редактирования */}
      <AnimatePresence>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Wand2 size={18} />{" "}
              {editing ? "Редактировать событие" : "Новое событие"}
            </div>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>
              <X size={18} />
            </Button>
          </div>
          <div className="px-4">
            <EventForm
              initial={editing || undefined}
              onCancel={() => setDialogOpen(false)}
              onSubmit={(ev) => {
                upsertEvent(ev);
                setDialogOpen(false);
                setEditing(null);
              }}
            />
          </div>
        </Dialog>
      </AnimatePresence>

      {/* Диалог деталей события */}
      <AnimatePresence>
        <Dialog open={detailOpen} onClose={() => setDetailOpen(false)}>
          {selected && (
            <>
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Info size={18} /> {selected.title}
                </div>
                <Button variant="ghost" onClick={() => setDetailOpen(false)}>
                  <X size={18} />
                </Button>
              </div>
              <div className="grid max-h-[85vh] gap-3 overflow-y-auto p-4">
                <div className="text-sm opacity-80">
                  <CalendarIcon className="-mt-0.5 inline" size={14} />{" "}
                  {formatDateHuman(selected.date)}
                </div>
                {selected.imageData && (
                  <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
                    <img
                      src={selected.imageData}
                      alt={selected.title}
                      className="max-h-[60vh] w-full object-cover"
                    />
                  </div>
                )}
                {selected.description && (
                  <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                    {selected.description}
                  </p>
                )}
                {selected.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-xs dark:border-white/10 dark:bg-white/10"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                ) : null}
                {admin && (
                  <div className="mt-2 flex items-center justify-end gap-2">
                    <Button
                      variant="soft"
                      onClick={() => {
                        setEditing(selected);
                        setDetailOpen(false);
                        setDialogOpen(true);
                      }}
                    >
                      <Edit3 size={16} /> Редактировать
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setDeleting(selected)}
                    >
                      <Trash2 size={16} /> Удалить
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </Dialog>
      </AnimatePresence>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-xs flex flex-col items-center text-center opacity-30 cursor-default">
        <div>Не уходи безропотно во тьму,</div>
        <div>Будь яростней пред ночью всех ночей,</div>
        <div>Не дай погаснуть свету своему!</div>
      </footer>
    </div>
  );
}
