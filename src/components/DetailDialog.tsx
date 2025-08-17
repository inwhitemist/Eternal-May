import React from "react";
import { Calendar as CalendarIcon, Edit3, Info, Trash2, X } from "lucide-react";
import { Button, Dialog } from "./ui";
import { EventItem } from "../types";
import { formatDateHuman } from "../utils/helpers";

interface Props {
  open: boolean;
  event: EventItem | null;
  admin: boolean;
  onClose: () => void;
  onEdit: (ev: EventItem) => void;
  onDelete: (ev: EventItem) => void;
  onImagePreview: (src: string) => void;
}

export default function DetailDialog({
  open,
  event,
  admin,
  onClose,
  onEdit,
  onDelete,
  onImagePreview,
}: Props) {
  if (!open || !event) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Info size={18} /> {event.title}
        </div>
        <Button variant="ghost" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>
      <div className="flex max-h-[85vh] flex-col gap-3 overflow-y-auto p-4">
        <div className="text-sm opacity-80">
          <CalendarIcon className="-mt-0.5 inline" size={14} /> {formatDateHuman(event.date)}
        </div>
        {event.imageData && (
          <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 flex-shrink-0">
            <img
              src={event.imageData}
              alt={event.title}
              className="max-h-[60vh] w-full cursor-pointer object-cover"
              onClick={() => onImagePreview(event.imageData!)}
            />
          </div>
        )}
        {event.description && (
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            {event.description}
          </p>
        )}
        {event.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {event.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-xs dark:border-white/10 dark:bg-white/10"
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}
        {admin && (
          <div className="mt-2 flex items-center justify-end gap-2">
            <Button
              variant="soft"
              onClick={() => onEdit(event)}
            >
              <Edit3 size={16} /> Редактировать
            </Button>
            <Button variant="outline" onClick={() => onDelete(event)}>
              <Trash2 size={16} /> Удалить
            </Button>
          </div>
        )}
      </div>
    </Dialog>
  );
}
