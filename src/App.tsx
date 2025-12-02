"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isObjectId } from "./utils/isObjectId";
import { api, MeUser } from "./api";
import ParallaxBackground from "./components/ParallaxBackground";
import FloatingLines from './components/FloatingLines';
import {
  Upload,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Trash2,
  LogIn,
  LogOut,
  ArrowDown,
  Settings,
  FileJson,
  FileDown,
  Trophy,
  AlertCircle,
  Users,
} from "lucide-react";
import { Loader2 } from "lucide-react";
import { Button, Dialog, ConfirmDialog, Input } from "./components/ui";
import FiltersPanel from "./components/FiltersPanel";
import EventList from "./components/EventList";
const AuthDialog = React.lazy(() => import("./components/AuthDialog"));
const AddDialog = React.lazy(() => import("./components/AddDialog"));
const loadDetailDialog = () => import("./components/DetailDialog");
const DetailDialog = React.lazy(loadDetailDialog);
let detailDialogPreloadPromise: Promise<typeof import("./components/DetailDialog")> | null = null;
const preloadDetailDialog = () => {
  if (!detailDialogPreloadPromise) {
    detailDialogPreloadPromise = loadDetailDialog();
  }
  return detailDialogPreloadPromise;
};
const AdminDialog = React.lazy(() => import("./components/AdminDialog"));
import ShinyText from './components/ShinyText';
import ImagePreview from "./components/ImagePreview";
import { useEventFilters } from "./hooks/useEventFilters";
import { useDialogs } from "./hooks/useDialogs";
import { EventItem } from "./types";
import { formatDateHuman, uid, downloadFile, toICS } from "./utils/helpers";

/* =========================
   Вспомогательные утилиты
========================= */
const THEME_KEY = "life-timeline-theme";
const EVENTS_CACHE_KEY = "life-timeline-events-cache";
const LOADING_TIPS = [
  "Собираем лепестки воспоминаний…",
  "Подкрашиваем таймлайн и теги…",
  "Синхронизируем события с сервером…",
  "Проверяем секреты и легендарные моменты…",
  "Настраиваем фильтры и поиск…",
  "Вспоминаем всё на свете…",
  "Считаем дни и минуты…",
  "Апаем 10-й лвл… (KD 4/19)",
];

