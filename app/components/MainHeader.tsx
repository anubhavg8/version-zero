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
  return `${pad(h)}:${m}:${s} ${ampm}`;
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

export default function MainHeader() {
  const ts = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const now = ts === 0 ? null : new Date(ts);
  const dateStr = now ? formatDate(now) : "APRIL 15, 2026";
  const timeStr = now ? formatTime(now) : "08:40:12 PM";

  return (
    <div
      className="absolute top-5 left-6 right-6 flex items-start justify-between text-[11px] tracking-[0.14em] uppercase z-[60]"
      style={{ color: "#74FBDE" }}
    >
      <div className="leading-[1.55]">
        <div>Status: Active</div>
        <div>Version: 0.1.2-Beta</div>
      </div>
      <div className="text-right leading-[1.55]" suppressHydrationWarning>
        <div>{dateStr}</div>
        <div>{timeStr}</div>
      </div>
    </div>
  );
}
