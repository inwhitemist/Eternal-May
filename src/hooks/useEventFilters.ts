import { SetStateAction, useCallback, useDeferredValue, useMemo, useState, useTransition } from "react";
import { EventItem } from "../types";
import { getMonth, getYear } from "../utils/helpers";

export function useEventFilters(events: EventItem[]) {
  const [query, setQuery] = useState("");
  const [yearState, setYearState] = useState<number | "all">("all");
  const [monthState, setMonthState] = useState<number | "all">("all");
  const [activeTagsState, setActiveTagsState] = useState<string[]>([]);
  const [viewState, setViewState] = useState<"timeline" | "calendar">("timeline");
  const [isFilteringPending, startFilteringTransition] = useTransition();

  const setYear = useCallback(
    (next: number | "all") => {
      startFilteringTransition(() => setYearState(next));
    },
    [startFilteringTransition]
  );
  const setMonth = useCallback(
    (next: number | "all") => {
      startFilteringTransition(() => setMonthState(next));
    },
    [startFilteringTransition]
  );
  const setActiveTags = useCallback(
    (next: SetStateAction<string[]>) => {
      startFilteringTransition(() => {
        setActiveTagsState((prev) =>
          typeof next === "function" ? (next as (prev: string[]) => string[])(prev) : next
        );
      });
    },
    [startFilteringTransition]
  );
  const setView = useCallback(
    (next: "timeline" | "calendar") => {
      startFilteringTransition(() => setViewState(next));
    },
    [startFilteringTransition]
  );

  const year = yearState;
  const month = monthState;
  const activeTags = activeTagsState;
  const view = viewState;

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

  // Defer query to avoid recomputing `filtered` on every keystroke
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    // Defer heavy filtering while typing to keep UI responsive
    const q = deferredQuery.trim().toLowerCase();
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
  }, [events, deferredQuery, year, month, activeTags]);

  const currentYearIndex = year === "all" ? -1 : years.indexOf(year);
  function prevYear() {
    if (currentYearIndex > 0) setYear(years[currentYearIndex - 1]);
  }
  function nextYear() {
    if (currentYearIndex < years.length - 1) setYear(years[currentYearIndex + 1]);
  }

  return {
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
    isFilteringPending,
  };
}
