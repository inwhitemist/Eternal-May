import React from "react";
import { Wand2, X } from "lucide-react";
import { Button, Dialog } from "./ui";
import EventForm from "./EventForm";
import { EventItem } from "../types";

interface Props {
  open: boolean;
  initial?: EventItem | null;
  onClose: () => void;
  onSubmit: (ev: EventItem) => void;
}

export default function AddDialog({ open, initial, onClose, onSubmit }: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Wand2 size={18} /> {initial ? "Редактировать событие" : "Новое событие"}
        </div>
        <Button variant="ghost" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>
      <div className="px-4">
        <EventForm initial={initial || undefined} onCancel={onClose} onSubmit={onSubmit} />
      </div>
    </Dialog>
  );
}
