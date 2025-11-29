import React, { RefObject, useEffect, useMemo } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { Calendar as CalendarIcon, Edit3, Trash2, Trophy, Image as ImageIcon, MessagesSquare } from "lucide-react";
import { Button, cn } from "./ui";
import { SkeletonList } from "./Skeletons";
import { EventItem } from "../types";
import { formatDateHuman, getMonth, MONTHS, getYear } from "../utils/helpers";
import ElectricBorder from "./ElectricBorder";
import VanillaTilt from "vanilla-tilt";
import useDeviceProfile from "../hooks/useDeviceProfile";
import { Tooltip, TooltipContent } from "@heroui/react";

interface Props {
  events: EventItem[];
  view: "timeline" | "calendar";
  listRef: RefObject<HTMLDivElement | null>;
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
    const hasChat = Boolean(ev.chatId);
    // Initialize VanillaTilt on the card element instead of CSS hover scale
    // For legendary cards, tilt should be applied to the wrapper, not the inner button
    const tiltRef = React.useRef<HTMLDivElement | HTMLButtonElement>(null);
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
        ref={!isLegendary ? tiltRef as React.RefObject<HTMLButtonElement> : undefined}
        className={cn(
          "group relative flex w-full flex-col overflow-hidden text-left rounded-3xl p-5 shadow-lg backdrop-blur transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300",
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
              <Tooltip delay={0}>
                <Tooltip.Trigger asChild>
                  <Button variant="soft" onClick={() => onEdit(ev)}>
                    <Edit3 size={16} />
                  </Button>
                </Tooltip.Trigger>
                <TooltipContent showArrow className="text-xs text-center">
                  <Tooltip.Arrow />
                  Редактировать
                </TooltipContent>
              </Tooltip>
              <Tooltip delay={0}>
                <Tooltip.Trigger asChild>
                  <Button variant="outline" onClick={() => onDelete(ev)}>
                    <Trash2 size={16} />
                  </Button>
                </Tooltip.Trigger>
                <TooltipContent showArrow className="text-xs text-center">
                  <Tooltip.Arrow />
                  Удалить
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </div>
        <div className="pt-1 text-sm text-neutral-700 dark:text-neutral-300 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10">
            <CalendarIcon size={14} /> {formatDateHuman(ev.date)}
          </span>
          {showImageHint && hasImage && (
            <Tooltip delay={0}>
              <Tooltip.Trigger asChild>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-indigo-500/15 px-2 py-0.5 text-xs text-indigo-700 dark:text-indigo-200"
                >
                  <ImageIcon size={14} /> Фото
                </span>
              </Tooltip.Trigger>
              <TooltipContent showArrow className="text-xs text-center">
                <Tooltip.Arrow />
                В событии есть изображение
              </TooltipContent>
            </Tooltip>
          )}
          {hasChat && (
            <Tooltip delay={0}>
              <Tooltip.Trigger asChild>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-700 dark:text-emerald-200"
                >
                  <MessagesSquare size={14} /> Чат
                </span>
              </Tooltip.Trigger>
              <TooltipContent showArrow className="text-xs text-center">
                <Tooltip.Arrow />
                В событии есть переписка
              </TooltipContent>
            </Tooltip>
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
      <div
        ref={tiltRef as React.RefObject<HTMLDivElement>}
        className="block w-full rounded-3xl overflow-visible transform-gpu transition-transform duration-200 ease-out"
      >
        <ElectricBorder
          color={accent}
          thickness={2}
          speed={1}
          chaos={0.5}
          reducedMotion={reduceLegendaryMotion}
          style={{ borderRadius: 24, width: '100%' }}
          className="block w-full rounded-3xl overflow-visible"
        >
          {card}
        </ElectricBorder>
      </div>
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

  // Tilt wrapper component for legendary cards
  function TiltWrapper({ children }: { children: React.ReactNode }) {
    const tiltRef = React.useRef<HTMLDivElement>(null);
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

    return (
      <div
        ref={tiltRef}
        className="block w-full rounded-3xl overflow-visible transform-gpu transition-transform duration-200 ease-out"
      >
        {children}
      </div>
    );
  }

  // Timeline view component
  function TimelineView() {
    const hoverHandlersRef = React.useRef<Record<string, (active: boolean) => void>>({});
    const registerHoverTarget = React.useCallback((id: string, handler: (active: boolean) => void) => {
      hoverHandlersRef.current[id] = handler;
      return () => {
        delete hoverHandlersRef.current[id];
      };
    }, []);
    const triggerDotHover = React.useCallback((id: string, active: boolean) => {
      hoverHandlersRef.current[id]?.(active);
    }, []);

    const sortedEvents = useMemo(() => {
      return [...events].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB; // oldest first
      });
    }, [events]);

    const visibleEvents = useMemo(() => {
      return sortedEvents.slice(0, visibleCount);
    }, [sortedEvents, visibleCount]);

    const groupedByYear = useMemo(() => {
      const groups: Record<number, EventItem[]> = {};
      for (const ev of visibleEvents) {
        const year = getYear(ev.date);
        if (!groups[year]) groups[year] = [];
        groups[year].push(ev);
      }
      return groups;
    }, [visibleEvents]);

    const years = useMemo(() => {
      return Object.keys(groupedByYear)
        .map(Number)
        .sort((a, b) => a - b); // oldest first
    }, [groupedByYear]);

    if (loading && sortedEvents.length === 0) {
      return (
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <SkeletonList count={8} />
          </div>
        </div>
      );
    }

    if (sortedEvents.length === 0) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-black/10 bg-white/70 p-6 text-center text-sm text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
        >
          Ничего не найдено. Попробуй изменить фильтры или добавить событие.
        </motion.div>
      );
    }

    return (
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Vertical timeline line with animated glow */}
        <div className="absolute left-1/2 top-0 bottom-11 w-0.5 -translate-x-1/2 z-0 overflow-hidden">
          {/* Base gradient line */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-pink-500/50 dark:from-indigo-400/60 dark:via-purple-400/60 dark:to-pink-400/60" />
          {/* Animated glow pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "blur(8px)",
            }}
          />
          {/* Moving light effect */}
          <motion.div
            className="absolute w-full h-32 bg-gradient-to-b from-transparent via-white/60 to-transparent"
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              filter: "blur(4px)",
            }}
          />
        </div>
        
