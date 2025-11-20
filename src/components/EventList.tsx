import React, { RefObject, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar as CalendarIcon, Edit3, Trash2, Trophy, Image as ImageIcon } from "lucide-react";
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

  return (
    <AnimatePresence mode="popLayout">
      {view === "timeline" ? (
        <motion.div
          ref={listRef}
          className="relative grid gap-5 sm:gap-6 md:grid-cols-2"
        >
          {loading && events.length === 0 ? (
            <div className="col-span-full flex justify-center">
              <div className="w-full max-w-5xl">
                <SkeletonList count={8} />
              </div>
            </div>
          ) : events.length ? (
            events.slice(0, visibleCount).map((ev, idx) => (
              <EventCard
                key={ev.id}
                ev={ev}
                isHighlighted={highlightId === ev.id}
                className={cn("transition-transform")}
                showImageHint
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

