import React, { RefObject, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar as CalendarIcon, Edit3, Trash2, Trophy } from "lucide-react";
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
  highlightId?: string | null;
  loading?: boolean;
}

export default function EventList({
  events,
  view,
  listRef,
  admin,
  onEdit,
  onDelete,
  onSelect,
  highlightId,
  loading = false,
}: Props) {
  // Progressive reveal to reduce initial render cost on large lists
  const [visibleCount, setVisibleCount] = React.useState(30);
  useEffect(() => {
    // Reset when the dataset changes notably
    setVisibleCount(30);
  }, [events.length, view]);
  const EventCard = React.useMemo(() => function EventCard({
    ev,
    className = "",
    isHighlighted = false,
  }: {
    ev: EventItem;
    className?: string;
    isHighlighted?: boolean;
  }) {
    const isLegendary = Boolean(ev.code) || ev.tags?.includes("legendary");
    const accent = isLegendary ? ev.color || "#f5c542" : ev.color || "#8b5cf6";
    const cardRef = useRef<HTMLButtonElement | null>(null);
    const initialized = useRef(false);

    useEffect(() => {
      const el = cardRef.current;
      if (!el || initialized.current) return;
      let cancelled = false;

      const observer = new IntersectionObserver(async (entries, obs) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !initialized.current) {
          try {
            const mod = await import("vanilla-tilt");
            if (cancelled) return;
            const VanillaTilt = (mod as any).default || mod;
            if (el) {
              VanillaTilt.init(el, {
                max: 5,
                speed: 400,
                glare: true,
                "max-glare": 0.12,
                scale: 1.03,
              });
              initialized.current = true;
              obs.disconnect();
            }
          } catch {
            // noop
          }
        }
      }, { threshold: 0.2 });

      observer.observe(el);
      return () => {
        cancelled = true;
        observer.disconnect();
        if (el && (el as any).vanillaTilt) {
          try { (el as any).vanillaTilt.destroy(); } catch {}
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
        initial={{ y: 10, opacity: 0, scale: isHighlighted ? 0.8 : 1 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={isHighlighted ? { type: "spring", stiffness: 260, damping: 20 } : { duration: 0.2 }}
        exit={{ y: -10, opacity: 0 }}
        className={cn(
          "group relative flex h-45 w-full flex-col overflow-hidden text-left rounded-3xl border border-black/5 p-5 shadow-lg backdrop-blur transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300",
          "bg-white/70 dark:bg-white/5",
          isLegendary && "border-yellow-400",
          className
        )}
        style={{
          contentVisibility: "auto" as any,
          containIntrinsicSize: "280px 180px",
          backgroundImage: `linear-gradient(180deg, ${accent}0f, transparent 55%)`,
            // небольшое золотое свечение для легендарных карточек (менее яркое)
            ...(isLegendary
            ? {
              boxShadow: `0 6px 20px ${accent}33, 0 0 24px ${accent}22, 0 0 8px ${accent}11`,
              }
            : {}),
          }}
          >
          {/* highlight effect when newly unlocked */}
        {isHighlighted && (
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
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
          <div className="text-base font-semibold text-neutral-900 dark:text-white sm:text-lg flex items-center gap-1">
            {isLegendary && <Trophy size={16} className="text-yellow-500" />}
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
          <p className="pt-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 line-clamp-1 whitespace-pre-line">
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
                    ? "bg-yellow-300/20 text-yellow-700 dark:text-yellow-300"
                    : "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"
                )}
                style={{ border: `1px solid ${accent}55` }}
              >
                #{t === "legendary" ? "легендарное" : t}
              </span>
            ))}
          </div>
        ) : null}
      </motion.button>
    );
  }, [admin]);

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
                grouped[i].map((ev) => (
                  <EventCard key={ev.id} ev={ev} isHighlighted={highlightId === ev.id} />
                ))
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
          {loading ? (
            // Skeletons handled outside to avoid importing here; fallback simple blocks
            Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="h-45 w-full rounded-3xl border border-black/10 bg-white/60 dark:border-white/10 dark:bg-white/5 animate-pulse" />
            ))
          ) : events.length ? (
            events.slice(0, visibleCount).map((ev, idx) => (
              <EventCard
                key={ev.id}
                ev={ev}
                isHighlighted={highlightId === ev.id}
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
          {!loading && view === "timeline" && events.length > visibleCount && (
            <div className="col-span-full flex justify-center">
              <Button variant="soft" onClick={() => setVisibleCount((n) => n + 20)}>
                Показать ещё
              </Button>
            </div>
          )}
        </motion.div>
      ) : (
        <MonthGrid />
      )}
    </AnimatePresence>
  );
}
