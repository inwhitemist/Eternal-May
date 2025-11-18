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
  LogIn as LogInIcon,
  Loader2,
} from "lucide-react";
import { api, AdminUser, LegendaryCatalogItem } from "../api";
import { Button, Input, ConfirmDialog, cn } from "./ui";

type TabKey = "users" | "legendary";

type AdminPageProps = {
  authorized: boolean;
  isAdminUser: boolean;
  loadingProof: boolean;
  proofError?: string | null;
  onExit: () => void;
  onRequestLogin?: () => void;
  onRetryProof?: () => void;
};

export default function AdminPage({
  authorized,
  isAdminUser,
  loadingProof,
  proofError,
  onExit,
  onRequestLogin,
  onRetryProof,
}: AdminPageProps) {
  const [tab, setTab] = useState<TabKey>("users");

  useEffect(() => {
    setTab("users");
  }, [authorized]);

  if (!authorized) {
    const title = !isAdminUser
      ? "Эта страница только для админов"
      : loadingProof
        ? "Подтверждаем права администратора…"
        : proofError
          ? "Не удалось подтвердить права"
          : "Нет доступа";
    const description = !isAdminUser
      ? "Убедитесь, что вошли под админским аккаунтом. Если нужна помощь — свяжитесь с владельцем таймлайна."
      : loadingProof
        ? "Мы сверяем подписи и выдаём временный пропуск. Это займёт всего пару секунд."
        : proofError || "Нужно повторно подтвердить админскую сессию.";

    return (
      <div className="min-h-[100svh] bg-gradient-to-b from-slate-100 to-white px-4 py-10 dark:from-neutral-950 dark:to-neutral-900">
        <div className="mx-auto flex min-h-[80svh] max-w-3xl flex-col items-center justify-center gap-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1 text-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
            {loadingProof ? <Loader2 size={16} className="animate-spin" /> : <Shield size={16} />} Доступ ограничен
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-base text-black/70 dark:text-white/70">{description}</p>
            {proofError && isAdminUser && !loadingProof && (
              <p className="text-sm text-rose-500">{proofError}</p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {onRequestLogin && !isAdminUser && (
              <Button onClick={onRequestLogin}>
                <LogInIcon size={16} /> Войти
              </Button>
            )}
            {isAdminUser && !loadingProof && onRetryProof && (
              <Button variant="soft" onClick={onRetryProof}>
                <RefreshCw size={16} /> Повторить проверку
              </Button>
            )}
            <Button variant="outline" onClick={onExit}>
              Вернуться к воспоминаниям
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100svh] bg-gradient-to-b from-slate-50 to-white px-4 py-10 dark:from-neutral-900 dark:to-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              <Shield size={14} /> Secure Area
            </p>
            <h1 className="mt-3 text-3xl font-bold">Админ-панель</h1>
            <p className="text-black/60 dark:text-white/60">Управляйте пользователями, кодами и легендарными событиями.</p>
          </div>
          <Button variant="outline" onClick={onExit}>
            Вернуться к таймлайну
          </Button>
        </div>
        <div className="rounded-3xl border border-black/5 bg-white/80 shadow-2xl shadow-purple-500/5 backdrop-blur dark:border-white/10 dark:bg-neutral-900/80">
          <div className="border-b border-black/5 px-4 pb-4 pt-6 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <UsersIcon size={18} /> Контрольная панель
              </h3>
            </div>
            <div className="relative mt-4">
              <div className="flex gap-2 rounded-xl bg-black/5 p-1 dark:bg-white/10">
                <TabButton active={tab === "users"} onClick={() => setTab("users")}>
                  <UsersIcon size={16} /> Пользователи
                </TabButton>
                <TabButton active={tab === "legendary"} onClick={() => setTab("legendary")}>
                  <Sparkles size={16} /> Легендарные события
                </TabButton>
              </div>
            </div>
          </div>
          <div className="p-4">
            {tab === "users" ? <UsersPanel /> : <LegendaryPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, children }: React.PropsWithChildren<{ active?: boolean; onClick: () => void }>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition",
        active ? "bg-white shadow dark:bg-neutral-800" : "hover:bg-black/10 dark:hover:bg-white/20"
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
          <Button variant={roleFilter === "all" ? "soft" : "outline"} onClick={() => setRoleFilter("all")}>
            Все
          </Button>
          <Button variant={roleFilter === "admin" ? "soft" : "outline"} onClick={() => setRoleFilter("admin")}>
            Админы
          </Button>
          <Button variant={roleFilter === "user" ? "soft" : "outline"} onClick={() => setRoleFilter("user")}>
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
                    <button onClick={() => handleCopy(c, `code:${u.id}:${c}`)} title="Копировать код" className="opacity-60 hover:opacity-100">
                      {copied === `code:${u.id}:${c}` ? <Check size={12} /> : <Copy size={12} />}
                    </button>
                    <button onClick={() => setConfirmRemove({ userId: u.id, code: c })} title="Удалить код" className="opacity-60 hover:opacity-100">
                      <Trash2 size={12} />
                    </button>
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
