import React, { useEffect } from "react";
import { motion } from "framer-motion";

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  className,
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: React.PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline" | "soft";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition active:scale-[.98]";
  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white hover:opacity-95",
    ghost:
      "bg-transparent hover:bg-white/10 text-foreground dark:text-white border border-transparent",
    outline:
      "border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10",
    soft: "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        base,
        variants[variant],
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

export function Chip({
  selected,
  label,
  onClick,
}: {
  selected?: boolean;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 rounded-full text-xs border transition",
        selected
          ? "bg-indigo-500/90 text-white border-transparent"
          : "bg-white/70 dark:bg-white/5 backdrop-blur border-black/10 dark:border-white/10 hover:bg-white"
      )}
    >
      {label}
    </button>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm outline-none",
        "focus:ring-2 focus:ring-indigo-400/60",
        props.className
      )}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm outline-none",
        "focus:ring-2 focus:ring-indigo-400/60",
        props.className
      )}
    />
  );
}

export function Dialog({
  open,
  onClose,
  children,
}: React.PropsWithChildren<{ open: boolean; onClose: () => void }>) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        className="relative z-10 w-[92vw] max-w-2xl rounded-2xl border border-white/10 bg-white/95 shadow-2xl dark:bg-neutral-900/95"
      >
        <div className="flex max-h-[85vh] flex-col">{children}</div>
      </motion.div>
    </div>
  );
}

export function ConfirmDialog({
  open,
  title = "Вы уверены?",
  description,
  confirmText = "Да",
  cancelText = "Отмена",
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;
  return (
    <Dialog open={open} onClose={onCancel}>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="mt-2 text-sm opacity-80">{description}</p>}
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </div>
      </div>
    </Dialog>
  );
}

export default {
  cn,
  Button,
  Chip,
  Input,
  Textarea,
  Dialog,
  ConfirmDialog,
};
