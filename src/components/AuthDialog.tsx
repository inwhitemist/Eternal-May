import React, { useEffect, useState } from "react";
import { LogIn, Sparkles, X } from "lucide-react";
import { Button, Dialog, Input } from "./ui";

interface Props {
  open: boolean;
  mode: "login" | "register";
  onClose: () => void;
  onSuccess: () => void;
  login: (email: string, password: string) => Promise<any>;
  register: (email: string, password: string, invite: string) => Promise<any>;
}

export default function AuthDialog({
  open,
  mode,
  onClose,
  onSuccess,
  login,
  register,
}: Props) {
  const [form, setForm] = useState({ email: "", password: "", invite: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
  }, [mode, open]);

  async function submit() {
    setLoading(true);
    setError(null);
    try {
      if (mode === "login") {
        await login(form.email, form.password);
      } else {
        if (!form.invite) {
          setError("Нужен инвайт-код");
          setLoading(false);
          return;
        }
        await register(form.email, form.password, form.invite);
      }
      onSuccess();
      onClose();
    } catch (e: any) {
      setError(e?.message || "Ошибка авторизации");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-neutral-900/95">
        <div className="flex items-center gap-2 text-lg font-semibold">
          {mode === "login" ? (
            <>
              <LogIn size={18} /> Вход
            </>
          ) : (
            <>
              <Sparkles size={18} /> Регистрация
            </>
          )}
        </div>
        <Button variant="ghost" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>

      <div className="p-4">
        <div className="grid gap-3">
          <div className="grid gap-1">
            <label className="text-xs opacity-70">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="grid gap-1">
            <label className="text-xs opacity-70">Пароль</label>
            <div className="relative">
              <Input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs opacity-70 hover:opacity-100"
              >
                {showPass ? "Скрыть" : "Показать"}
              </button>
            </div>
            <p className="text-[11px] opacity-60">Мин. 6 символов</p>
          </div>

          {mode === "register" && (
            <div className="grid gap-1">
              <label className="text-xs opacity-70">Инвайт-код</label>
              <Input
                placeholder="XXXX-XXXX"
                value={form.invite}
                onChange={(e) => setForm({ ...form, invite: e.target.value })}
              />
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200/60 bg-red-50/80 px-3 py-2 text-xs text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="mt-1 flex items-center justify-between">
            <button
              type="button"
              className="text-xs opacity-70 hover:opacity-100 underline underline-offset-4"
              onClick={() => {
                alert("Скоро добавим восстановление пароля 🙂");
              }}
            >
              Забыли пароль?
            </button>
            <span className="text-xs opacity-70"></span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs opacity-70">
            {mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
            <button
              className="underline underline-offset-4 hover:opacity-100 opacity-80"
              onClick={() => {
                const ev = new CustomEvent("switch-auth-mode", {
                  detail: mode === "login" ? "register" : "login",
                });
                window.dispatchEvent(ev);
              }}
            >
              {mode === "login" ? "Зарегистрируйтесь" : "Войти"}
            </button>
          </div>

          <Button onClick={submit} disabled={loading}>
            {loading ? (
              "..."
            ) : mode === "login" ? (
              <>
                <LogIn size={16} /> Войти
              </>
            ) : (
              <>
                <Sparkles size={16} /> Зарегистрироваться
              </>
            )}
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
