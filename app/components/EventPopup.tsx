import PopupFrame from "./PopupFrame";

function FaqRow({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3"
      style={{
        border: "1px solid var(--fg-dim)",
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
          <div className="leading-[1.7]">
            <div>date: april 23rd</div>
            <div>time: 6pm to 9pm</div>
          </div>
          <span
            className="px-2 py-[2px] text-[10px] tracking-wider uppercase"
            style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
          >
            ACTIVE
          </span>
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col gap-2">
        <FaqRow label="faq 01" />
        <FaqRow label="faq 02" />
        <FaqRow label="faq 03" />
        <FaqRow label="faq 04" />
      </div>
    </PopupFrame>
  );
}
