import React, { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { api, AdminUser } from "../api";
import { Dialog, Button, Input } from "./ui";

export default function UsersDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [codes, setCodes] = useState<Record<string, string>>({});

  useEffect(() => {
    if (open) refresh();
  }, [open]);

  async function refresh() {
    try {
      const r = await api.getUsers();
      setUsers(r.users);
    } catch {}
  }

  async function addCode(id: string) {
    const code = codes[id];
    if (!code) return;
    try {
      await api.grantLegendary(id, code);
      setCodes((prev) => ({ ...prev, [id]: "" }));
      refresh();
    } catch {}
  }

  async function removeCode(id: string, code: string) {
    try {
      await api.revokeLegendary(id, code);
      refresh();
    } catch {}
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="p-6 w-[90vw] max-w-xl max-h-[80vh] overflow-y-auto grid gap-4">
        <h3 className="text-lg font-semibold">Пользователи</h3>
        {users.map((u) => (
          <div key={u.id} className="border rounded-xl p-3">
            <div className="text-sm font-medium">{u.email}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {u.codes.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/10 px-2 py-1 text-xs"
                >
                  {c}
                  <button
                    onClick={() => removeCode(u.id, c)}
                    className="opacity-60 hover:opacity-100"
                  >
                    <Trash2 size={12} />
                  </button>
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              <Input
                value={codes[u.id] || ""}
                onChange={(e) =>
                  setCodes((prev) => ({ ...prev, [u.id]: e.target.value }))
                }
                placeholder="Код"
              />
              <Button onClick={() => addCode(u.id)}>
                <Plus size={16} /> Добавить
              </Button>
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
