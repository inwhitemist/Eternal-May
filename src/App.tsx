"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

// ------------------------------------------------------------
// Типы данных
// ------------------------------------------------------------
type EventItem = {
  id: string;
  date: string; // ISO 8601: YYYY-MM-DD
  title: string;
  description?: string;
  tags: string[];
  color?: string; // кастомный цвет для акцента
  emoji?: string; // устарело, оставлено для совместимости
  imageData?: string; // одно фото (data URL)
};

// ------------------------------------------------------------
// Вспомогательные утилиты
// ------------------------------------------------------------
const STORAGE_KEY = "life-timeline-events-v1";
const THEME_KEY = "life-timeline-theme";
const ADMIN_KEY = "life-timeline-admin"; // sessionStorage

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
  return new Date(iso).getMonth(); // 0-11
}

function downloadFile(filename: string, content: string, type = "application/json") {
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
    const dtEnd = dtEndDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${ev.id}@life-timeline`);
    lines.push(`DTSTAMP:${dtStart}`);
    lines.push(`DTSTART:${dtStart}`);
    lines.push(`DTEND:${dtEnd}`);
    lines.push(`SUMMARY:${ev.title}`);
    // Экранируем переводы строк для iCal
    if (ev.description) lines.push(`DESCRIPTION:${ev.description.replace(/\n/g, "\\n")}`);
    if (ev.tags?.length) lines.push(`CATEGORIES:${ev.tags.join(',')}`);
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

// Начальные примеры (можно удалить)
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

// ------------------------------------------------------------
// Мини UI-компоненты (tailwind + украшательства)
// ------------------------------------------------------------
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
    soft:
      "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(base, variants[variant], disabled && "opacity-60 cursor-not-allowed", className)}
    >
      {children}
    </button>
  );
}

function Chip({ selected, label, onClick }: { selected?: boolean; label: string; onClick?: () => void }) {
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

function Divider() {
  return <div className="h-px w-full bg-black/10 dark:bg-white/10" />;
}

// Простая шторка-диалог
function Dialog({ open, onClose, children }: React.PropsWithChildren<{ open: boolean; onClose: () => void }>) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        className="relative z-10 w-[92vw] max-w-2xl rounded-2xl border border-white/10 bg-white/95 shadow-2xl dark:bg-neutral-900/95"
      >
        {/* Контейнер с фиксированным заголовком и скроллом тела, чтобы кнопки не уходили */}
        <div className="flex max-h-[85vh] flex-col">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function AuroraLayer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    let mx = 0, my = 0;   // current (-1..1)
    let tx = 0, ty = 0;   // target (-1..1)
    const lerp = (a:number,b:number,t:number)=>a+(b-a)*t;

    const onPointer = (e: PointerEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      tx = ((e.clientX - r.left)/r.width - .5) * 2;
      ty = ((e.clientY - r.top)/r.height - .5) * -2;
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      const g = (e.gamma ?? 0) / 45;
      const b = (e.beta ?? 0) / 45;
      tx = g; ty = -b;
    };

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = mq.matches;
    const onMQ = () => { reduced = mq.matches; };
    mq.addEventListener?.('change', onMQ);

    let raf = 0;
    const tick = () => {
      if (!mounted) return;
      if (!reduced) { mx = lerp(mx, tx, 0.08); my = lerp(my, ty, 0.08); } else { mx=my=tx=ty=0; }
      if (ref.current) {
        ref.current.style.setProperty('--mx', String(mx));
        ref.current.style.setProperty('--my', String(my));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('deviceorientation', onOrient);

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('deviceorientation', onOrient);
      mq.removeEventListener?.('change', onMQ);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      style={{
        ['--c1' as any]: 'rgba(139, 92, 246, 0.28)', // violet
        ['--c2' as any]: 'rgba(59, 130, 246, 0.24)',  // blue
        ['--c3' as any]: 'rgba(236, 72, 153, 0.22)',  // pink
      }}
    >
      {[{s:800,b:130,o:.65,c:'var(--c1)',dx:90,dy:40},
        {s:620,b:110,o:.60,c:'var(--c2)',dx:-120,dy:25},
        {s:700,b:120,o:.50,c:'var(--c3)',dx:15,dy:-70}].map((m,i)=>(
        <span key={i}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: m.s, height: m.s,
            left: '45%', top:'30%',
            transform: `translate3d(calc(-50% + var(--mx)*${m.dx}px), calc(-50% + var(--my)*${m.dy}px), 0)`,
            background: `radial-gradient(50% 50% at 50% 50%, ${m.c}, transparent 60%)`,
            filter: `blur(${m.b}px)`,
            opacity: m.o,
          }}
        />
      ))}
      <span className="absolute inset-0 opacity-35 mix-blend-overlay"
            style={{backgroundImage:'repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 1px, transparent 1px 10px)'}}/>
    </div>
  );
}

// ------------------------------------------------------------
// Основное приложение
// ------------------------------------------------------------
export default function LifeTimelineApp() {
  // Тема
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? saved === "dark" : window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark]);

  // Данные
  const [events, setEvents] = useState<EventItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return SAMPLE;
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  // Admin (client-side, для удобства локального ведения)
  const [admin, setAdmin] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(ADMIN_KEY) === "1";
  });
  function handleLogin() {
    const pin = prompt("Введите админ-PIN/пароль (на сессию)");
    if (!pin) return;
    sessionStorage.setItem(ADMIN_KEY, "1");
    setAdmin(true);
  }
  function handleLogout() {
    sessionStorage.removeItem(ADMIN_KEY);
    setAdmin(false);
  }

  // UI состояние
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<number | "all">("all");
  const [month, setMonth] = useState<number | "all">("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [view, setView] = useState<"timeline" | "calendar">("timeline");
  const [dialogOpen, setDialogOpen] = useState(false); // add/edit
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [detailOpen, setDetailOpen] = useState(false); // details
  const [selected, setSelected] = useState<EventItem | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

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
        !activeTags.length ? true : activeTags.every((t) => e.tags.map((x) => x.toLowerCase()).includes(t.toLowerCase()))
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

  // Клавиатурная навигация между карточками
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!listRef.current) return;
      const items = Array.from(listRef.current.querySelectorAll("[data-timeline-card]")) as HTMLElement[];
      const activeIndex = items.findIndex((el) => el === document.activeElement);
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
  const scrollToTimeline = () => timelineAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  // CRUD
  function upsertEvent(ev: EventItem) {
    setEvents((prev) => {
      const idx = prev.findIndex((x) => x.id === ev.id);
      if (idx === -1) return [...prev, ev];
      const copy = [...prev];
      copy[idx] = ev;
      return copy;
    });
  }
  function deleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }
  function clearAll() {
    if (!admin) return;
    if (confirm("Удалить все события?")) setEvents([]);
  }

  // Импорт JSON (только для admin)
  function handleImportJSON(file: File) {
    if (!admin) return;
    const reader = new FileReader();
    reader.onload = () => {
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
          setEvents(valid);
        } else {
          alert("Ожидался массив событий");
        }
      } catch (e) {
        alert("Не удалось прочитать JSON");
      }
    };
    reader.readAsText(file);
  }

  // Форма добавления/редактирования
  function EventForm({ initial, onSubmit, onCancel }: { initial?: Partial<EventItem>; onSubmit: (e: EventItem) => void; onCancel: () => void }) {
    const [date, setDate] = useState(initial?.date || new Date().toISOString().slice(0, 10));
    const [title, setTitle] = useState(initial?.title || "");
    const [description, setDescription] = useState(initial?.description || "");
    const [tags, setTags] = useState((initial?.tags as string[]) || []);
    const [tagInput, setTagInput] = useState("");
    const [color, setColor] = useState(initial?.color || "");
    const [imageData, setImageData] = useState<string | undefined>(initial?.imageData);

    const presetColors = ["#60a5fa", "#34d399", "#f472b6", "#fb923c", "#a78bfa", "#fbbf24"];

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
        {/* Тело формы со скроллом */}
        <div className="grid max-h-[60vh] gap-3 overflow-y-auto pr-1">
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">Дата</label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">Заголовок</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Например: Переезд в новый город" />
          </div>
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">Описание</label>
            <Textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Короткая история/заметки" />
          </div>
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">Теги</label>
            <div className="flex gap-2">
              <Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Добавить тег" onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())} />
              <Button variant="soft" onClick={addTag}><Tag size={16} />Добавить</Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((t) => (
                <Chip key={t} label={t} onClick={() => setTags(tags.filter((x) => x !== t))} />
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <label className="text-xs text-black/60 dark:text-white/60">Цвет акцента</label>
            <div className="flex flex-wrap items-center gap-3">
              {presetColors.map((c) => (
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
            <label className="text-xs text-black/60 dark:text-white/60 flex items-center gap-2"><ImageIcon size={16}/> Фото (необязательно, 1 шт)</label>
            <input type="file" accept="image/*" onChange={onFile} className="text-xs" />
            {imageData && (
              <div className="mt-2 overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageData} alt="Превью" className="max-h-48 w-full object-cover" />
              </div>
            )}
          </div>
        </div>
        {/* Футер формы фиксируется и всегда виден */}
        <div className="sticky bottom-0 -mx-4 mt-3 flex justify-end gap-2 border-t border-black/10 bg-white/90 px-4 py-3 backdrop-blur dark:border-white/10 dark:bg-neutral-900/90">
          <Button variant="outline" onClick={onCancel}><X size={16} />Отмена</Button>
          <Button type="submit"><Sparkles size={16} />Сохранить</Button>
        </div>
      </form>
    );
  }

  // Рендер карточки события (минималистичный акцент без эмодзи и полос)
  function EventCard({ ev, className = "" }: { ev: EventItem; className?: string }) {
    const accent = ev.color || "#8b5cf6";
    return (
      <motion.button
        layout
        data-timeline-card
        tabIndex={0}
        onClick={() => { setSelected(ev); setDetailOpen(true); }}
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
        {/* Мини-акцент в виде тонкой цветной полоски сверху */}
        <div className="absolute inset-x-4 top-0 h-1 rounded-b-full" style={{ background: accent }} />
        <div className="flex items-start justify-between gap-3">
          <div className="text-base font-semibold text-neutral-900 dark:text-white sm:text-lg">
            {ev.title}
          </div>
          {/* Admin actions */}
          {admin && (
            <div className="flex items-center gap-2 opacity-90" onClick={(e) => e.stopPropagation()}>
              <Button variant="soft" onClick={() => { setEditing(ev); setDialogOpen(true); }}>
                <Edit3 size={16} />
              </Button>
              <Button variant="outline" onClick={() => deleteEvent(ev.id)}>
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
              <span key={t} className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-700 dark:text-indigo-300" style={{ border: `1px solid ${accent}55` }}>
                #{t}
              </span>
            ))}
          </div>
        ) : null}
      </motion.button>
    );
  }

  // Календарная сетка по месяцам выбранного года
  function MonthGrid() {
    const grouped: Record<number, EventItem[]> = {};
    for (let i = 0; i < 12; i++) grouped[i] = [];
    for (const ev of filtered) grouped[getMonth(ev.date)].push(ev);

    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MONTHS.map((m, i) => (
          <div key={m} className="rounded-3xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mb-3 flex items-center justify-between">
              <div className="font-semibold text-neutral-900 dark:text-white">{m}</div>
              <div className="text-xs opacity-60">{grouped[i].length} событий</div>
            </div>
            <div className="grid gap-2">
              {grouped[i].length ? (
                grouped[i].map((ev) => <EventCard key={ev.id} ev={ev} />)
              ) : (
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Нет событий</div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Навигация по годам/месяцам
  const currentYearIndex = year === "all" ? -1 : years.indexOf(year);
  function prevYear() {
    if (currentYearIndex > 0) setYear(years[currentYearIndex - 1]);
  }
  function nextYear() {
    if (currentYearIndex < years.length - 1) setYear(years[currentYearIndex + 1]);
  }

  // ------------------------------------------------------------
  // Разметка
  // ------------------------------------------------------------
  return (
    <div className="min-h-dvh bg-gradient-to-br from-indigo-50 via-white to-rose-50 text-neutral-900 transition dark:from-[#0B0B12] dark:via-[#0B0B12] dark:to-[#14121B] dark:text-white">
      {/* Глобальный стиль скроллбара */}
      <style>{`
        :root{scrollbar-color: rgba(99,102,241,.7) transparent;}
        *{scrollbar-width: thin;}
        *::-webkit-scrollbar{height:10px;width:10px}
        *::-webkit-scrollbar-track{background:transparent}
        *::-webkit-scrollbar-thumb{background:linear-gradient(180deg, rgba(99,102,241,.8), rgba(244,114,182,.8));border-radius:9999px}
        *::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg, rgba(99,102,241,1), rgba(244,114,182,1))}
      `}</style>

      {/* Hero */}
      <header className="relative isolate min-h-[100svh] overflow-hidden">
        {/* Фоновая аура */}
        {/* Дополнительная лёгкая подложка-градиент */}
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-40 [background:radial-gradient(600px_200px_at_10%_-10%,#a78bfa,transparent_60%),radial-gradient(600px_200px_at_90%_-10%,#f472b6,transparent_60%)]" />

        {/* Верхняя панель */}
        <div className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs backdrop-blur dark:border-white/10 dark:bg-white/10">
              <Sparkles size={14} /> Моя личная хроника
            </div>
            <div className="relative flex items-center gap-2">
              <Button variant="soft" onClick={() => setDark((d) => !d)}>
                {dark ? <SunMedium size={16} /> : <MoonStar size={16} />} Тема
              </Button>
              <div className="relative">
                <Button variant="outline" onClick={() => setSettingsOpen((v) => !v)}><Settings size={16}/> Настройки</Button>
                {settingsOpen && (
                  <div className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-neutral-900/95">
                    <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10" onClick={() => downloadFile("events.json", JSON.stringify(events, null, 2))}>
                      <FileJson size={16}/> Экспорт JSON
                    </button>
                    <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10" onClick={() => downloadFile("events.ics", toICS(events), "text/calendar")}>
                      <FileDown size={16}/> Экспорт iCal
                    </button>
                    {admin && (
                      <>
                        <label className="flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                          <Upload size={16}/> Импорт JSON
                          <input type="file" className="hidden" accept="application/json" onChange={(e) => { const file = e.target.files?.[0]; if (file) handleImportJSON(file); (e.currentTarget as HTMLInputElement).value = ""; }} />
                        </label>
                        <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20" onClick={clearAll}>
                          <Trash2 size={16}/> Очистить всё
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
              {!admin ? (
                <Button variant="outline" onClick={handleLogin}><LogIn size={16}/> Войти</Button>
              ) : (
                <Button variant="outline" onClick={handleLogout}><LogOut size={16}/> Выйти</Button>
              )}
            </div>
          </div>
        </div>

        {/* Центр hero */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 text-center">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Экскурсия в мой мир
          </motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6, delay:.05}} className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            Таймлайн важных событий моей жизни. Фильтры, поиск, теги и красивый просмотр деталей.
          </motion.p>

          {/* CTA закреплена снизу, но внутри hero */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex items-center justify-center">
            <Button className="pointer-events-auto backdrop-blur" variant="soft" onClick={scrollToTimeline}>
              <ArrowDown size={16}/> Перейти к событиям
            </Button>
          </div>
        </div>
      </header>

      {/* Контент */}
      <main ref={timelineAnchorRef} className="mx-auto max-w-6xl mt-6 px-4 pb-24">
        {/* Панель фильтров под hero — отдельная секция, чтобы не налезала на CTA */}
        <section className="-mt-6 mb-6 rounded-3xl border border-black/10 bg-white/70 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60" size={18} />
                <Input className="pl-10" placeholder="Поиск по событиям, описаниям и тегам" value={query} onChange={(e) => setQuery(e.target.value)} />
              </div>
              <Button variant="soft" onClick={() => { setActiveTags([]); setYear("all"); setMonth("all"); setQuery(""); }}>
                <Filter size={16} />
              </Button>
              {admin && (
                <Button onClick={() => { setEditing(null); setDialogOpen(true); }}>
                  <Plus size={16}/> Новое
                </Button>
              )}
            </div>
            <div className="text-xs opacity-70">Найдено {filtered.length} событий</div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">Годы</div>
              <div className="flex flex-wrap gap-2">
                <Chip label="Все" selected={year === "all"} onClick={() => setYear("all")} />
                {years.map((y) => (<Chip key={y} label={String(y)} selected={year === y} onClick={() => setYear(y)} />))}
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">Месяцы</div>
              <div className="flex flex-wrap gap-2">
                <Chip label="Все" selected={month === "all"} onClick={() => setMonth("all")} />
                {MONTHS.map((m, i) => (<Chip key={m} label={m.slice(0, 3)} selected={month === i} onClick={() => setMonth(i)} />))}
              </div>
            </div>
            {allTags.length ? (
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">Теги</div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((t) => (
                    <Chip key={t} label={t} selected={activeTags.includes(t)} onClick={() => setActiveTags((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t])} />
                  ))}
                </div>
              </div>
            ) : <div/>}
          </div>
        </section>
        {/* Навигация по годам */}
        {year !== "all" && (
          <div className="mb-4 flex items-center justify-between">
            <Button variant="soft" onClick={prevYear}><ChevronLeft size={16} /> Предыдущий</Button>
            <div className="rounded-full border border-black/10 bg-white/70 px-4 py-1 text-sm shadow-sm dark:border-white/10 dark:bg-white/10">{year}</div>
            <Button variant="soft" onClick={nextYear}>Следующий <ChevronRight size={16} /></Button>
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {view === "timeline" ? (
            // Новый двуколоночный layout с лёгкой асимметрией
            <motion.div ref={listRef} layout className="relative grid gap-5 sm:gap-6 md:grid-cols-2">
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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-black/10 bg-white/70 p-6 text-center text-sm text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                  Ничего не найдено. Попробуй изменить фильтры или добавить событие.
                </motion.div>
              )}
            </motion.div>
          ) : (
            <MonthGrid />)
          }
        </AnimatePresence>
      </main>

      {/* Диалог добавления/редактирования */}
      <AnimatePresence>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Wand2 size={18} /> {editing ? "Редактировать событие" : "Новое событие"}
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

      {/* Диалог деталей события (с фото) */}
      <AnimatePresence>
        <Dialog open={detailOpen} onClose={() => setDetailOpen(false)}>
          {selected && (
            <>
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Info size={18} /> {selected.title}
                </div>
                <Button variant="ghost" onClick={() => setDetailOpen(false)}><X size={18}/></Button>
              </div>
              <div className="grid max-h-[85vh] gap-3 overflow-y-auto p-4">
                <div className="text-sm opacity-80"><CalendarIcon className="-mt-0.5 inline" size={14}/> {formatDateHuman(selected.date)}</div>
                {selected.imageData && (
                  <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selected.imageData} alt={selected.title} className="max-h-[60vh] w-full object-cover" />
                  </div>
                )}
                {selected.description && (
                  <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">{selected.description}</p>
                )}
                {selected.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((t) => (
                      <span key={t} className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-xs dark:border-white/10 dark:bg-white/10">#{t}</span>
                    ))}
                  </div>
                ) : null}
                {admin && (
                  <div className="mt-2 flex items-center justify-end gap-2">
                    <Button variant="soft" onClick={() => { setEditing(selected); setDetailOpen(false); setDialogOpen(true); }}><Edit3 size={16}/> Редактировать</Button>
                    <Button variant="outline" onClick={() => { deleteEvent(selected.id); setDetailOpen(false); }}><Trash2 size={16}/> Удалить</Button>
                  </div>
                )}
              </div>
            </>
          )}
        </Dialog>
      </AnimatePresence>

      {/* Футер */}
      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-8 text-xs text-neutral-500">
        Сделано с ❤️ — персональная "экскурсия" по важным моментам. Админ-режим — клиентский (для локального ведения). Для продакшена рекомендую серверную аутентификацию.
      </footer>
    </div>
  );
}
