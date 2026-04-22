import PopupFrame from "./PopupFrame";

function FaqRow({ label, isLast }: { label: string; isLast?: boolean }) {
  return (
    <div
      className="flex items-center justify-between px-5 py-2.5"
      style={{
        borderLeft: "0.5px solid var(--fg-dim)",
        borderRight: "0.5px solid var(--fg-dim)",
        borderTop: "0.5px solid var(--fg-dim)",
        borderBottom: isLast ? "0.5px solid var(--fg-dim)" : undefined,
        background: "var(--bg)",
      }}
    >
      <span>{label}</span>
      <span className="text-[var(--fg-muted)]">[+]</span>
    </div>
  );
}

export default function EventPopup({
  onClose,
  initialLeft,
  initialTop,
}: {
  onClose: () => void;
  initialLeft?: number | string;
  initialTop?: number | string;
}) {
  return (
    <PopupFrame
      title="Version Zero 001"
      onClose={onClose}
      initialLeft={initialLeft}
      initialTop={initialTop}
    >
      <div className="px-5 py-5">
        <div className="flex items-start justify-between">
          <div className="leading-[120%] text-[10px] tracking-normal">
            <div>date: april 23rd</div>
            <div>time: 6pm to 9pm</div>
          </div>
          <span
            className="px-2 py-[3px] text-[10px] tracking-normal uppercase"
            style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
          >
            ACTIVE
          </span>
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col">
        <FaqRow label="faq 01" />
        <FaqRow label="faq 02" />
        <FaqRow label="faq 03" />
        <FaqRow label="faq 04" isLast />
      </div>
    </PopupFrame>
  );
}
