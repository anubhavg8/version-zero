function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CHARS = "01$#%/\\*{}[]<>()=+-_.,;:!?";

export default function MatrixBackdrop() {
  const rnd = mulberry32(42);
  const rows = 48;
  const cols = 120;
  const grid: string[] = [];
  for (let r = 0; r < rows; r++) {
    let row = "";
    for (let c = 0; c < cols; c++) {
      row += rnd() > 0.45 ? CHARS[Math.floor(rnd() * CHARS.length)] : " ";
    }
    grid.push(row);
  }
  return (
    <pre
      aria-hidden
      className="absolute inset-0 pointer-events-none select-none text-[10px] leading-[1.2] whitespace-pre overflow-hidden"
      style={{
        color: "var(--accent)",
        opacity: 0.08,
        padding: "40px 20px 40px 20px",
        letterSpacing: "0.05em",
      }}
    >
      {grid.join("\n")}
    </pre>
  );
}
