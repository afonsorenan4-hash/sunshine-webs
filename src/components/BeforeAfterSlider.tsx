import { useCallback, useEffect, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Antes",
  afterAlt = "Depois",
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in e ? e.touches[0]?.clientX ?? 0 : (e as MouseEvent).clientX;
      updateFromClientX(clientX);
    };
    const stop = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [isDragging, updateFromClientX]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-2xl border border-white/10 bg-surface ${className}`}
      style={{ aspectRatio: "4 / 3" }}
      onMouseDown={(e) => {
        setIsDragging(true);
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        const t = e.touches[0];
        if (t) updateFromClientX(t.clientX);
      }}
    >
      {/* After (base) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* Before (clipped overlay) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / position) * 100}%`, maxWidth: "none" }}
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
        Antes
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-brand/90 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-foreground backdrop-blur">
        Depois
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        style={{ left: `${position}%` }}
      >
        <button
          type="button"
          aria-label="Arraste para comparar antes e depois"
          tabIndex={0}
          onKeyDown={onKey}
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsDragging(true);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            setIsDragging(true);
          }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize rounded-full border border-white/20 bg-brand p-3 text-brand-foreground shadow-2xl transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 6 9 12 15 18" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
