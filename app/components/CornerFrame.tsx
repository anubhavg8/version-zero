const STROKE = "var(--fg-dim)";

function Plus({ pos }: { pos: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className={`absolute ${pos} pointer-events-none`}
    >
      <path d="M5 0 V10 M0 5 H10" stroke={STROKE} strokeWidth="1" />
    </svg>
  );
}

export default function CornerFrame() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-2 pointer-events-none"
        style={{ border: `1px solid ${STROKE}` }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <Plus pos="top-2 left-2 -translate-x-1/2 -translate-y-1/2" />
        <Plus pos="top-2 right-2 translate-x-1/2 -translate-y-1/2" />
        <Plus pos="bottom-2 left-2 -translate-x-1/2 translate-y-1/2" />
        <Plus pos="bottom-2 right-2 translate-x-1/2 translate-y-1/2" />
      </div>
    </>
  );
}
