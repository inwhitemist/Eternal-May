export function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function formatDateHuman(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateTimeHuman(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function getYear(iso: string) {
  return new Date(iso).getFullYear();
}

export function getMonth(iso: string) {
  return new Date(iso).getMonth();
}

export const MONTHS = [
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

import { EventItem } from "../types";

export function downloadFile(
  filename: string,
  content: string,
  type = "application/json"
) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function toICS(events: EventItem[]) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Life Timeline//EN",
  ];
  for (const ev of events) {
    const dt = new Date(ev.date);
    const dtStart = dt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const dtEndDate = new Date(dt.getTime() + 24 * 60 * 60 * 1000);
    const dtEnd = dtEndDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${ev.id}@life-timeline`);
    lines.push(`DTSTAMP:${dtStart}`);
    lines.push(`DTSTART:${dtStart}`);
    lines.push(`DTEND:${dtEnd}`);
    lines.push(`SUMMARY:${ev.title}`);
    if (ev.description)
      lines.push(`DESCRIPTION:${ev.description.replace(/\n/g, "\\n")}`);
    if (ev.tags?.length) lines.push(`CATEGORIES:${ev.tags.join(",")}`);
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.join("\n");
}
