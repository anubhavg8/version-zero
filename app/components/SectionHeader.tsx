export default function SectionHeader({
  label,
  code,
}: {
  label: string;
  code: string;
}) {
  return (
    <div
      className="relative overflow-hidden px-4 py-2 text-[11px] tracking-[0.18em] uppercase"
      style={{
        color: "var(--accent)",
        backgroundColor: "rgba(116, 251, 222, 0.15)",
        borderTop: "1px solid var(--fg-dim)",
        borderBottom: "1px solid var(--fg-dim)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/pixels.svg)",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "top left",
          opacity: 0.2,
        }}
      />
      <div className="relative flex items-center justify-between">
        <span>&gt; {label}</span>
        <span>[{code}]</span>
      </div>
    </div>
  );
}
