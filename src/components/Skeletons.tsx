import React from "react";

// Скелетон, визуально повторяющий структуру карточки события
export function SkeletonCard() {
  return (
    <div
      className="group relative flex h-45 w-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-5 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5"
      style={{ contentVisibility: "auto" as any, containIntrinsicSize: "280px 180px" }}
      aria-hidden
    >
      {/* Верхний акцент-бар как у карточек */}
      <div className="absolute inset-x-4 top-0 h-1 rounded-b-full bg-black/10 dark:bg-white/10" />

      <div className="relative z-[1] flex h-full flex-col">
        {/* Заголовок с кружком под иконку */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-black/10 dark:bg-white/10" />
          <div className="h-4 w-2/3 rounded bg-black/10 dark:bg-white/10" />
        </div>

        {/* Дата-чип */}
        <div className="mt-3">
          <div className="h-5 w-24 rounded-full bg-black/10 dark:bg-white/10" />
        </div>

        {/* Короткое описание */}
        <div className="mt-3 space-y-2">
          <div className="h-3 w-11/12 rounded bg-black/10 dark:bg-white/10" />
          <div className="h-3 w-4/5 rounded bg-black/10 dark:bg-white/10" />
        </div>

        {/* Теги */}
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          <div className="h-5 w-16 rounded-full bg-black/10 dark:bg-white/10" />
          <div className="h-5 w-20 rounded-full bg-black/10 dark:bg-white/10" />
          <div className="h-5 w-14 rounded-full bg-black/10 dark:bg-white/10" />
        </div>
      </div>

      {/* Лёгкая пульсация, без сложного анимированного шиммера */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-black/5 to-transparent" />
    </div>
  );
}

export function SkeletonList({ count = 8 }: { count?: number }) {
  return (
    <div className="relative grid gap-5 sm:gap-6 md:grid-cols-2 mx-auto w-full max-w-5xl">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default { SkeletonCard, SkeletonList };
