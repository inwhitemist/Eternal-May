import React from "react";
import { Filter, Plus, Search } from "lucide-react";
import { Button, Chip, Input } from "./ui";
import { MONTHS } from "../utils/helpers";

interface Props {
  query: string;
  setQuery: (s: string) => void;
  year: number | "all";
  setYear: (v: number | "all") => void;
  month: number | "all";
  setMonth: (v: number | "all") => void;
  activeTags: string[];
  setActiveTags: React.Dispatch<React.SetStateAction<string[]>>;
  years: number[];
  allTags: string[];
  resetFilters: () => void;
  resultsCount: number;
  admin: boolean;
  onAdd: () => void;
}

export default function FiltersPanel({
  query,
  setQuery,
  year,
  setYear,
  month,
  setMonth,
  activeTags,
  setActiveTags,
  years,
  allTags,
  resetFilters,
  resultsCount,
  admin,
  onAdd,
}: Props) {
  return (
    <section className="-mt-6 mb-6 rounded-3xl border border-black/10 bg-white/70 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60" size={18} />
            <Input
              className="pl-10"
              placeholder="Поиск по событиям, описаниям и тегам"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Button variant="soft" onClick={resetFilters}>
            <Filter size={16} />
          </Button>
          {admin && (
            <Button onClick={onAdd}>
              <Plus size={16} /> Новое
            </Button>
          )}
        </div>
        <div className="text-xs opacity-70">Найдено {resultsCount} событий</div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">Годы</div>
          <div className="flex flex-wrap gap-2">
            <Chip label="Все" selected={year === "all"} onClick={() => setYear("all")} />
            {years.map((y) => (
              <Chip key={y} label={String(y)} selected={year === y} onClick={() => setYear(y)} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">Месяцы</div>
          <div className="flex flex-wrap gap-2">
            <Chip label="Все" selected={month === "all"} onClick={() => setMonth("all")} />
            {MONTHS.map((m, i) => (
              <Chip key={m} label={m.slice(0, 3)} selected={month === i} onClick={() => setMonth(i)} />
            ))}
          </div>
        </div>
        {allTags.length ? (
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-70">Теги</div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  selected={activeTags.includes(t)}
                  onClick={() =>
                    setActiveTags((prev) =>
                      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
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
  );
}