        <div className="relative space-y-12">
          {years.map((year, yearIdx) => {
            const yearEvents = groupedByYear[year];
            return (
              <div key={year} className="relative">
                {/* Year label with enhanced effects */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: yearIdx * 0.1 }}
                  className="sticky top-8 z-30 mb-8 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Static glow background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-full" />
                    <div className="relative rounded-full bg-white/90 dark:bg-neutral-900/90 px-6 py-2 border border-indigo-200/50 dark:border-white/10 shadow-lg backdrop-blur-sm">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                        {year}
                      </h2>
                    </div>
                  </div>
                </motion.div>

                {/* Events for this year with background glow */}
                <div className="relative space-y-8">
                  {/* Subtle background glow for year section */}
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-3xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: yearIdx * 0.1 + 0.2 }}
                    style={{
                      background: `radial-gradient(ellipse at center, rgba(139, 92, 246, 0.05), transparent 60%)`,
                      filter: "blur(40px)",
                    }}
                  />
                  
                  {yearEvents.map((ev, idx) => {
                    const isLeft = idx % 2 === 0;
                    const isLegendary = Boolean(ev.code) || ev.tags?.includes("legendary");
                    const accent = isLegendary ? ev.color || "#f5c542" : ev.color || "#8b5cf6";
                    const isHighlighted = highlightId === ev.id;
                    const dotEntryDelay = (yearIdx * 0.05) + (idx * 0.03) + 0.1;

                    return (
                      <motion.div
                        key={ev.id}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (yearIdx * 0.05) + (idx * 0.03) }}
                        className={cn(
                          "relative flex items-center",
                          isLeft ? "flex-row" : "flex-row-reverse"
                        )}
                      >
                        {/* Timeline dot with enhanced effects */}
                        <div className="absolute left-1/2 -translate-x-1/2 z-10">
                          {/* Floating particles for legendary events */}
                          {isLegendary && (
                            <>
                              {[...Array(6)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute inset-0 rounded-full"
                                  style={{
                                    background: accent,
                                    width: "2px",
                                    height: "2px",
                                  }}
                                  animate={{
                                    x: [
                                      Math.cos((i * Math.PI * 2) / 6) * 20,
                                      Math.cos((i * Math.PI * 2) / 6) * 30,
                                      Math.cos((i * Math.PI * 2) / 6) * 20,
                                    ],
                                    y: [
                                      Math.sin((i * Math.PI * 2) / 6) * 20,
                                      Math.sin((i * Math.PI * 2) / 6) * 30,
                                      Math.sin((i * Math.PI * 2) / 6) * 20,
                                    ],
                                    opacity: [0.8, 0.3, 0.8],
                                    scale: [1, 1.5, 1],
                                  }}
                                  transition={{
                                    duration: 3 + i * 0.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.1,
                                  }}
                                />
                              ))}
                            </>
                          )}
                          
                          <TimelineDot
                            eventId={ev.id}
                            accent={accent}
                            isLegendary={isLegendary}
                            isHighlighted={isHighlighted}
                            registerHoverTarget={registerHoverTarget}
                            animationDelay={dotEntryDelay}
                          />
                        </div>

                        {/* Event card with wave effect */}
                        <motion.div
                          className={cn("group w-[calc(50%-2rem)]", isLeft ? "pr-8" : "pl-8")}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (yearIdx * 0.05) + (idx * 0.03) + 0.15 }}
                        
