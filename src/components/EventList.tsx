import React, { RefObject, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar as CalendarIcon, Edit3, Trash2, Trophy, Image as ImageIcon, MessagesSquare } from "lucide-react";
import { Button, cn } from "./ui";
import { SkeletonList } from "./Skeletons";
import { EventItem } from "../types";
import { formatDateHuman, getMonth, MONTHS } from "../utils/helpers";
import ElectricBorder from "./ElectricBorder";
import VanillaTilt from "vanilla-tilt";
import useDeviceProfile from "../hooks/useDeviceProfile";

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
  const { isIOS, isTouchDevice, prefersReducedMotion } = useDeviceProfile();
  const reduceLegendaryMotion = isIOS || prefersReducedMotion;
  const disableTilt = isTouchDevice || reduceLegendaryMotion;
  const EventCard = React.useMemo(() => function EventCard({
    ev,
    className = "",
    isHighlighted = false,
    showImageHint = false,
  }: {
    ev: EventItem;
    className?: string;
    isHighlighted?: boolean;
    showImageHint?: boolean;
  }) {
    const isLegendary = Boolean(ev.code) || ev.tags?.includes("legendary");
    const accent = isLegendary ? ev.color || "#f5c542" : ev.color || "#8b5cf6";
    const hasImage = Boolean(ev.imageData);
    const hasChat = Boolean(ev.chatId);
    // Initialize VanillaTilt on the card element instead of CSS hover scale
    const tiltRef = React.useRef<HTMLButtonElement>(null);
    useEffect(() => {
      if (disableTilt || !tiltRef.current) return;
      const el = tiltRef.current as any;
      VanillaTilt.init(el, {
        max: 6,
        speed: 300,
        scale: 1.02,
        perspective: 1000,
        glare: false,
        gyroscope: false,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        reset: true,
        transition: true,
      });
      return () => {
        try {
          el?.vanillaTilt?.destroy?.();
        } catch {}
      };
    }, [disableTilt]);

    const card = (
      <motion.button
        data-timeline-card
        tabIndex={0}
        onClick={() => onSelect(ev)}
        initial={false}
        ref={tiltRef}
        className={cn(
          "group relative flex h-45 w-full flex-col overflow-hidden text-left rounded-3xl p-5 shadow-lg backdrop-blur transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300",
          !isLegendary && "transform-gpu transition-transform duration-200 ease-out",
          "bg-white/70 dark:bg-white/5",
          !isLegendary && "border border-black/5",
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
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ boxShadow: `0 0 0 0 transparent` }}
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
        <div className="pt-1 text-sm text-neutral-700 dark:text-neutral-300 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10">
            <CalendarIcon size={14} /> {formatDateHuman(ev.date)}
          </span>
          {showImageHint && hasImage && (
            <span
              className="inline-flex items-center gap-1 rounded-full bg-indigo-500/15 px-2 py-0.5 text-xs text-indigo-700 dark:text-indigo-200"
              title="В событии есть изображение"
            >
              <ImageIcon size={14} /> Фото
            </span>
          )}
          {hasChat && (
            <span
              className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-700 dark:text-emerald-200"
              title="В событии есть переписка"
            >
              <MessagesSquare size={14} /> Чат
            </span>
          )}
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

    return isLegendary ? (
      <ElectricBorder
        color={accent}
        thickness={2}
        speed={1}
        chaos={0.5}
        reducedMotion={reduceLegendaryMotion}
        style={{ borderRadius: 24, width: '100%' }}
        className="block w-full rounded-3xl overflow-visible transform-gpu transition-transform duration-200 ease-out"
      >
        {card}
      </ElectricBorder>
    ) : (
      card
    );
  }, [admin, disableTilt, reduceLegendaryMotion]);

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

  function TimelineView() {
    const [startMs, endMs] = React.useMemo(() => {
      if (!events.length) return [0, 0];
      return [new Date(events[0].date).getTime(), new Date(events[events.length - 1].date).getTime()];
    }, [events]);

    const span = Math.max(1, endMs - startMs);
    const timelineWidth = Math.max(events.length * 260, 1200);

    const getPosition = React.useCallback(
      (dateStr: string) => {
        const ms = new Date(dateStr).getTime();
        return ((ms - startMs) / span) * 100;
      },
      [span, startMs]
    );

    const yearMarks = React.useMemo(() => {
      const map = new Map<number, number>();
      for (const ev of events) {
        const y = new Date(ev.date).getFullYear();
        if (!map.has(y)) map.set(y, getPosition(ev.date));
      }
      return Array.from(map.entries()).map(([year, pos]) => ({ year, pos }));
    }, [events, getPosition]);

    return (
      <div ref={listRef} className="relative">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 px-4 py-2 text-xs font-semibold text-indigo-900 shadow-sm shadow-indigo-500/20 dark:text-white">
            Линейный таймлайн — скроль вправо/влево, чтобы пройти всю историю
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/40 via-transparent to-transparent" />
        </div>

        <div className="relative overflow-x-auto overflow-y-visible pb-12">
          <div
            className="relative h-[460px]"
            style={{ minWidth: timelineWidth }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
              <div className="absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.35),transparent_55%)] blur-3xl opacity-70" />
              <div className="relative h-1 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 shadow-[0_0_25px_rgba(99,102,241,0.5)]" />
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)] animate-[shine_3s_ease_infinite]" />
            </div>

            {yearMarks.map(({ year, pos }) => (
              <div
                key={year}
                className="absolute top-1/2 -translate-y-1/2 text-center"
                style={{ left: `${pos}%` }}
              >
                <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent opacity-60" />
                <div className="mt-1 rounded-full border border-white/30 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm shadow-indigo-500/20 backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                  {year}
                </div>
              </div>
            ))}

            {events.map((ev, idx) => {
              const pos = getPosition(ev.date);
              const isTop = idx % 2 === 0;
              const accent = ev.color || "#8b5cf6";
              return (
                <motion.div
                  key={ev.id}
                  className="absolute w-[320px] max-w-[90vw]"
                  style={{
                    left: `calc(${pos}% - 160px)`,
                    top: isTop ? "8%" : "54%",
                  }}
                  initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.02 }}
                >
                  <div
                    className="pointer-events-none absolute left-1/2 top-[46%] h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/80 to-transparent opacity-70"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 rounded-full border-2 border-white/80 bg-white/90 p-2 shadow-lg shadow-indigo-500/20 backdrop-blur-sm dark:border-white/30 dark:bg-white/10"
                    style={{ boxShadow: `0 0 0 6px ${accent}25, 0 18px 40px ${accent}38` }}
                    aria-hidden
                  />
                  <EventCard
                    ev={ev}
                    isHighlighted={highlightId === ev.id}
                    className="w-full"
                    showImageHint
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="popLayout">
      {view === "timeline" ? (
        <motion.div>
          {loading && events.length === 0 ? (
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <SkeletonList count={8} />
              </div>
            </div>
          ) : events.length ? (
            <TimelineView />
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

