"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import CornerPlus from "./CornerPlus";
import { StatusInfo } from "./MainHeader";
import { PopupKey } from "./popupTypes";

function Brand() {
  return (
    <div className="flex items-center justify-between px-5 pt-6 pb-6">
      <div className="font-pixel text-[24px] leading-[80%] tracking-normal uppercase text-[var(--fg)] whitespace-nowrap">
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
      <div className="mb-4 text-[10px] leading-[120%] tracking-normal">{"//"}</div>
      <p className="text-[14px] leading-[120%] tracking-normal">
        Version Zero is a monthly demo night for technical founders, builders,
        and hackers in Sydney.
      </p>
      <p className="mt-4 text-[14px] leading-[120%] tracking-normal">
        Open to both software or hardware projects. This is a place for you to
        demo your product, talk about your progress, technical challenges, and
        how you are working through them.
      </p>
      <div className="mt-4 text-[10px] leading-[120%] tracking-normal">
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
      className={`w-full flex items-center justify-between px-5 py-2.5 text-[13px] leading-[150%] text-left border-b-[0.5px] last:border-b-0 transition-colors hover:bg-[color:var(--fg)]/5 ${
        active ? "bg-[color:var(--fg)]/5" : ""
      }`}
      style={{ borderColor: "color-mix(in oklab, var(--fg-dim) 55%, transparent)" }}
    >
      <span>&gt; {label}</span>
      <div className="flex items-center gap-1">
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
      className="relative w-full md:h-full md:w-[28vw] flex flex-col shrink-0"
      style={{
        border: "0.5px solid var(--fg-dim)",
        background: "var(--bg)",
      }}
    >
      <CornerPlus className="-top-0.75 -right-0.75 hidden md:block" />
      <CornerPlus className="-bottom-0.75 -right-0.75 hidden md:block" />
      <div >
        <Brand />
      </div>
      <StatusInfo className="md:hidden px-5 pb-5" />

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
      <div
        className="flex-1 flex flex-col justify-between px-5 py-5 border-b-[0.5px] gap-6"
        style={{ borderColor: "var(--fg-dim)" }}
      >
        <button
          type="button"
          onClick={() => onSelect("event")}
          className="w-full flex items-center justify-between text-[13px] leading-[150%] text-left transition-colors hover:bg-[color:var(--fg)]/5"
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
        <div className="pl-4 text-[13px] leading-[150%] flex items-center justify-between">
          <span>date: april 23rd</span>
          <span>time: 6pm to 9pm</span>
        </div>
      </div>

      <div className="mt-auto p-5">
        <div
          className="flex items-center justify-between text-[14px] leading-[150%]"
        >
          <span className="tracking-wider text-[var(--fg)]/40">
            &gt; %&quot;$!#/)()&quot;#
          </span>
          <span
            className="px-2 py-[3px] text-[10px] leading-[150%] uppercase"
            style={{ background: "var(--warn-soft)", color: "var(--warn)" }}
          >
            IN QUEUE
          </span>
        </div>
      </div>
    </aside>
  );
}