                        >
                          {isLegendary ? (
                            <TiltWrapper>
                              <ElectricBorder
                                color={accent}
                                thickness={2}
                                speed={1}
                                chaos={0.5}
                                reducedMotion={reduceLegendaryMotion}
                                style={{ borderRadius: 24 }}
                                className="block w-full rounded-3xl overflow-visible"
                              >
                                <TimelineEventCard
                                  ev={ev}
                                  accent={accent}
                                  isLegendary={isLegendary}
                                  isHighlighted={isHighlighted}
                                  admin={admin}
                                  onSelect={onSelect}
                                  onEdit={onEdit}
                                  onDelete={onDelete}
                                  onHoverStart={() => triggerDotHover(ev.id, true)}
                                  onHoverEnd={() => triggerDotHover(ev.id, false)}
                                />
                              </ElectricBorder>
                            </TiltWrapper>
                          ) : (
                            <TimelineEventCard
                              ev={ev}
                              accent={accent}
                              isLegendary={isLegendary}
                              isHighlighted={isHighlighted}
                              admin={admin}
                              onSelect={onSelect}
                              onEdit={onEdit}
                              onDelete={onDelete}
                              onHoverStart={() => triggerDotHover(ev.id, true)}
                              onHoverEnd={() => triggerDotHover(ev.id, false)}
                            />
                          )}
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {!loading && events.length > visibleCount && (
          <div className="mt-12 flex justify-center">
            <Button variant="soft" onClick={() => setVisibleCount((n) => n + 20)}>
              Показать ещё
            </Button>
          </div>
        )}
      </div>
    );
  }

  function TimelineDot({
    eventId,
    accent,
    isLegendary,
    isHighlighted,
    animationDelay,
    registerHoverTarget,
  }: {
    eventId: string;
    accent: string;
    isLegendary: boolean;
    isHighlighted: boolean;
    animationDelay: number;
    registerHoverTarget: (id: string, handler: (active: boolean) => void) => () => void;
  }) {
    const controls = useAnimationControls();
    const baseDotShadow = React.useMemo(
      () =>
        isLegendary
          ? `0 0 20px ${accent}80, 0 0 40px ${accent}40, 0 0 60px ${accent}20`
          : `0 0 10px ${accent}60`,
      [accent, isLegendary]
    );
    const hoverDotShadow = React.useMemo(
      () =>
        isLegendary
          ? `0 0 30px ${accent}90, 0 0 60px ${accent}60`
          : `0 0 20px ${accent}80`,
      [accent, isLegendary]
    );
    const restState = React.useMemo(
      () => ({
        scale: 1,
        boxShadow: baseDotShadow,
      }),
      [baseDotShadow]
    );
    const activeState = React.useMemo(
      () => ({
        scale: 1.3,
        boxShadow: hoverDotShadow,
      }),
      [hoverDotShadow]
    );
    const hoverStateRef = React.useRef({ pointer: false, external: false });

    useEffect(() => {
      controls.set(restState);
    }, [controls, restState]);

    const syncAnimation = React.useCallback(() => {
      const nextState =
        hoverStateRef.current.pointer || hoverStateRef.current.external
          ? activeState
          : restState;
      controls.start(nextState);
    }, [controls, activeState, restState]);

    const setExternalHover = React.useCallback(
      (active: boolean) => {
        hoverStateRef.current.external = active;
        syncAnimation();
      },
      [syncAnimation]
    );

    const setPointerHover = React.useCallback(
      (active: boolean) => {
        hoverStateRef.current.pointer = active;
        syncAnimation();
      },
      [syncAnimation]
    );

    useEffect(() => {
      const cleanup = registerHoverTarget(eventId, setExternalHover);
      return () => {
        cleanup();
      };
    }, [registerHoverTarget, eventId, setExternalHover]);

    return (
      <motion.div
        className="inline-flex"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: animationDelay,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.div
          animate={controls}
          className={cn(
            "relative w-4 h-4 rounded-full border-2 border-white dark:border-neutral-900 shadow-lg",
            isHighlighted && "ring-4 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900"
          )}
          style={{
            background: accent,
            boxShadow: baseDotShadow,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          onHoverStart={() => setPointerHover(true)}
          onHoverEnd={() => setPointerHover(false)}
        >
          {/* Pulsing glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: accent,
              opacity: 0.4,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          {isLegendary && (
            <>
              <motion.div
                animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, ${accent}40, transparent, ${accent}40)`,
                  opacity: 0.5,
                }}
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: accent,
                  opacity: 0.3,
                }}
              />
            </>
          )}
        </motion.div>
      </motion.div>
    );
  }

  // Timeline event card component
  function TimelineEventCard({
    ev,
    accent,
    isLegendary,
    isHighlighted,
    admin,
    onSelect,
    onEdit,
    onDelete,
    onHoverStart,
    onHoverEnd,
  }: {
    ev: EventItem;
    accent: string;
    isLegendary: boolean;
    isHighlighted: boolean;
    admin: boolean;
    onSelect: (ev: EventItem) => void;
    onEdit: (ev: EventItem) => void;
    onDelete: (ev: EventItem) => void;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
  }) {
    const hasImage = Boolean(ev.imageData);
    const hasChat = Boolean(ev.chatId);
    
    // Initialize VanillaTilt on the card element (only for non-legendary cards)
    // For legendary cards, tilt is applied to the wrapper outside this component
    const tiltRef = React.useRef<HTMLButtonElement>(null);
    useEffect(() => {
      if (disableTilt || !tiltRef.current || isLegendary) return;
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
    }, [disableTilt, isLegendary]);

    return (
      <motion.button
        ref={!isLegendary ? tiltRef : undefined}
        onClick={() => onSelect(ev)}
        initial={false}
        onMouseEnter={() => onHoverStart?.()}
        onMouseLeave={() => onHoverEnd?.()}
        onFocus={() => onHoverStart?.()}
        onBlur={() => onHoverEnd?.()}
        className={cn(
          "group relative flex w-full flex-col overflow-hidden text-left rounded-3xl p-5 shadow-lg backdrop-blur transition-all hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300",
          !isLegendary && "transform-gpu transition-transform duration-200 ease-out",
          "bg-white/80 dark:bg-white/10",
          !isLegendary && "border border-black/10 dark:border-white/10"
        )}
        style={{
          backgroundImage: `linear-gradient(135deg, ${accent}15, transparent 60%)`,
        }}
      >
        {isHighlighted && (
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              boxShadow: `0 0 0 3px ${accent}60`,
            }}
          />
        )}

        {/* Top accent bar */}
        <div
          className="absolute inset-x-4 top-0 h-1 rounded-b-full"
          style={{ background: accent }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="text-base font-semibold text-neutral-900 dark:text-white sm:text-lg flex items-center gap-1.5">
              {isLegendary && <Trophy size={18} className="text-yellow-500" />}
              <span>{ev.title}</span>
            </div>
            {admin && (
              <div
                className="flex items-center gap-2 opacity-90"
                onClick={(e) => e.stopPropagation()}
              >
                <Tooltip delay={0}>
                  <Tooltip.Trigger asChild>
                    <Button variant="soft" onClick={() => onEdit(ev)}>
                      <Edit3 size={16} />
                    </Button>
                  </Tooltip.Trigger>
                  <TooltipContent showArrow className="text-xs text-center">
                    <Tooltip.Arrow />
                    Редактировать
                  </TooltipContent>
                </Tooltip>
                <Tooltip delay={0}>
                  <Tooltip.Trigger asChild>
                    <Button variant="outline" onClick={() => onDelete(ev)}>
                      <Trash2 size={16} />
                    </Button>
                  </Tooltip.Trigger>
                  <TooltipContent showArrow className="text-xs text-center">
                    <Tooltip.Arrow />
                    Удалить
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>

          <div className="pt-1 text-sm text-neutral-700 dark:text-neutral-300 flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/5 px-2.5 py-1 text-xs dark:bg-white/10">
              <CalendarIcon size={14} /> {formatDateHuman(ev.date)}
            </span>
            {hasImage && (
              <Tooltip delay={0}>
                <Tooltip.Trigger asChild>
                  <span
                    className="inline-flex items-center gap-1 rounded-full bg-indigo-500/15 px-2.5 py-1 text-xs text-indigo-700 dark:text-indigo-200"
                  >
                    <ImageIcon size={14} /> Фото
                  </span>
                </Tooltip.Trigger>
                <TooltipContent showArrow className="text-xs text-center">
                  <Tooltip.Arrow />
                  В событии есть изображение
                </TooltipContent>
              </Tooltip>
            )}
            {hasChat && (
              <Tooltip delay={0}>
                <Tooltip.Trigger asChild>
                  <span
                    className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs text-emerald-700 dark:text-emerald-200"
                  >
                    <MessagesSquare size={14} /> Чат
                  </span>
                </Tooltip.Trigger>
                <TooltipContent showArrow className="text-xs text-center">
                  <Tooltip.Arrow />
                  В событии есть переписка
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          {ev.description && (
            <p className="pt-2 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 line-clamp-2 whitespace-pre-line">
              {ev.description}
            </p>
          )}

          {ev.tags?.length ? (
            <div className="mt-3 pt-3 flex flex-wrap gap-2 border-t border-black/5 dark:border-white/10">
              {ev.tags.map((t) => (
                <span
                  key={t}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium",
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
        </div>
      </motion.button>
    );
  }

  if (view === "timeline") {
    return (
      <div ref={listRef}>
        <TimelineView />
      </div>
    );
  }

  return (
    <AnimatePresence mode="popLayout">
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
          {!loading && view === "calendar" && events.length > visibleCount && (
            <div className="col-span-full flex justify-center">
              <Button variant="soft" onClick={() => setVisibleCount((n) => n + 20)}>
                Показать ещё
              </Button>
            </div>
          )}
        </motion.div>
    </AnimatePresence>
  );
}

