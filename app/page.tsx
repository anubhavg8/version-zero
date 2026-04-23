"use client";

import { useState } from "react";
import CornerFrame from "./components/CornerFrame";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import PoweredByCard from "./components/PoweredByCard";

import EventPopup from "./components/EventPopup";
import SessionPopup from "./components/SessionPopup";
import type { PopupKey } from "./components/popupTypes";

const INITIAL_POS: Record<PopupKey, { left: number; top: number }> = {
  event: { left: 120, top: 90 },
  "session-01": { left: 200, top: 160 },
  "session-02": { left: 280, top: 230 },
  "session-03": { left: 360, top: 300 },
  "session-04": { left: 440, top: 120 },
};

export default function Home() {
  const [openPopups, setOpenPopups] = useState<PopupKey[]>(["event"]);

  const toggle = (key: PopupKey) => {
    setOpenPopups((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const close = (key: PopupKey) => {
    setOpenPopups((prev) => prev.filter((k) => k !== key));
  };

  return (
    <div
      className="min-h-screen md:h-screen w-screen relative flex flex-col md:flex-row p-2.5 lg:p-[17px] overflow-y-auto md:overflow-hidden"
      style={{ color: "var(--fg)" }}
    >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/letters.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "sepia(1) hue-rotate(105deg) saturate(4) brightness(0.8)",
              mixBlendMode: "screen",
              opacity: 0.10,
            }}
          />
      <CornerFrame />
      <Sidebar openKeys={openPopups} onSelect={toggle} />
      <main className="hidden md:block flex-1 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/donut_new.png"
          alt=""
          aria-hidden
          className="absolute top-1/2 left-1/2 pointer-events-none select-none"
          style={{
            transform: "translate(-50%, -50%)",
            width: "min(75%, 720px)",
            height: "auto",
            opacity: 1,
            zIndex: 0,
          }}
        /> 
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ isolation: "isolate", zIndex: 0 }}
        >
        </div>
        <MainHeader />
        {openPopups.map((key) => {
          const pos = INITIAL_POS[key];
          if (key === "event") {
            return (
              <EventPopup
                key={key}
                onClose={() => close(key)}
                initialLeft={pos.left}
                initialTop={pos.top}
              />
            );
          }
          const id = key.replace("session-", "");
          return (
            <SessionPopup
              key={key}
              id={id}
              onClose={() => close(key)}
              initialLeft={pos.left}
              initialTop={pos.top}
            />
          );
        })}
        <MainFooter />
      </main>
      <div className="md:hidden">
        <PoweredByCard />
      </div>
    </div>
  );
}
