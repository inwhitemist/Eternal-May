import React, { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountedRef = { current: true };
    const isVisibleRef = { current: true };
    const onMove = (e: MouseEvent) => {
      if (!ref.current || !isVisibleRef.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      if (!mountedRef.current) return;
      ref.current.style.setProperty("--px", x.toFixed(3));
      ref.current.style.setProperty("--py", y.toFixed(3));
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisibleRef.current = entry.isIntersecting;
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      mountedRef.current = false;
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={
        {
          "--px": "0",
          "--py": "0",
        } as React.CSSProperties
      }
      aria-hidden
    >
      {/* Слои параллакса */}
      <span
        className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #a78bfa88 0%, transparent 70%)",
          transform:
            "translate(-50%, -50%) scale(1.1) translate3d(calc(var(--px,0) * 40px), calc(var(--py,0) * 30px), 0)",
          filter: "blur(40px)",
          opacity: 0.3,
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #f472b688 0%, transparent 70%)",
          transform:
            "translate(-50%, -50%) scale(1) translate3d(calc(var(--px,0) * 80px), calc(var(--py,0) * 60px), 0)",
          filter: "blur(60px)",
          opacity: 0.5,
        }}
      />
      <span
        className="absolute left-1/2 top-2/3 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #60a5fa88 0%, transparent 70%)",
          transform:
            "translate(-50%, -50%) scale(1) translate3d(calc(var(--px,0) * 120px), calc(var(--py,0) * 90px), 0)",
          filter: "blur(80px)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
