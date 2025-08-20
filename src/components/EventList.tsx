import React, { RefObject, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar as CalendarIcon, Edit3, Trash2 } from "lucide-react";
import { Button, cn } from "./ui";
import { EventItem } from "../types";
import { formatDateHuman, getMonth, MONTHS } from "../utils/helpers";

interface Props {
  events: EventItem[];
  view: "timeline" | "calendar";
  listRef: RefObject<HTMLDivElement>;
  admin: boolean;
  onEdit: (ev: EventItem) => void;
  onDelete: (ev: EventItem) => void;
  onSelect: (ev: EventItem) => void;
}

export default function EventList({
  events,
  view,
  listRef,
  admin,
  onEdit,
  onDelete,
  onSelect,
}: Props) {
  function EventCard({
    ev,
    className = "",
  }: {
    ev: EventItem;
    className?: string;
  }) {
    const isLegendary = Boolean(ev.code) || ev.tags?.includes("legendary");
    const accent = ev.color || (isLegendary ? "#f5c542" : "#8b5cf6");
    const cardRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      if (!cardRef.current) return;
      let destroyed = false;

      (async () => {
        try {
          const mod = await import("vanilla-tilt");
          const VanillaTilt = (mod as any).default || mod;
          if (cardRef.current && !destroyed) {
            VanillaTilt.init(cardRef.current, {
              max: 5,
              speed: 400,
              glare: true,
              "max-glare": 0.12,
              scale: 1.03, // отключаем визуальное увеличение, чтобы не было масштабирования
            });
          }
        } catch {
          // ignore if module not available
        }
      })();

      return () => {
        destroyed = true;
        if (cardRef.current && (cardRef.current as any).vanillaTilt) {
          try {
            (cardRef.current as any).vanillaTilt.destroy();
          } catch {
            /* ignore */
          }
        }
      };
    }, []);

    return (
      <motion.button
        ref={cardRef}
        layout
        data-timeline-card
        tabIndex={0}
        onClick={() => onSelect(ev)}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className={cn(
          "group relative flex h-45 w-full flex-col overflow-hidden text-left rounded-3xl border border-black/5 p-5 shadow-lg backdrop-blur transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300",
          "bg-white/70 dark:bg-white/5",
          isLegendary && "ring-2 ring-yellow-400",
          className
        )}
        style={{
          backgroundImage: `linear-gradient(180deg, ${accent}0f, transparent 55%)`,
        }}
      >
        {/* neon glow layer — pointer-events-none, показывает подсветку по accent при hover */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"
          style={{
            zIndex: 0,
            // два слоя тени: размытие вокруг и яркий ореол
            boxShadow: `0 12px 40px ${accent}73, 0 0 60px ${accent}55`,
            filter: "blur(60px)",
          }}
        />
        {/* content поверх glow — чтобы текст был читаем */}
        <div
          className="absolute inset-x-4 top-0 h-1 rounded-b-full"
          style={{ background: accent }}
        />
        <div className="flex items-start justify-between gap-3">
          <div className="text-base font-semibold text-neutral-900 dark:text-white sm:text-lg">
            {isLegendary && <span className="mr-1">🏆</span>}
            {ev.title}
          </div>
          {admin && (
            <div
              className="flex items-center gap-2 opacity-90"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="soft" onClick={() => onEdit(ev)}>
                <Edit3 size={16} />
              </Button>
              <Button variant="outline" onClick={() => onDelete(ev)}>
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
          <p className="pt-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 line-clamp-1">
            {ev.description}
          </p>
        )}
        {ev.tags?.length ? (
          <div className="mt-auto pt-3 flex flex-wrap gap-2">
            {ev.tags.map((t) => (
              <span
                key={t}
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  t === "legendary"
                    ? "bg-yellow-400/20 text-yellow-700 dark:text-yellow-300 border border-yellow-400/40"
                    : "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border"
                )}
                style={{ border: t === "legendary" ? undefined : `1px solid ${accent}55` }}
              >
                #{t === "legendary" ? "легендарное" : t}
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
    for (const ev of events) grouped[getMonth(ev.date)].push(ev);
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

  return (
    <AnimatePresence mode="popLayout">
      {view === "timeline" ? (
        <motion.div
          ref={listRef}
          layout
          className="relative grid gap-5 sm:gap-6 md:grid-cols-2"
        >
          {events.length ? (
            events.map((ev, idx) => (
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
              Ничего не найдено. Попробуй изменить фильтры или добавить событие.
            </motion.div>
          )}
        </motion.div>
      ) : (
        <MonthGrid />
      )}
    </AnimatePresence>
  );
}
