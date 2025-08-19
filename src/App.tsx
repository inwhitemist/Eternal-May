"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isObjectId } from "./utils/isObjectId";
import { api, MeUser } from "./api";
import ParallaxBackground from "./components/ParallaxBackground";
import {
  Upload,
  Sparkles,
  SunMedium,
  MoonStar,
  ChevronLeft,
  ChevronRight,
  Trash2,
  LogIn,
  LogOut,
  ArrowDown,
  Settings,
  FileJson,
  FileDown,
} from "lucide-react";
import { Button, Dialog, ConfirmDialog } from "./components/ui";
import FiltersPanel from "./components/FiltersPanel";
import EventList from "./components/EventList";
import AuthDialog from "./components/AuthDialog";
import AddDialog from "./components/AddDialog";
import DetailDialog from "./components/DetailDialog";
import { useEventFilters } from "./hooks/useEventFilters";
import { useDialogs } from "./hooks/useDialogs";
import { EventItem } from "./types";
import { formatDateHuman, uid, downloadFile, toICS } from "./utils/helpers";

/* =========================
   Вспомогательные утилиты
========================= */
const THEME_KEY = "life-timeline-theme";

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
  const logged = Boolean(me);
  const admin = me?.role === "admin";

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
      setEvents([]);
    }
  }

  useEffect(() => {
    refreshMe();
  }, []);

  useEffect(() => {
    if (me) refreshEvents();
    else setEvents([]);
  }, [me]);

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
     deleting,
     setDeleting,
   } = useDialogs();

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

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 text-center">
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
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300 cursor-default"
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
        />

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

        <EventList
          events={filtered}
          view={view}
          listRef={listRef}
          admin={admin}
          onEdit={(ev) => {
            setEditing(ev);
            setDialogOpen(true);
          }}
          onDelete={(ev) => setDeleting(ev)}
          onSelect={(ev) => {
            setSelected(ev);
            setDetailOpen(true);
          }}
        />
      </main>
{/* ======= Модалка авторизации ======= */}
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

      <AnimatePresence>
        <Dialog open={!!imagePreview} onClose={() => setImagePreview(null)}>
          {imagePreview && (
            <div className="flex items-center justify-center p-4">
              <img
                src={imagePreview}
                alt="Превью"
                className="max-h-[85vh] w-auto max-w-[90vw] object-contain"
              />
            </div>
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
