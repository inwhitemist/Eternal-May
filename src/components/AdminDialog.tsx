import React, { useEffect, useMemo, useState } from "react";
import {
  Users as UsersIcon,
  Sparkles,
  Shield,
  RefreshCw,
  Search,
  Copy,
  Check,
  Mail,
  ChevronUp,
  ChevronDown,
  Plus,
  Trash2,
  MessagesSquare,
  FileJson,
} from "lucide-react";
import { api, AdminUser, LegendaryCatalogItem } from "../api";
import { ChatMessage } from "../types";
import { Button, Dialog, Input, ConfirmDialog, cn } from "./ui";
import { Tooltip, TooltipContent } from "@heroui/react";

type TabKey = "users" | "legendary" | "chats";

export default function AdminDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<TabKey>("users");

  useEffect(() => {
    if (open) setTab("users");
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="p-0 flex max-h-[85vh] flex-col">
        <div className="border-b px-4 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Shield size={18} /> Админ-панель
            </h3>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={onClose}>Закрыть</Button>
            </div>
          </div>
          {/* HeroUI-like tabs */}
          <div className="relative">
            <div className="flex gap-2 rounded-xl bg-black/5 p-1 dark:bg-white/10">
              <TabButton active={tab === "users"} onClick={() => setTab("users")}> 
                <UsersIcon size={16} /> Пользователи
              </TabButton>
              <TabButton active={tab === "legendary"} onClick={() => setTab("legendary")}> 
                <Sparkles size={16} /> Легендарные события
              </TabButton>
              <TabButton active={tab === "chats"} onClick={() => setTab("chats")}> 
                <MessagesSquare size={16} /> Переписки
              </TabButton>
            </div>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          {tab === "users" ? <UsersPanel /> : tab === "legendary" ? <LegendaryPanel /> : <ChatUploadPanel />}
        </div>
      </div>
    </Dialog>
  );
}

function TabButton({ active, onClick, children }: React.PropsWithChildren<{ active?: boolean; onClick: () => void }>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition",
        active ? "bg-white shadow-sm dark:bg-neutral-800" : "hover:bg-black/10 dark:hover:bg-white/20"
      )}
    >
      {children}
    </button>
  );
}

// -------- Users Panel (migrated from UsersDialog) --------
type SortBy = "email" | "role" | "codes";
type SortDir = "asc" | "desc";

