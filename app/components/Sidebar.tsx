"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { PopupKey } from "./popupTypes";

function Brand() {
  return (
    <div className="flex items-center justify-between px-5 pt-6 pb-5">
      <div className="font-pixel text-[26px] leading-none tracking-[0.02em] uppercase text-[var(--fg)] whitespace-nowrap">
        Version Zero
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/globe.svg"
          alt="globe"
          width={22}
          height={22}
          priority
        />
        <Image
          src="/dimensions.svg"
          alt="dimensions"
          width={22}
          height={22}
          priority
        />
      </div>
    </div>
  );
}

function SystemInfo() {
  return (
    <div className="px-5 py-5 text-[12px] leading-[1.6] text-[var(--fg)]">
      <div className="mb-3">{"//"}</div>
      <p>
        Version Zero is a monthly demo night for technical founders, builders,
        and hackers in Sydney.
      </p>
      <p className="mt-4">
        Open to both software or hardware projects. This is a place for you to
        demo your product, talk about your progress, technical challenges, and
        how you are working through them.
      </p>
      <div className="mt-6">
        Join us
        <span
          className="blink inline-block w-[7px] h-[13px] align-[-2px] ml-1"
          style={{ background: "var(--fg)" }}
        />
      </div>
    </div>
  );
}

function ListRow({
  label,
  badge,
  onClick,
  active,
}: {
  label: string;
  badge?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center justify-between px-5 py-3 text-[12px] text-left border-b transition-colors hover:bg-[color:var(--fg)]/5 ${
        active ? "bg-[color:var(--fg)]/5" : ""
      }`}
      style={{ borderColor: "color-mix(in oklab, var(--fg-dim) 55%, transparent)" }}
    >
      <span>&gt; {label}</span>
      <div className="flex items-center gap-2">
        {badge && (
          <span
            className="px-2 py-[2px] text-[10px] tracking-wider uppercase"
            style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
          >
            {badge}
          </span>
        )}
        <span className="text-[var(--fg-muted)]">[+]</span>
      </div>
    </button>
  );
}

export default function Sidebar({
  openKeys,
  onSelect,
}: {
  openKeys: PopupKey[];
  onSelect: (key: PopupKey) => void;
}) {
  const isOpen = (k: PopupKey) => openKeys.includes(k);
  return (
    <aside
      className="h-full flex flex-col shrink-0"
      style={{
        width: "25vw",
        borderRight: "1px solid var(--fg-dim)",
      }}
    >
      <div style={{ borderBottom: "1px solid var(--fg-dim)" }}>
        <Brand />
      </div>

      <SectionHeader label="System Information" code="V0SI" />
      <SystemInfo />

      <SectionHeader label="Demos" code="V0D" />
      <ListRow
        label="session 01"
        onClick={() => onSelect("session-01")}
        active={isOpen("session-01")}
      />
      <ListRow
        label="session 02"
        onClick={() => onSelect("session-02")}
        active={isOpen("session-02")}
      />
      <ListRow
        label="session 03"
        onClick={() => onSelect("session-03")}
        active={isOpen("session-03")}
      />
      <ListRow
        label="session 04"
        onClick={() => onSelect("session-04")}
        active={isOpen("session-04")}
      />

      <SectionHeader label="Events-List" code="V0EL" />
      <div className="px-5 pt-5">
        <div style={{ border: "1px solid var(--fg-dim)" }}>
          <button
            type="button"
            onClick={() => onSelect("event")}
            className={`w-full flex items-center justify-between px-4 py-3 text-[12px] text-left transition-colors hover:bg-[color:var(--fg)]/5 ${
              isOpen("event") ? "bg-[color:var(--fg)]/5" : ""
            }`}
          >
            <span>&gt; version zero 001</span>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)]">[+]</span>
              <span
                className="px-2 py-[2px] text-[10px] tracking-wider uppercase"
                style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
              >
                ACTIVE
              </span>
            </div>
          </button>
          <div className="px-4 py-3 text-[12px] flex items-center justify-between">
            <span>date: april 23rd</span>
            <span>time: 6pm to 9pm</span>
          </div>
        </div>
      </div>

      <div className="mt-auto p-5">
        <div
          className="flex items-center justify-between px-4 py-4 text-[12px]"
          style={{ border: "1px solid var(--fg-dim)" }}
        >
          <span className="tracking-wider text-[var(--fg)]/40">
            &gt; %&quot;$!#/)()&quot;#
          </span>
          <span
            className="px-2 py-[2px] text-[10px] tracking-wider uppercase"
            style={{ background: "var(--warn-soft)", color: "var(--warn)" }}
          >
            IN QUEUE
          </span>
        </div>
      </div>
    </aside>
  );
}
