const STROKE = "var(--fg-dim)";

function Plus({ pos }: { pos: string }) {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${pos} pointer-events-none`}
    >
      <path d="M0 2.99219H6" stroke="#74FBDE" strokeWidth="0.5" />
      <path d="M2.99219 6L2.99219 -7.4273e-08" stroke="#74FBDE" strokeWidth="0.5" />
    </svg>
  );
}

export default function CornerFrame() {
  return (
    <>
      <div
        aria-hidden
        className="absolute left-0 right-0 top-2.5 lg:top-[17px] h-[0.5px] pointer-events-none"
        style={{ background: "#74FBDE66" }}
      />
      <div
        aria-hidden
        className="absolute left-0 right-0 bottom-2.5 lg:bottom-[17px] h-[0.5px] pointer-events-none"
        style={{ background: "#74FBDE66" }}
      />
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-2.5 lg:left-[17px] w-[0.5px] pointer-events-none"
        style={{ background: "#74FBDE66" }}
      />
      <div
        aria-hidden
        className="absolute top-0 bottom-0 right-2.5 lg:right-[17px] w-[0.5px] pointer-events-none"
        style={{ background: "#74FBDE66" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <Plus pos="top-2.5 left-2.5 md:top-[17px] md:left-[17px] -translate-x-1/2 -translate-y-1/2" />
        <Plus pos="top-2.5 right-2.5 md:top-[17px] md:right-[17px] translate-x-1/2 -translate-y-1/2" />
        <Plus pos="bottom-2.5 left-2.5 md:bottom-[17px] md:left-[17px] -translate-x-1/2 translate-y-1/2" />
        <Plus pos="bottom-2.5 right-2.5 md:bottom-[17px] md:right-[17px] translate-x-1/2 translate-y-1/2" />
      </div>
    </>
  );
}