function UsersPanel() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "admin" | "user">("all");
  const [sortBy, setSortBy] = useState<SortBy>("email");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [codes, setCodes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState<string | null>(null);
  const [confirmRemove, setConfirmRemove] = useState<{ userId: string; code: string } | null>(null);

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    setError(null);
    setLoading(true);
    try {
      const r = await api.getUsers();
      setUsers(r.users);
    } catch (e: any) {
      setError(e?.message || "Не удалось загрузить пользователей");
    } finally {
      setLoading(false);
    }
  }

  async function addCode(userId: string) {
    const raw = (codes[userId] || "").trim();
    if (!raw) return;
    const parts = Array.from(new Set(raw.split(/[\s,;]+/g).map((s) => s.trim()).filter(Boolean)));
    if (parts.length === 0) return;
    setLoading(true);
    setError(null);
    try {
      for (const code of parts) {
        await api.grantLegendary(userId, code);
      }
      setCodes((prev) => ({ ...prev, [userId]: "" }));
      await refresh();
    } catch (e: any) {
      setError(e?.message || "Не удалось выдать код(ы)");
    } finally {
      setLoading(false);
    }
  }

  async function removeCode(userId: string, code: string) {
    setLoading(true);
    setError(null);
    try {
      await api.revokeLegendary(userId, code);
      await refresh();
    } catch (e: any) {
      setError(e?.message || "Не удалось отозвать код");
    } finally {
      setLoading(false);
      setConfirmRemove(null);
    }
  }

  async function removeAllCodes(userId: string, codes: string[]) {
    if (codes.length === 0) return;
    setLoading(true);
    setError(null);
    try {
      for (const c of codes) await api.revokeLegendary(userId, c);
      await refresh();
    } catch (e: any) {
      setError(e?.message || "Не удалось отозвать коды");
    } finally {
      setLoading(false);
    }
  }

  function toggleSort(next: SortBy) {
    if (sortBy === next) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortBy(next);
      setSortDir("asc");
    }
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = users.filter((u) => {
      if (roleFilter !== "all" && u.role !== roleFilter) return false;
      if (!q) return true;
      const inEmail = u.email.toLowerCase().includes(q);
      const inCodes = u.codes.some((c) => c.toLowerCase().includes(q));
      return inEmail || inCodes || u.id.toLowerCase().includes(q);
    });
    list.sort((a, b) => {
      let cmp = 0;
      if (sortBy === "email") cmp = a.email.localeCompare(b.email);
      else if (sortBy === "role") cmp = a.role.localeCompare(b.role);
      else if (sortBy === "codes") cmp = a.codes.length - b.codes.length;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return list;
  }, [users, query, roleFilter, sortBy, sortDir]);

  async function handleCopy(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((curr) => (curr === key ? null : curr)), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm opacity-60">
          <UsersIcon size={16} /> Управление пользователями
        </div>
        <Button variant="soft" onClick={refresh} disabled={loading}>
          <RefreshCw className={loading ? "animate-spin" : ""} size={16} /> Обновить
        </Button>
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск по email, id, коду" className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant={roleFilter === "all" ? "soft" : "outline-solid"} onClick={() => setRoleFilter("all")}>
            Все
          </Button>
          <Button variant={roleFilter === "admin" ? "soft" : "outline-solid"} onClick={() => setRoleFilter("admin")}>
            Админы
          </Button>
          <Button variant={roleFilter === "user" ? "soft" : "outline-solid"} onClick={() => setRoleFilter("user")}>
            Пользователи
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs opacity-60">Сортировка:</span>
        <Button variant="outline" onClick={() => toggleSort("email")} className="text-xs">
          Email {sortBy === "email" ? (sortDir === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />) : null}
        </Button>
        <Button variant="outline" onClick={() => toggleSort("role")} className="text-xs">
          Роль {sortBy === "role" ? (sortDir === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />) : null}
        </Button>
        <Button variant="outline" onClick={() => toggleSort("codes")} className="text-xs">
          Кол-во кодов {sortBy === "codes" ? (sortDir === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />) : null}
        </Button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-300/40 bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:border-red-500/20 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="grid gap-3">
        {loading && users.length === 0 ? (
          <div className="text-sm opacity-60">Загрузка пользователей…</div>
        ) : filtered.length === 0 ? (
          <div className="text-sm opacity-60">Ничего не найдено</div>
        ) : (
          filtered.map((u) => (
            <div key={u.id} className="border rounded-xl p-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-medium flex items-center gap-2">
                    <Mail size={14} className="opacity-60" /> {u.email}
                  </div>
                  <div className="mt-1 text-xs opacity-60">ID: {u.id}</div>
                  <div className="mt-1 text-xs opacity-60">Роль: {u.role}</div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" onClick={() => handleCopy(u.email, `email:${u.id}`)}>
                    {copied === `email:${u.id}` ? <Check size={14} /> : <Copy size={14} />}
                    Копировать email
                  </Button>
                  <Button variant="outline" onClick={() => handleCopy(u.id, `id:${u.id}`)}>
                    {copied === `id:${u.id}` ? <Check size={14} /> : <Copy size={14} />}
                    ID
                  </Button>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {u.codes.length === 0 && <span className="text-xs opacity-60">Кодов нет</span>}
                {u.codes.map((c) => (
                  <span key={c} className="flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/10 px-2 py-1 text-xs">
                    {c}
                    <Tooltip delay={0}>
                      <Tooltip.Trigger asChild>
                        <button onClick={() => handleCopy(c, `code:${u.id}:${c}`)} className="opacity-60 hover:opacity-100">
                          {copied === `code:${u.id}:${c}` ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      </Tooltip.Trigger>
                      <TooltipContent showArrow className="text-xs text-center">
                        <Tooltip.Arrow />
                        Копировать код
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip delay={0}>
                      <Tooltip.Trigger asChild>
                        <button onClick={() => setConfirmRemove({ userId: u.id, code: c })} className="opacity-60 hover:opacity-100">
                          <Trash2 size={12} />
                        </button>
                      </Tooltip.Trigger>
                      <TooltipContent showArrow className="text-xs text-center">
                        <Tooltip.Arrow />
                        Удалить код
                      </TooltipContent>
                    </Tooltip>
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                <Input
                  value={codes[u.id] || ""}
                  onChange={(e) => setCodes((prev) => ({ ...prev, [u.id]: e.target.value }))}
                  onKeyDown={(e) => { if (e.key === "Enter") addCode(u.id); }}
                  placeholder="Код или несколько (через запятую/пробел)"
                />
                <div className="flex gap-2">
                  <Button onClick={() => addCode(u.id)} disabled={loading}>
                    <Plus size={16} /> Выдать
                  </Button>
                  {u.codes.length > 0 && (
                    <Button variant="outline" onClick={() => removeAllCodes(u.id, u.codes)} disabled={loading}>
                      <Trash2 size={16} /> Удалить все
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ConfirmDialog
        open={!!confirmRemove}
        title="Удалить код?"
        description={confirmRemove ? `Код ${confirmRemove.code} будет отозван.` : undefined}
        confirmText="Удалить"
        cancelText="Отмена"
        onConfirm={() => confirmRemove && removeCode(confirmRemove.userId, confirmRemove.code)}
        onCancel={() => setConfirmRemove(null)}
      />
    </div>
  );
}

function ChatUploadPanel() {
  const [chatId, setChatId] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function parseMessages(text: string) {
    try {
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed)) throw new Error("Файл должен содержать массив сообщений");
      const normalized: ChatMessage[] = parsed.map((m) => ({
        id: Number(m.id),
        datetime: String(m.datetime || ""),
        author: String(m.author || ""),
        text: String(m.text || ""),
      }));
      setMessages(normalized);
      setStatus(`Загружено сообщений: ${normalized.length}`);
      setError(null);
    } catch (e: any) {
      setMessages([]);
      setStatus(null);
      setError(e?.message || "Не удалось разобрать JSON");
    }
  }

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      parseMessages(String(reader.result));
      if (!chatId) {
        const baseName = file.name.replace(/\.json$/i, "");
        setChatId(baseName);
      }
    };
    reader.readAsText(file, "utf-8");
  }

  async function upload() {
    const id = chatId.trim();
    if (!id) {
      setError("Укажите ID чата");
      return;
    }
    if (!messages.length) {
      setError("Добавьте файл переписки");
      return;
    }
    setLoading(true);
    setError(null);
    setStatus(null);
    try {
      const resp = await api.uploadChatLog(id, messages);
      setStatus(`Файл сохранён (${resp.messages} сообщений)`);
    } catch (e: any) {
      setError(e?.message || "Не удалось загрузить файл");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-2 text-sm opacity-60">
        <MessagesSquare size={16} /> Загрузка переписок (JSON)
      </div>
      <div className="grid gap-2">
        <label className="text-xs text-black/60 dark:text-white/60">ID чата (имя файла без .json)</label>
        <Input
          value={chatId}
          onChange={(e) => setChatId(e.target.value)}
          placeholder="samir"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs text-black/60 dark:text-white/60">Файл переписки (.json)</label>
        <Input type="file" accept="application/json,.json" onChange={onFile} />
        {fileName && <div className="text-xs text-black/60 dark:text-white/60">Выбран файл: {fileName}</div>}
      </div>
      {status && <div className="text-sm text-emerald-600 dark:text-emerald-300">{status}</div>}
      {error && <div className="text-sm text-red-500">{error}</div>}
      <div className="flex items-center gap-2">
        <Button onClick={upload} disabled={loading}>
          <FileJson size={16} /> {loading ? "Сохранение…" : "Сохранить переписку"}
        </Button>
      </div>
    </div>
  );
}

// -------- Legendary Catalog Panel --------
function LegendaryPanel() {
  const [items, setItems] = useState<LegendaryCatalogItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const r = await api.getLegendaryCatalog();
      setItems(r.catalog || []);
    } catch (e: any) {
      setError(e?.message || "Не удалось загрузить список кодов");
    } finally {
      setLoading(false);
    }
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) =>
      !q || i.code.toLowerCase().includes(q) || i.title.toLowerCase().includes(q) || (i.description || "").toLowerCase().includes(q)
    );
  }, [items, query]);

  async function handleCopy(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((curr) => (curr === key ? null : curr)), 1200);
    } catch {}
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm opacity-60">
          <Sparkles size={16} /> Доступные к активации события
        </div>
        <Button variant="soft" onClick={refresh} disabled={loading}>
          <RefreshCw className={loading ? "animate-spin" : ""} size={16} /> Обновить
        </Button>
      </div>

      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск по коду или названию" className="pl-8" />
      </div>

      {error && (
        <div className="rounded-xl border border-red-300/40 bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:border-red-500/20 dark:text-red-300">
          {error}
        </div>
      )}

      <div className="grid gap-3">
        {loading && items.length === 0 ? (
          <div className="text-sm opacity-60">Загрузка…</div>
        ) : filtered.length === 0 ? (
          <div className="text-sm opacity-60">Ничего не найдено</div>
        ) : (
          filtered.map((it) => (
            <div key={`${it.source}:${it.code}`} className="rounded-xl border p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-medium flex items-center gap-2">
                    <span className="inline-flex items-center gap-2">
                      <span className="rounded-md bg-yellow-500/15 px-2 py-0.5 text-xs text-yellow-700 dark:text-yellow-300">{it.code}</span>
                      <span>{it.title}</span>
                    </span>
                  </div>
                  {it.description ? (
                    <div className="mt-1 text-xs opacity-80">{it.description}</div>
                  ) : null}
                  <div className="mt-1 text-[11px] opacity-60">Источник: {it.source === "db" ? "Событие в БД" : "Встроено"}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={() => handleCopy(it.code, `code:${it.code}`)}>
                    {copied === `code:${it.code}` ? <Check size={14} /> : <Copy size={14} />}
                    Код
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
