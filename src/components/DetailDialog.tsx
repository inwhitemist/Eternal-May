import React from "react";
import { Calendar as CalendarIcon, Edit3, Info, MessagesSquare, Trash2, X } from "lucide-react";
import { Button, Dialog } from "./ui";
import { ChatMessage, EventItem } from "../types";
import { formatDateHuman } from "../utils/helpers";
import { api } from "../api";

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
  const [chatMessages, setChatMessages] = React.useState<ChatMessage[] | null>(null);
  const [chatError, setChatError] = React.useState<string | null>(null);
  const [chatLoading, setChatLoading] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    setChatMessages(null);
    setChatError(null);
    if (!event?.chatId) return;
    setChatLoading(true);
    api
      .getChatMessages(event.chatId, event.chatFromId ?? undefined, event.chatToId ?? undefined)
      .then((r) => {
        if (cancelled) return;
        setChatMessages(r.messages || []);
      })
      .catch((e) => {
        if (cancelled) return;
        setChatError(e?.message || "Не удалось загрузить переписку");
      })
      .finally(() => {
        if (cancelled) return;
        setChatLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [event?.chatId, event?.chatFromId, event?.chatToId]);

  if (!open || !event) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95 rounded-t-2xl">
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
              className="max-h-[30vh] w-full cursor-pointer object-contain"
              onClick={() => onImagePreview(event.imageData!)}
            />
          </div>
        )}
        {event.description && (
          <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-pre-line">
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
                #{t === "legendary" ? "легендарное" : t}
              </span>
            ))}
          </div>
        ) : null}
        {event.chatId && (
          <div className="grid gap-2">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-200">
              <MessagesSquare size={16} /> Переписка
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-700 dark:text-emerald-200">
                {event.chatId}.json
              </span>
              {(event.chatFromId || event.chatToId) && (
                <span className="text-xs text-black/60 dark:text-white/60">
                  {event.chatFromId ? `ID с ${event.chatFromId}` : ""}
                  {event.chatFromId && event.chatToId ? " – " : ""}
                  {event.chatToId ? `до ${event.chatToId}` : ""}
                </span>
              )}
            </div>
            {chatLoading && (
              <div className="text-sm text-black/60 dark:text-white/60">Загрузка переписки…</div>
            )}
            {chatError && <div className="text-sm text-red-500">{chatError}</div>}
            {!chatLoading && !chatError && (
              <div className="grid gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                {chatMessages?.length ? (
                  chatMessages.map((m) => (
                    <div
                      key={m.id}
                      className="grid gap-1 rounded-lg bg-white/70 p-2 shadow-sm dark:bg-white/5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-black/60 dark:text-white/60">
                        <span className="font-semibold text-black/80 dark:text-white/80">{m.author}</span>
                        <span className="rounded-full bg-black/5 px-2 py-0.5 text-[11px] dark:bg-white/10">#{m.id}</span>
                        <span>{m.datetime}</span>
                      </div>
                      <div className="text-sm whitespace-pre-line text-black/80 dark:text-white/80">{m.text}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-black/60 dark:text-white/60">
                    Сообщений в указанном диапазоне нет
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {admin && (
          <div className="mt-2 flex items-center justify-end gap-2">
            <Button variant="soft" onClick={() => onEdit(event)}>
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
