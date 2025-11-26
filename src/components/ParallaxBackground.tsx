import React, { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountedRef = { current: true };
    const isVisibleRef = { current: true };
    let bounds = ref.current?.getBoundingClientRect() ?? {
      left: 0,
      top: 0,
      width: 1,
      height: 1,
    };
    let boundsRaf = 0;
    const measureBounds = () => {
      boundsRaf = 0;
      if (!ref.current) return;
      bounds = ref.current.getBoundingClientRect();
    };
    const scheduleBoundsMeasure = () => {
      if (boundsRaf) return;
      boundsRaf = requestAnimationFrame(measureBounds);
    };

    let pointerRaf = 0;
    const pointer = { x: 0, y: 0 };
    const applyPointer = () => {
      pointerRaf = 0;
      if (!ref.current || !isVisibleRef.current || !mountedRef.current) return;
      const width = bounds.width || 1;
      const height = bounds.height || 1;
      const x = ((pointer.x - bounds.left) / width - 0.5) * 2;
      const y = ((pointer.y - bounds.top) / height - 0.5) * 2;
      ref.current.style.setProperty("--px", x.toFixed(3));
      ref.current.style.setProperty("--py", y.toFixed(3));
    };
    const schedulePointerApply = () => {
      if (pointerRaf) return;
      pointerRaf = requestAnimationFrame(applyPointer);
    };
    const onMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      schedulePointerApply();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisibleRef.current = entry.isIntersecting;
      });
    });

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(scheduleBoundsMeasure)
        : null;
    if (resizeObserver && node) {
      resizeObserver.observe(node);
    }
    window.addEventListener("scroll", scheduleBoundsMeasure, true);
    window.addEventListener("resize", scheduleBoundsMeasure);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      mountedRef.current = false;
      observer.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", scheduleBoundsMeasure, true);
      window.removeEventListener("resize", scheduleBoundsMeasure);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(pointerRaf);
      cancelAnimationFrame(boundsRaf);
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
