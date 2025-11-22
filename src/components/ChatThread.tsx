import React from "react";
import { Loader2, RefreshCcw, AlertTriangle } from "lucide-react";
import { api, ChatSliceParams } from "../api";
import { ChatMessage } from "../types";
import { formatDateTimeHuman } from "../utils/helpers";
import { Button } from "./ui";

interface Props {
  chatId: string;
  params?: ChatSliceParams;
}

export default function ChatThread({ chatId, params = {} }: Props) {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.fetchChatSlice(chatId, params);
      setMessages(res.messages || []);
    } catch (e) {
      setError((e as Error).message || "Не удалось загрузить переписку");
    } finally {
      setLoading(false);
    }
  }, [chatId, params]);

  React.useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Переписка #{chatId}</div>
        <Button variant="soft" onClick={load} disabled={loading} className="h-8 px-3 text-sm">
          <RefreshCcw size={14} className={loading ? "animate-spin" : ""} /> Обновить
        </Button>
      </div>
      {loading && (
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
          <Loader2 size={16} className="animate-spin" /> Загрузка переписки...
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-700 dark:text-red-300">
          <AlertTriangle size={16} /> {error}
        </div>
      )}
      {!loading && !error && !messages.length && (
        <div className="text-sm text-neutral-500">Нет сообщений в выбранном диапазоне.</div>
      )}
      <div className="flex max-h-96 flex-col gap-4 overflow-y-auto pr-1">
        {messages.map((msg) => (
          <div key={msg.messageId} className="rounded-xl bg-black/5 p-3 dark:bg-white/10">
            <div className="mb-1 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600 dark:text-neutral-300">
              <span className="font-semibold text-neutral-800 dark:text-neutral-100">{msg.author}</span>
              <span>{formatDateTimeHuman(msg.sentAt)}</span>
            </div>
            <div className="whitespace-pre-line text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
              {msg.content?.trim() || "(без текста)"}
            </div>
            {msg.sourceFile && (
              <div className="pt-1 text-[11px] text-neutral-500">Источник: {msg.sourceFile}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
