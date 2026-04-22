import CornerPlus from "./CornerPlus";

export default function SectionHeader({
  label,
  code,
}: {
  label: string;
  code: string;
}) {
  return (
    <div
      className="relative px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase bg-[#74FBDE14]"
      style={{
        color: "var(--accent)",
        borderTop: "0.5px solid var(--fg-dim)",
        borderBottom: "0.5px solid var(--fg-dim)",
      }}
    >
       <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(116, 251, 222, 0.15)",
          filter: "blur(10px)",
        }}
      /> 
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/pixels.svg)",
          backgroundRepeat: "repeat",
          opacity: 0.10,
        }}
      />
      <div className="relative flex items-center justify-between">
        <span className="text-[10px] leading-[150%] tracking-normal">&gt; {label}</span>
        <span className="text-[10px] leading-[150%] tracking-normal">[{code}]</span>
      </div>
      <CornerPlus className="-top-0.75 -left-0.75" />
      <CornerPlus className="-top-0.75 -right-0.75" />
      <CornerPlus className="-bottom-0.75 -left-0.75" />
      <CornerPlus className="-bottom-0.75 -right-0.75" />
    </div>
  );
}

