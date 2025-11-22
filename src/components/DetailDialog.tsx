import React from "react";
import { Calendar as CalendarIcon, Clock, Edit3, Info, MessagesSquare, Trash2, X } from "lucide-react";
import { Button, Dialog } from "./ui";
import { ChatMessage, EventItem } from "../types";
import { formatDateHuman, formatChatTimestamp } from "../utils/helpers";
import { api } from "../api";

const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

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
  const [chatVisible, setChatVisible] = React.useState(false);

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

  React.useEffect(() => {
    setChatVisible(Boolean(event?.chatId));
  }, [event?.chatId]);

  const extractImageUrls = React.useCallback((text: string) => {
    const matches = text.match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp)(?:\?\S*)?)/gi);
    return matches ? matches.map((url) => url.trim()) : [];
  }, []);

  const stripImageUrls = React.useCallback((text: string, links: string[]) => {
    if (!links.length) return text.trim();
    let cleaned = text;
    links.forEach((link) => {
      const pattern = new RegExp(`(?:\\s*Фотография:?\\s*)?${escapeRegExp(link)}`, "gi");
      cleaned = cleaned.replace(pattern, " ");
    });
    return cleaned.replace(/ {2,}/g, " ").trim();
  }, []);

  const bubblePalette = React.useMemo(
    () => [
      { tint: "rgba(99, 102, 241, 0.08)", border: "rgba(99, 102, 241, 0.25)", accent: "rgba(99, 102, 241, 0.4)" },   // indigo
      { tint: "rgba(16, 185, 129, 0.08)", border: "rgba(16, 185, 129, 0.25)", accent: "rgba(16, 185, 129, 0.45)" },  // emerald
      { tint: "rgba(14, 165, 233, 0.08)", border: "rgba(14, 165, 233, 0.25)", accent: "rgba(14, 165, 233, 0.4)" },  // sky
      { tint: "rgba(249, 115, 22, 0.08)", border: "rgba(249, 115, 22, 0.25)", accent: "rgba(249, 115, 22, 0.4)" },  // orange
      { tint: "rgba(244, 114, 182, 0.08)", border: "rgba(244, 114, 182, 0.25)", accent: "rgba(244, 114, 182, 0.4)" },// pink
      { tint: "rgba(163, 230, 53, 0.08)", border: "rgba(163, 230, 53, 0.25)", accent: "rgba(163, 230, 53, 0.45)" },  // lime
      { tint: "rgba(248, 113, 113, 0.08)", border: "rgba(248, 113, 113, 0.25)", accent: "rgba(248, 113, 113, 0.4)" },// rose
      { tint: "rgba(59, 130, 246, 0.08)", border: "rgba(59, 130, 246, 0.25)", accent: "rgba(59, 130, 246, 0.4)" },  // blue
    ],
    []
  );

  const getBubbleTheme = React.useCallback(
    (name: string) => {
      if (!name) return bubblePalette[0];
      let hash = 0;
      for (let i = 0; i < name.length; i += 1) {
        hash = (hash * 31 + name.charCodeAt(i)) | 0;
      }
      const idx = Math.abs(hash) % bubblePalette.length;
      return bubblePalette[idx];
    },
    [bubblePalette]
  );

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
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-200">
                <MessagesSquare size={16} /> Переписка
              </div>
              <Button
                variant="ghost"
                className="px-3 py-1 text-xs"
                onClick={() => setChatVisible((v) => !v)}
              >
                {chatVisible ? "Скрыть" : "Показать"}
              </Button>
            </div>
            {chatVisible ? (
              <div className="mt-3 grid gap-2">
                {chatLoading && (
                  <div className="text-sm text-black/60 dark:text-white/60">
                    Загрузка переписки…
                  </div>
                )}
                {chatError && <div className="text-sm text-red-500">{chatError}</div>}
                {!chatLoading && !chatError && (
                  <div className="flex flex-col gap-3">
                    {chatMessages?.length ? (
                      chatMessages.map((m) => {
                        const imageUrls = extractImageUrls(m.text);
                        const textContent = stripImageUrls(m.text, imageUrls);
                        const ATTACHMENT_PHRASE = "1 прикреплённое сообщение";
                        const hasAttachmentPhrase = textContent.includes(ATTACHMENT_PHRASE);
                        const isStickerMessage = textContent === "Стикер";
                        const bubbleClass = imageUrls.length
                          ? "border-black/5 bg-white/95 dark:border-white/10 dark:bg-neutral-900/70"
                          : "border-black/5 bg-white/95 dark:border-white/10 dark:bg-neutral-900/70";
                        return (
                          <div
                            key={m.id}
                            className={`rounded-2xl border px-4 py-3 text-sm shadow-sm backdrop-blur-sm transition hover:shadow-md ${bubbleClass}`}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-black/60 dark:text-white/60">
                              <span className="font-semibold text-black dark:text-white">{m.author}</span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-normal text-black/60 dark:bg-white/10 dark:text-white/70">
                                <Clock size={12} className="opacity-70" />
                                {formatChatTimestamp(m.datetime)}
                              </span>
                            </div>
                            {textContent && (
                              <p
                                className={`mt-2 whitespace-pre-line text-[15px] leading-relaxed ${
                                  isStickerMessage ? "text-black/40 dark:text-white/40 italic" : "text-black/80 dark:text-white/80"
                                }`}
                              >
                                {hasAttachmentPhrase
                                  ? textContent.split(ATTACHMENT_PHRASE).map((chunk, idx, arr) => (
                                      <React.Fragment key={`${m.id}-chunk-${idx}`}>
                                        {chunk}
                                        {idx < arr.length - 1 && (
                                          <span className="text-black/40 dark:text-white/40">
                                            {ATTACHMENT_PHRASE}
                                          </span>
                                        )}
                                      </React.Fragment>
                                    ))
                                  : textContent}
                              </p>
                            )}
                            {imageUrls.length > 0 && (
                              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                {imageUrls.map((url, idx) => (
                                  <button
                                    type="button"
                                    key={`${m.id}-${idx}`}
                                    className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-black/5 shadow-inner transition hover:border-emerald-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                                    onClick={() => onImagePreview(url)}
                                  >
                                    <img
                                      src={url}
                                      alt="Фото из переписки"
                                      className="h-44 w-full cursor-zoom-in object-cover transition duration-300 group-hover:scale-[1.03]"
                                      loading="lazy"
                                    />
                                    <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-0.5 text-xs text-white opacity-0 transition group-hover:opacity-100">
                                      Открыть
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-sm text-black/60 dark:text-white/60">
                        Сообщений в указанном диапазоне нет
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-3 text-sm text-black/60 dark:text-white/60">
                Переписка скрыта
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