/* =========================
   Основное приложение
========================= */
export default function LifeTimelineApp() {
  // Тема
  const [dark] = useState<boolean>(() => {
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
  const [events, setEvents] = useState<EventItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(EVENTS_CACHE_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  });
  const [me, setMe] = useState<MeUser | null>(null);
  const [meLoading, setMeLoading] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState<boolean>(false);
  const logged = Boolean(me);
  const admin = me?.role === "admin";

  async function refreshMe() {
    try {
      const r = await api.me();
      setMe(r.user);
    } catch {
      setMe(null);
    } finally {
      setMeLoading(false);
    }
  }
  async function refreshEvents() {
    try {
      setLoadingEvents(true);
      const r = await api.getEvents();
      const list = r.events || [];
      setEvents(list);
      try { localStorage.setItem(EVENTS_CACHE_KEY, JSON.stringify(list)); } catch {}
    } catch {
      setEvents([]);
    } finally {
      setLoadingEvents(false);
    }
  }

  useEffect(() => {
    refreshMe();
  }, []);

  useEffect(() => {
    if (meLoading) return;
    if (me) {
      refreshEvents();
    } else {
      setEvents([]);
      setLoadingEvents(false);
      try { localStorage.removeItem(EVENTS_CACHE_KEY); } catch {}
    }
  }, [me, meLoading]);

   const {
     query,
     setQuery,
     year,
     setYear,
     month,
     setMonth,
     activeTags,
     setActiveTags,
     view,
     setView,
     allTags,
     years,
     filtered,
     prevYear,
     nextYear,
   } = useEventFilters(events);

   const {
     dialogOpen,
     setDialogOpen,
     authOpen,
     setAuthOpen,
     authMode,
     setAuthMode,
     logoutConfirmOpen,
     setLogoutConfirmOpen,
     editing,
     setEditing,
     detailOpen,
     setDetailOpen,
     selected,
     setSelected,
    imagePreview,
    setImagePreview,
    settingsOpen,
    setSettingsOpen,
    usersOpen,
    setUsersOpen,
    adminOpen,
    setAdminOpen,
    deleting,
    setDeleting,
  } = useDialogs();

  const [unlockOpen, setUnlockOpen] = useState(false);
  const [unlockCode, setUnlockCode] = useState("");
  const [unlockError, setUnlockError] = useState<string | null>(null);
  const [unlockedEvent, setUnlockedEvent] = useState<EventItem | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const titleClickCounterRef = useRef(0);
  const [showDaysSince2019, setShowDaysSince2019] = useState(false);
  const daysSinceJuly2019 = Math.max(
    0,
    Math.floor(
      (Date.now() - new Date(2019, 6, 3).getTime()) / (1000 * 60 * 60 * 24)
    )
  );
  const handleSecretTitleClick = () => {
    if (showDaysSince2019) return;
    titleClickCounterRef.current += 1;
    if (titleClickCounterRef.current >= 5) {
      setShowDaysSince2019(true);
    }
  };

  const floatingLinesConfig = useMemo(
    () => ({
      enabledWaves: ["top", "middle", "bottom"] as Array<"top" | "middle" | "bottom">,
      lineCount: [8, 8, 8],
      lineDistance: [30, 30, 30]
    }),
    []
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    const runPreload = () => {
      if (!cancelled) {
        preloadDetailDialog();
      }
    };
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      const idleHandle = w.requestIdleCallback(runPreload, { timeout: 2000 });
      return () => {
        cancelled = true;
        w.cancelIdleCallback?.(idleHandle);
      };
    }
    const timeout = window.setTimeout(runPreload, 1000);
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, []);
  // Loading overlay handling: scroll away, lock scroll, then restore
  const prevScrollRef = useRef(0);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
  const [loadingTipIndex, setLoadingTipIndex] = useState(() =>
    Math.floor(Math.random() * LOADING_TIPS.length)
  );
  useEffect(() => {
    if (loadingEvents && logged) {
      //try { prevScrollRef.current = window.scrollY; } catch {}
      setShowLoadingOverlay(true);
      //try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch {}
      try { document.body.style.overflow = "hidden"; } catch {}
    } else {
      try { document.body.style.overflow = ""; } catch {}
      // small delay to avoid flicker
      const t = setTimeout(() => setShowLoadingOverlay(false), 150);
      return () => clearTimeout(t);
    }
  }, [loadingEvents, logged]);
  useEffect(() => {
    if (!showLoadingOverlay) return;
    setLoadingTipIndex(Math.floor(Math.random() * LOADING_TIPS.length));
  }, [showLoadingOverlay]);

  // Close image preview on Escape
  useEffect(() => {
    if (!imagePreview) return;
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setImagePreview(null); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [imagePreview, setImagePreview]);
  const handleSelect = React.useCallback((ev: EventItem) => {
    setSelected(ev);
    setDetailOpen(true);
  }, [setSelected, setDetailOpen]);

  useEffect(() => {
    const sequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
    ];
    let idx = 0;
    function onSecret(e: KeyboardEvent) {
      if (e.key === sequence[idx]) {
        idx++;
        if (idx === sequence.length) {
          setUnlockOpen(true);
          idx = 0;
        }
      } else {
        idx = 0;
      }
    }
    window.addEventListener("keydown", onSecret);
    return () => window.removeEventListener("keydown", onSecret);
  }, []);

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

  async function handleUnlock() {
    try {
      const r = await api.unlockEvent(unlockCode.trim());
      await refreshEvents();
      setUnlockOpen(false);
      setUnlockCode("");
      setUnlockedEvent(r.event);
      setHighlightedId(r.event.id);
      setTimeout(() => setHighlightedId(null), 4000);
    } catch (e: any) {
      if (e?.message === "invalid_code") setUnlockError("Неверный код");
      else if (e?.message === "already_unlocked")
        setUnlockError("У вас уже есть это событие");
      else setUnlockError("Ошибка, попробуйте позже");
    }
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
              code: x.code || undefined,
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


  const currentLoadingTip =
    LOADING_TIPS[loadingTipIndex] ?? LOADING_TIPS[0];

  return (
    <div className="min-h-dvh bg-linear-to-br from-indigo-50 via-white to-rose-50 text-neutral-900 transition dark:from-[#0B0B12] dark:via-[#0B0B12] dark:to-[#14121B] dark:text-white">
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
      <header className="relative isolate min-h-svh overflow-hidden">
        <ParallaxBackground />
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <FloatingLines
            enabledWaves={floatingLinesConfig.enabledWaves}
            lineCount={floatingLinesConfig.lineCount}
            lineDistance={floatingLinesConfig.lineDistance}
            bendRadius={5}
            bendStrength={-0.5}
            animationSpeed={0.8}
            parallax={true}
            parallaxStrength={0.1}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-linear-to-b from-transparent via-white/70 to-white dark:via-neutral-900/60 dark:to-neutral-950" />
        {/*<AuroraLayer /> */}
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-40 [background:radial-gradient(600px_200px_at_10%_-10%,#a78bfa,transparent_60%),radial-gradient(600px_200px_at_90%_-10%,#f472b6,transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs backdrop-blur-sm dark:border-white/10 dark:bg-white/10 cursor-default">
              <Sparkles size={14} />
              <span
                className="cursor-pointer select-none"
                onClick={handleSecretTitleClick}
                role="button"
              >
                Eternal May
              </span>
              {showDaysSince2019 && (
                <span className="font-semibold text-neutral-600 dark:text-neutral-200">
                  {daysSinceJuly2019}
                </span>
              )}
            </div>
            <div className="relative flex items-center gap-2">
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setSettingsOpen((v) => !v)}
                >
                  <Settings size={16} /> Настройки
                </Button>
                {settingsOpen && (
                  <div className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/95">
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
                        <button
                          className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                          onClick={() => {
                            setSettingsOpen(false);
                            setAdminOpen(true);
                          }}
                        >
                          <Users size={16} /> Админ-панель
                        </button>
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
              {!logged ? (
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

        <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-4xl font-black tracking-tight sm:text-6xl md:text-7xl cursor-default select-none"
            style={{
              textShadow:
                "0 0 16px #a78bfa88, 0 0 32px #f472b688, 0 2px 8px #fff, 0 0 2px #fff",
              // мягкое фиолетово-розовое свечение + белый "bleed"
            }}
          >
          
            <span className="relative z-10">Экскурсия в мой мир</span>
            {/* Слой свечения поверх текста */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                "--mid": "40%",
                "--end": "80%",
                background:
                  "radial-gradient(ellipse at 50% 60%, #a78bfa55 0%, #f472b655 var(--mid), transparent var(--end))",
                filter: "blur(24px)",
                opacity: 0.3,
                mixBlendMode: "screen",
                } as React.CSSProperties}
              animate={{
                "--mid": ["40%", "60%", "40%"],
                "--end": ["80%", "90%", "80%"],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 cursor-default"
          >
            Memoria est thesaurus omnium rerum
            
          </motion.p>
        
            <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex items-center justify-center">
              
              <Button
                className="pointer-events-auto backdrop-blur-sm"
                variant="soft"
                onClick={scrollToTimeline}
              >
                                
                <ArrowDown size={16} /> <ShinyText 
                  text="Перейти к событиям" 
                  disabled={false} 
                  speed={3} 
                />
              </Button>
              
            </div>
        
        </div>
      </header>

      {/* Контент */}
      {/* Контент */}
      <main
        ref={timelineAnchorRef}
        className="relative mx-auto max-w-6xl mt-6 px-4 pb-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        >
          <div
            className="absolute left-1/2 top-0 h-[160%] w-[200%] -translate-x-1/2 [background:radial-gradient(ellipse_at_20%_-10%,rgba(167,139,250,0.35),transparent_55%),radial-gradient(ellipse_at_80%_-5%,rgba(244,114,182,0.28),transparent_55%)] dark:[background:radial-gradient(ellipse_at_15%_-10%,rgba(124,115,255,0.25),transparent_60%),radial-gradient(ellipse_at_85%_-5%,rgba(236,72,153,0.25),transparent_60%)]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white to-white dark:from-[#0b0b12]/95 dark:via-[#090910] dark:to-[#07070c]" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 overflow-hidden"
        >
          <div
            className="absolute left-1/2 top-0 h-32 w-[140%] -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-transparent via-white/80 to-white dark:via-neutral-950/80 dark:to-neutral-950 sm:w-[160%]"
          />
        </div>
        {!logged ? (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-black/10 bg-white/70 p-6 text-center shadow-xs backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <div className="mx-auto mb-3 inline-flex items-center justify-center gap-2 text-lg font-semibold">
                <AlertCircle className="text-yellow-500" size={18} />
                Доступ к событиям только для авторизованных
              </div>
              <p className="mx-auto max-w-md text-sm text-neutral-700 dark:text-neutral-300">
                Вы не увидите события, пока не войдёте в аккаунт. Войдите или создайте аккаунт, чтобы продолжить.
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row">
                <Button
                  onClick={() => {
                    setAuthMode("login");
                    setAuthOpen(true);
                  }}
                >
                  <LogIn size={16} /> Войти
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setAuthMode("register");
                    setAuthOpen(true);
                  }}
                >
                  <Sparkles size={16} /> Создать аккаунт
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <FiltersPanel
              query={query}
              setQuery={setQuery}
              year={year}
              setYear={setYear}
              month={month}
              setMonth={setMonth}
              activeTags={activeTags}
              setActiveTags={setActiveTags}
              years={years}
              allTags={allTags}
              resetFilters={() => {
                setActiveTags([]);
                setYear("all");
                setMonth("all");
                setQuery("");
              }}
              resultsCount={filtered.length}
              admin={admin}
              onAdd={() => {
                setEditing(null);
                setDialogOpen(true);
              }}
              view={view}
              setView={setView}
            />

            {year !== "all" && (
              <div className="mb-4 flex items-center justify-between">
                <Button variant="soft" onClick={prevYear}>
                  <ChevronLeft size={16} /> Предыдущий
                </Button>
                <div className="rounded-full border border-black/10 bg-white/70 px-4 py-1 text-sm shadow-xs dark:border-white/10 dark:bg-white/10">
                  {year}
                </div>
                <Button variant="soft" onClick={nextYear}>
                  Следующий <ChevronRight size={16} />
                </Button>
              </div>
            )}

            <EventList
              events={filtered}
              view={view}
              listRef={listRef}
              admin={admin}
              loading={loadingEvents}
              onEdit={(ev) => {
                setEditing(ev);
                setDialogOpen(true);
              }}
              onDelete={(ev) => setDeleting(ev)}
              onSelect={handleSelect}
              highlightId={highlightedId}
            />
          </>
        )}
      </main>
{/* ======= Модалка авторизации ======= */}
<React.Suspense fallback={null}>
  <AnimatePresence>
      {authOpen && (
        <AuthDialog
          open={authOpen}
          mode={authMode}
          onClose={() => setAuthOpen(false)}
          onSuccess={async () => {
            await refreshMe();
          }}
          login={api.login}
          register={api.register}
        />
      )}
  </AnimatePresence>
</React.Suspense>
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
    onConfirm={async () => {
      try {
        await api.logout();
      } finally {
        setMe(null);
        setLogoutConfirmOpen(false);
      }
    }}
    onCancel={() => setLogoutConfirmOpen(false)}
  />
  <React.Suspense fallback={null}>
    <AddDialog
      open={dialogOpen}
      initial={editing}
      onClose={() => {
        setDialogOpen(false);
        setEditing(null);
      }}
      onSubmit={(ev) => {
        upsertEvent(ev);
        setDialogOpen(false);
        setEditing(null);
      }}
    />
  </React.Suspense>

  <React.Suspense fallback={null}>
    <DetailDialog
      open={detailOpen}
      event={selected}
      admin={admin}
      onClose={() => setDetailOpen(false)}
      onEdit={(ev) => {
        setEditing(ev);
        setDialogOpen(true);
        setDetailOpen(false);
      }}
      onDelete={(ev) => setDeleting(ev)}
      onImagePreview={(src) => setImagePreview(src)}
    />
  </React.Suspense>

  <React.Suspense fallback={null}>
    <AdminDialog open={adminOpen} onClose={() => setAdminOpen(false)} />
  </React.Suspense>

  <Dialog open={unlockOpen} onClose={() => setUnlockOpen(false)}>
    <div className="p-6 grid gap-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Sparkles size={18} /> Введите код
      </h3>
      <Input
        value={unlockCode}
        onChange={(e) => setUnlockCode(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => setUnlockOpen(false)}>
          Отмена
        </Button>
        <Button onClick={handleUnlock}>
          <Sparkles size={16} /> Разблокировать
        </Button>
      </div>
    </div>
  </Dialog>

  <Dialog open={!!unlockError} onClose={() => setUnlockError(null)}>
    {unlockError && (
      <div className="p-6 grid gap-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <AlertCircle className="text-red-500" size={18} /> Ошибка
        </h3>
        <p className="text-sm opacity-80">{unlockError}</p>
        <div className="flex justify-end">
          <Button onClick={() => setUnlockError(null)}>Ок</Button>
        </div>
      </div>
    )}
  </Dialog>

  <AnimatePresence>
    <Dialog open={!!unlockedEvent} onClose={() => setUnlockedEvent(null)}>
      {unlockedEvent && (
        <div className="p-6 flex flex-col items-center text-center gap-4">
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-yellow-500"
          >
            <Trophy size={48} />
          </motion.div>
          <div className="text-lg font-semibold">
            Легендарное событие разблокировано!
          </div>
          <div className="text-sm opacity-80">{unlockedEvent.title}</div>
          <Button onClick={() => setUnlockedEvent(null)}>Круто!</Button>
        </div>
      )}
    </Dialog>
  </AnimatePresence>

  {/* Fullscreen loading overlay while refreshing events */}
  <AnimatePresence>
    {showLoadingOverlay && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-120 flex items-center justify-center bg-white/85 backdrop-blur-xl dark:bg-neutral-950/80"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 25 }}
          className="relative flex w-[min(92vw,360px)] flex-col items-center gap-5 rounded-[26px] border border-black/5 bg-white/90 px-8 py-9 text-center shadow-2xl dark:border-white/5 dark:bg-neutral-900/90"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-400 dark:text-neutral-400">
            Eternal May
          </p>
          <div className="relative flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10" />
            <motion.span
              className="absolute inset-2 rounded-full border border-black/30 dark:border-white/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
            <Loader2 className="text-neutral-800 dark:text-white" size={26} />
          </div>
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
            Загрузка событий...
          </div>
          <motion.p
            key={loadingTipIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-sm text-neutral-600 dark:text-neutral-300/80"
          >
            {currentLoadingTip}
          </motion.p>
          <div className="mt-1 w-full">
            <div className="h-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
              <motion.span
                key={`bar-${loadingTipIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
                className="block h-full rounded-full bg-linear-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-100 dark:to-neutral-300"
              />
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500"
          >
            подожди...
          </motion.span>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

      <ImagePreview src={imagePreview} onClose={() => setImagePreview(null)} />

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-xs flex flex-col items-center text-center opacity-20 cursor-default">
        <div>Не уходи безропотно во тьму,</div>
        <div>Будь яростней пред ночью всех ночей,</div>
        <div>Не дай погаснуть свету своему!</div>
      </footer>
    </div>
  );
}
