"use client";

import { useSyncExternalStore } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function formatDate(d: Date) {
  const month = d.toLocaleString("en-US", { month: "long" }).toUpperCase();
  return `${month} ${d.getDate()}, ${d.getFullYear()}`;
}

function formatTime(d: Date) {
  let h = d.getHours();
  const m = pad(d.getMinutes());
  const s = pad(d.getSeconds());
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  const tz =
    new Intl.DateTimeFormat("en-US", { timeZoneName: "short" })
      .formatToParts(d)
      .find((p) => p.type === "timeZoneName")?.value ?? "";
  return `${pad(h)}:${m}:${s} ${ampm}${tz ? ` ${tz}` : ""}`;
}

// Module-level cache so getSnapshot returns a stable reference unless the
// tick actually changes. Without this, React complains about infinite loops.
let cachedTick = 0;
let started = false;
const listeners = new Set<() => void>();

function startTicker() {
  if (started) return;
  started = true;
  cachedTick = Date.now();
  setInterval(() => {
    cachedTick = Date.now();
    listeners.forEach((l) => l());
  }, 1000);
}

function subscribe(cb: () => void) {
  startTicker();
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot() {
  return cachedTick;
}

function getServerSnapshot() {
  return 0;
}

export function StatusInfo({ className = "" }: { className?: string }) {
  const ts = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const now = ts === 0 ? null : new Date(ts);
  const dateStr = now ? formatDate(now) : "APRIL 15, 2026";
  const timeStr = now ? formatTime(now) : "08:40:12 PM GMT";

  return (
    <div
      className={`flex items-start justify-between text-[11px] tracking-[0.14em] uppercase ${className}`}
      style={{ color: "#74FBDE" }}
    >
      <div className="text-[10px] tracking-normal leading-[120%]">
        <div>Status: Active</div>
        <div>Version: 0.1.2-Beta</div>
      </div>
      <div
        className="text-right text-[10px] tracking-normal leading-[120%]"
        suppressHydrationWarning
      >
        <div>{dateStr}</div>
        <div>{timeStr}</div>
      </div>
    </div>
  );
}

export default function MainHeader() {
  return <StatusInfo className="absolute top-5 left-5 right-5 z-[60]" />;
}
