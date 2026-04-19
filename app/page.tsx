"use client";

import { useState } from "react";
import CornerFrame from "./components/CornerFrame";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import MatrixBackdrop from "./components/MatrixBackdrop";
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
      className="h-screen w-screen overflow-hidden relative flex"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      <CornerFrame />
      <Sidebar openKeys={openPopups} onSelect={toggle} />
      <main className="flex-1 relative overflow-hidden">
        <MatrixBackdrop />
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
    </div>
  );
}
