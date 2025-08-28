import React from "react";

export function SkeletonCard() {
  return (
    <div
      className="relative h-45 w-full rounded-3xl border border-black/5 bg-white/60 dark:border-white/10 dark:bg-white/5 overflow-hidden"
      style={{ contentVisibility: "auto" as any, containIntrinsicSize: "280px 180px" }}
      aria-hidden
    >
      <div className="p-5">
        <div className="h-4 w-1/3 rounded bg-black/10 dark:bg-white/10 mb-3" />
        <div className="h-3 w-1/4 rounded bg-black/10 dark:bg-white/10 mb-4" />
        <div className="h-3 w-full rounded bg-black/10 dark:bg-white/10 mb-2" />
        <div className="h-3 w-4/5 rounded bg-black/10 dark:bg-white/10" />
      </div>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-black/5 to-transparent" />
    </div>
  );
}

export function SkeletonList({ count = 8 }: { count?: number }) {
  return (
    <div className="relative grid gap-5 sm:gap-6 md:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default { SkeletonCard, SkeletonList };

