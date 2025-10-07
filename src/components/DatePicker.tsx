import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./ui";

const MONTHS_RU = [
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
const DAYS_RU = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function fmt(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function buildGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  let startOffset = first.getDay() - 1; // Mon=0 ... Sun=-1
  if (startOffset < 0) startOffset = 6; // Sunday correction
  const start = new Date(year, month, 1 - startOffset);
  const days: { d: Date; inMonth: boolean }[] = [];
  for (let i = 0; i < 42; i++) {
    const cur = new Date(start);
    cur.setDate(start.getDate() + i);
    days.push({ d: cur, inMonth: cur.getMonth() === month });
  }
  return days;
}

export default function DatePicker({
  value,
  onChange,
  className,
}: {
  value: string; // YYYY-MM-DD
  onChange: (v: string) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const selected = useMemo(() => {
    const d = new Date(value);
    return isNaN(d.getTime()) ? new Date() : d;
  }, [value]);
  const [viewYear, setViewYear] = useState<number>(selected.getFullYear());
  const [viewMonth, setViewMonth] = useState<number>(selected.getMonth());
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Sync view with selected when opening
  useEffect(() => {
    if (open) {
      setViewYear(selected.getFullYear());
      setViewMonth(selected.getMonth());
    }
  }, [open, selected]);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const grid = useMemo(() => buildGrid(viewYear, viewMonth), [viewYear, viewMonth]);
  const todayStr = fmt(new Date());

  // Year options
  const currentYear = new Date().getFullYear();
  const years = useMemo(() => {
    const from = 1900;
    const to = currentYear + 20;
    const arr: number[] = [];
    for (let y = from; y <= to; y++) arr.push(y);
    return arr;
  }, [currentYear]);

  return (
    <div className={cn("relative", className)} ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm text-left",
          "focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
        )}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {new Date(value).toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-[22rem] rounded-2xl border border-black/10 bg-white/95 p-3 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-neutral-900/95">
          <div className="flex items-center justify-between gap-2 px-1 pb-2">
            <button
              type="button"
              className="rounded-xl p-1.5 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => {
                let m = viewMonth - 1;
                let y = viewYear;
                if (m < 0) { m = 11; y -= 1; }
                setViewMonth(m); setViewYear(y);
              }}
              aria-label="Предыдущий месяц"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              <select
                className="rounded-lg border border-black/10 bg-white/80 px-2 py-1 text-sm dark:border-white/10 dark:bg-white/10"
                value={viewMonth}
                onChange={(e) => setViewMonth(Number(e.target.value))}
              >
                {MONTHS_RU.map((m, i) => (
                  <option key={m} value={i}>{m}</option>
                ))}
              </select>
              <select
                className="rounded-lg border border-black/10 bg-white/80 px-2 py-1 text-sm dark:border-white/10 dark:bg-white/10"
                value={viewYear}
                onChange={(e) => setViewYear(Number(e.target.value))}
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="rounded-xl p-1.5 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => {
                let m = viewMonth + 1;
                let y = viewYear;
                if (m > 11) { m = 0; y += 1; }
                setViewMonth(m); setViewYear(y);
              }}
              aria-label="Следующий месяц"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 px-1 text-center text-xs opacity-70 select-none">
            {DAYS_RU.map((d) => (
              <div key={d} className="py-1">{d}</div>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {grid.map(({ d, inMonth }) => {
              const val = fmt(d);
              const isSelected = val === value;
              const isToday = val === todayStr;
              return (
                <button
                  key={val + String(inMonth)}
                  type="button"
                  onClick={() => { onChange(val); setOpen(false); }}
                  className={cn(
                    "h-9 rounded-xl text-sm transition",
                    inMonth ? "" : "opacity-50",
                    isSelected
                      ? "bg-indigo-500 text-white shadow"
                      : "hover:bg-black/5 dark:hover:bg-white/10",
                  )}
                  aria-current={isToday ? "date" : undefined}
                  title={d.toLocaleDateString("ru-RU")}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between px-1">
            <button
              type="button"
              className="text-xs rounded-lg px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => {
                const t = new Date();
                setViewYear(t.getFullYear());
                setViewMonth(t.getMonth());
              }}
            >
              Сегодня
            </button>
            <button
              type="button"
              className="text-xs rounded-lg px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

