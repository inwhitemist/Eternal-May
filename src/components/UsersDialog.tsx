import React, { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Trash2,
  Copy,
  Check,
  RefreshCw,
  Search,
  ChevronUp,
  ChevronDown,
  Shield,
  Mail,
} from "lucide-react";
import { api, AdminUser } from "../api";
import { Dialog, Button, Input, ConfirmDialog } from "./ui";

type SortBy = "email" | "role" | "codes";
type SortDir = "asc" | "desc";

export default function UsersDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "admin" | "user">(
    "all"
  );
  const [sortBy, setSortBy] = useState<SortBy>("email");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [codes, setCodes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState<string | null>(null);
  const [confirmRemove, setConfirmRemove] = useState<
    { userId: string; code: string } | null
  >(null);

  useEffect(() => {
    if (open) refresh();
  }, [open]);

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
    // Поддержка множественного ввода: запятые, пробелы, переносы строк
    const parts = Array.from(
      new Set(
        raw
          .split(/[\s,;]+/g)
          .map((s) => s.trim())
          .filter(Boolean)
      )
    );
    if (parts.length === 0) return;

    setLoading(true);
    setError(null);
    try {
      for (const code of parts) {
        // по одному запросу, чтобы не плодить гонки
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
    <Dialog open={open} onClose={onClose}>
      <div className="p-6 w-[92vw] max-w-2xl max-h-[80vh] overflow-y-auto grid gap-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Shield size={18} /> Пользователи
          </h3>
          <div className="flex items-center gap-2">
            <Button variant="soft" onClick={refresh} disabled={loading}>
              <RefreshCw className={loading ? "animate-spin" : ""} size={16} />
              Обновить
            </Button>
            <Button variant="outline" onClick={onClose}>Закрыть</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по email, id, коду"
              className="pl-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={roleFilter === "all" ? "soft" : "outline-solid"}
              onClick={() => setRoleFilter("all")}
            >
              Все
            </Button>
            <Button
              variant={roleFilter === "admin" ? "soft" : "outline-solid"}
              onClick={() => setRoleFilter("admin")}
            >
              Админы
            </Button>
            <Button
              variant={roleFilter === "user" ? "soft" : "outline-solid"}
              onClick={() => setRoleFilter("user")}
            >
              Пользователи
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs opacity-60">Сортировка:</span>
          <Button variant="outline" onClick={() => toggleSort("email")} className="text-xs">
            Email {sortBy === "email" ? (
              sortDir === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
            ) : null}
          </Button>
          <Button variant="outline" onClick={() => toggleSort("role")} className="text-xs">
            Роль {sortBy === "role" ? (
              sortDir === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
            ) : null}
          </Button>
          <Button variant="outline" onClick={() => toggleSort("codes")} className="text-xs">
            Кол-во кодов {sortBy === "codes" ? (
              sortDir === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
            ) : null}
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
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium flex items-center gap-2">
                      <Mail size={14} className="opacity-60" /> {u.email}
                    </div>
                    <div className="mt-1 text-xs opacity-60">ID: {u.id}</div>
                    <div className="mt-1 text-xs opacity-60">Роль: {u.role}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => handleCopy(u.email, `email:${u.id}`)}
                    >
                      {copied === `email:${u.id}` ? <Check size={14} /> : <Copy size={14} />}
                      Копировать email
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleCopy(u.id, `id:${u.id}`)}
                    >
                      {copied === `id:${u.id}` ? <Check size={14} /> : <Copy size={14} />}
                      ID
                    </Button>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {u.codes.length === 0 && (
                    <span className="text-xs opacity-60">Кодов нет</span>
                  )}
                  {u.codes.map((c) => (
                    <span
                      key={c}
                      className="flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/10 px-2 py-1 text-xs"
                    >
                      {c}
                      <button
                        onClick={() => handleCopy(c, `code:${u.id}:${c}`)}
                        title="Копировать код"
                        className="opacity-60 hover:opacity-100"
                      >
                        {copied === `code:${u.id}:${c}` ? (
                          <Check size={12} />
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                      <button
                        onClick={() => setConfirmRemove({ userId: u.id, code: c })}
                        title="Удалить код"
                        className="opacity-60 hover:opacity-100"
                      >
                        <Trash2 size={12} />
                      </button>
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Input
                    value={codes[u.id] || ""}
                    onChange={(e) =>
                      setCodes((prev) => ({ ...prev, [u.id]: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") addCode(u.id);
                    }}
                    placeholder="Код или несколько (через запятую/пробел)"
                  />
                  <div className="flex gap-2">
                    <Button onClick={() => addCode(u.id)} disabled={loading}>
                      <Plus size={16} /> Выдать
                    </Button>
                    {u.codes.length > 0 && (
                      <Button
                        variant="outline"
                        onClick={() => removeAllCodes(u.id, u.codes)}
                        disabled={loading}
                      >
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
          description={
            confirmRemove
              ? `Код ${confirmRemove.code} будет отозван.`
              : undefined
          }
          confirmText="Удалить"
          cancelText="Отмена"
          onConfirm={() =>
            confirmRemove &&
            removeCode(confirmRemove.userId, confirmRemove.code)
          }
          onCancel={() => setConfirmRemove(null)}
        />
      </div>
    </Dialog>
  );
}

