"use client";

import { useRef, useState, type ReactNode, type PointerEvent } from "react";

export default function PopupFrame({
  title,
  onClose,
  children,
  initialLeft = "24%",
  initialTop = 110,
  width = 440,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  initialLeft?: string | number;
  initialTop?: string | number;
  width?: number;
}) {
  const popupRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);

  // `null` = use the initial CSS (left%, top px). Once the user drags, we lock
  // to absolute pixel coordinates relative to the parent (main area).
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const el = popupRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const parent = el.offsetParent as HTMLElement | null;
    const parentRect = parent?.getBoundingClientRect();
    const origX = rect.left - (parentRect?.left ?? 0);
    const origY = rect.top - (parentRect?.top ?? 0);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX,
      origY,
    };
    setPos({ x: origX, y: origY });
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const el = popupRef.current;
    if (!el) return;
    const parent = el.offsetParent as HTMLElement | null;
    const parentRect = parent?.getBoundingClientRect();
    const popupRect = el.getBoundingClientRect();

    const maxX = (parentRect?.width ?? Infinity) - popupRect.width;
    const maxY = (parentRect?.height ?? Infinity) - popupRect.height;

    let nx = drag.origX + (e.clientX - drag.startX);
    let ny = drag.origY + (e.clientY - drag.startY);
    nx = Math.min(Math.max(nx, 0), Math.max(0, maxX));
    ny = Math.min(Math.max(ny, 0), Math.max(0, maxY));
    setPos({ x: nx, y: ny });
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    (e.currentTarget as Element).releasePointerCapture(e.pointerId);
  };

  const posStyle = pos
    ? { left: pos.x, top: pos.y }
    : { left: initialLeft, top: initialTop };

  return (
    <div
      ref={popupRef}
      className="absolute text-[12px] select-none"
      style={{
        ...posStyle,
        width,
        background: "var(--bg)",
        border: "1px solid var(--fg-dim)",
        boxShadow: "0 0 0 1px rgba(116,251,222,0.05) inset",
      }}
    >
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex items-center justify-between px-4 py-2 text-[11px] tracking-[0.14em] uppercase"
        style={{
          background: "color-mix(in oklab, var(--accent) 18%, var(--bg))",
          borderBottom: "1px solid var(--fg-dim)",
          color: "var(--fg)",
          cursor: "grab",
          touchAction: "none",
        }}
      >
        <span>&gt; {title}</span>
        <button
          type="button"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={onClose}
          className="cursor-pointer hover:text-[var(--accent)]"
        >
          [x]
        </button>
      </div>
      {children}
    </div>
  );
}
