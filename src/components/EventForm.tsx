import React, { useState } from "react";
import { Tag, Image as ImageIcon, X, Sparkles } from "lucide-react";
import { Button, Chip, Input, Textarea, cn } from "./ui";
import { EventItem } from "../types";
import { uid } from "../utils/helpers";
import DatePicker from "./DatePicker";

interface Props {
  initial?: Partial<EventItem>;
  onSubmit: (e: EventItem) => void;
  onCancel: () => void;
}

export default function EventForm({ initial, onSubmit, onCancel }: Props) {
  const [date, setDate] = useState(
    initial?.date || new Date().toISOString().slice(0, 10)
  );
  const [title, setTitle] = useState(initial?.title || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [tags, setTags] = useState((initial?.tags as string[]) || []);
  const [tagInput, setTagInput] = useState("");
  const [color, setColor] = useState(initial?.color || "");
  const [imageData, setImageData] = useState<string | undefined>(initial?.imageData);
  const [legendary, setLegendary] = useState(Boolean(initial?.code));
  const [code, setCode] = useState(initial?.code || "");
  const [chatId, setChatId] = useState(initial?.chatId || "");
  const [chatFromId, setChatFromId] = useState(
    initial?.chatFromId !== undefined && initial?.chatFromId !== null
      ? String(initial.chatFromId)
      : ""
  );
  const [chatToId, setChatToId] = useState(
    initial?.chatToId !== undefined && initial?.chatToId !== null
      ? String(initial.chatToId)
      : ""
  );

  React.useEffect(() => {
    if (legendary) {
      if (!tags.includes("legendary")) setTags((prev) => [...prev, "legendary"]);
    } else {
      if (tags.includes("legendary")) setTags((prev) => prev.filter((t) => t !== "legendary"));
    }
  }, [legendary]);

  function addTag() {
    const t = tagInput.trim();
    if (!t) return;
    if (!tags.includes(t)) setTags([...tags, t]);
    setTagInput("");
  }

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return alert("Выберите изображение");
    const reader = new FileReader();
    reader.onload = () => setImageData(String(reader.result));
    reader.readAsDataURL(file);
  }

  React.useEffect(() => {
    function handlePaste(e: ClipboardEvent) {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) {
            e.preventDefault();
            const reader = new FileReader();
            reader.onload = () => setImageData(String(reader.result));
            reader.readAsDataURL(file);
          }
          break;
        }
      }
    }
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const ev: EventItem = {
          id: (initial?.id as string) || uid(),
          date,
          title: title.trim() || "Без названия",
          description: description.trim(),
          tags,
          color: color || undefined,
          imageData,
          ...(legendary ? { code: code.trim().toUpperCase() } : {}),
          ...(chatId.trim()
            ? {
                chatId: chatId.trim(),
                chatFromId: chatFromId ? Number(chatFromId) : undefined,
                chatToId: chatToId ? Number(chatToId) : undefined,
              }
            : { chatId: undefined, chatFromId: undefined, chatToId: undefined }),
        };
        onSubmit(ev);
      }}
      className="flex min-h-0 flex-1 flex-col"
    >
      <div className="grid max-h-[60vh] gap-3 overflow-y-auto pr-1">
        <div className="grid gap-1">
          <label className="text-xs text-black/60 dark:text-white/60">Тип события</label>
          <div className="flex gap-2">
            <Button
              type="button"
              variant={legendary ? "soft" : "primary"}
              onClick={() => setLegendary(false)}
            >
              Обычное
            </Button>
            <Button
              type="button"
              variant={legendary ? "primary" : "soft"}
              onClick={() => setLegendary(true)}
            >
              Легендарное
            </Button>
          </div>
        </div>
        {legendary && (
          <div className="grid gap-1">
            <label className="text-xs text-black/60 dark:text-white/60">Код</label>
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
        )}
        <div className="grid gap-1">
          <label className="text-xs text-black/60 dark:text-white/60">Дата</label>
          {/* Скрытый type=date для валидности формы */}
          <input type="date" value={date} onChange={() => {}} required className="sr-only pointer-events-none opacity-0 absolute -z-10" tabIndex={-1} readOnly />
          <DatePicker value={date} onChange={setDate} />
        </div>
        <div className="grid gap-1">
          <label className="text-xs text-black/60 dark:text-white/60">Заголовок</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Например: Переезд в новый город"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs text-black/60 dark:text-white/60">Описание</label>
          <Textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Короткая история/заметки"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-xs text-black/60 dark:text-white/60">
            Переписка (chatId и диапазон сообщений)
          </label>
          <div className="grid gap-2 sm:grid-cols-[1fr_140px_140px] sm:items-center sm:gap-3">
            <Input
              value={chatId}
              onChange={(e) => setChatId(e.target.value)}
              placeholder="Например: samir"
              aria-label="ID чата"
            />
            <Input
              type="number"
              value={chatFromId}
              onChange={(e) => setChatFromId(e.target.value)}
              placeholder="Сообщение от"
              min={0}
            />
            <Input
              type="number"
              value={chatToId}
              onChange={(e) => setChatToId(e.target.value)}
              placeholder="Сообщение до"
              min={0}
            />
          </div>
          <p className="text-xs text-black/50 dark:text-white/50">
            Укажите chatId (имя JSON-файла без .json) и диапазон ID сообщений, который
            нужно показать в карточке.
          </p>
        </div>
        <div className="grid gap-1">
          <label className="text-xs text-black/60 dark:text-white/60">Теги</label>
          <div className="flex gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Добавить тег"
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
            />
            <Button variant="soft" onClick={addTag} type="button">
              <Tag size={16} /> Добавить
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((t) => (
              <Chip
                key={t}
                label={t}
                onClick={() =>
                  t === "legendary" && legendary
                    ? undefined
                    : setTags(tags.filter((x) => x !== t))
                }
              />
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <label className="text-xs text-black/60 dark:text-white/60">Цвет акцента</label>
          <div className="flex flex-wrap items-center gap-3">
            {["#60a5fa", "#34d399", "#f472b6", "#fb923c", "#a78bfa", "#fbbf24"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={cn(
                  "h-6 w-6 rounded-full border border-black/20 dark:border-white/10",
                  color === c && "ring-2 ring-offset-2 ring-indigo-400"
                )}
                style={{ background: c }}
                aria-label={`Выбрать цвет ${c}`}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <label className="text-xs text-black/60 dark:text-white/60 flex items-center gap-2">
            <ImageIcon size={16} /> Фото (необязательно, 1 шт; можно вставить из буфера обмена)
          </label>
          <div className="flex flex-col items-start gap-2">
            <label
              className={cn(
                "relative flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-indigo-300/60 bg-white/60 px-4 py-4 text-sm font-medium transition hover:bg-indigo-50 dark:bg-white/10 dark:hover:bg-indigo-950/20",
                imageData && "border-solid border-indigo-400 bg-indigo-50/60 dark:bg-indigo-900/30"
              )}
              style={{ minHeight: 120, minWidth: 180, width: "100%", maxWidth: 320 }}
            >
              {imageData ? (
                <img
                  src={imageData}
                  alt="Превью"
                  className="max-h-28 max-w-full object-contain rounded-lg shadow"
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full gap-2 py-2 text-indigo-500 dark:text-indigo-300">
                  <ImageIcon size={32} />
                  <span className="text-xs opacity-70">Выбрать изображение</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={onFile}
                className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                tabIndex={-1}
                aria-label="Выбрать изображение"
              />
            </label>
            {imageData && (
              <Button variant="outline" className="mt-1" onClick={() => setImageData(undefined)} type="button">
                <X size={14} /> Удалить фото
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 -mx-4 mt-3 flex justify-end gap-2 border-t border-black/10 bg-white/90 px-4 py-3 backdrop-blur dark:border-white/10 dark:bg-neutral-900/90 rounded-b-2xl">
        <Button variant="outline" onClick={onCancel} type="button">
          <X size={16} /> Отмена
        </Button>
        <Button type="submit">
          <Sparkles size={16} /> Сохранить
        </Button>
      </div>
    </form>
  );
}
