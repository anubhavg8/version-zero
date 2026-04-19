// Pre-computed at module load so server + client serialize identical strings
// (raw floats can hash to different toString() results between envs and cause
// a React hydration mismatch on opacity/cx/cy/r attributes).
const SPHERE_CX = 300;
const SPHERE_CY = 300;
const SPHERE_R = 260;

function buildDots() {
  const dots: { x: string; y: string; o: string; size: string }[] = [];
  const latSteps = 42;
  const lonSteps = 90;
  const fmt = (n: number, p: number) => n.toFixed(p);
  for (let i = 0; i < latSteps; i++) {
    const lat = -Math.PI / 2 + (i / (latSteps - 1)) * Math.PI;
    const ringR = Math.cos(lat) * SPHERE_R;
    const y = SPHERE_CY + Math.sin(lat) * SPHERE_R;
    const lonCount = Math.max(6, Math.round(lonSteps * Math.cos(lat)));
    for (let j = 0; j < lonCount; j++) {
      const lon = (j / lonCount) * Math.PI * 2;
      const x = SPHERE_CX + Math.cos(lon) * ringR;
      const z = Math.sin(lon) * ringR;
      const depth = (z + SPHERE_R) / (2 * SPHERE_R);
      const o = Math.pow(depth, 2.2) * 0.95 + 0.05;
      const size = 0.9 + depth * 0.9;
      dots.push({
        x: fmt(x, 2),
        y: fmt(y, 2),
        o: fmt(o, 3),
        size: fmt(size, 2),
      });
    }
  }
  return dots;
}

const DOTS = buildDots();

export default function DottedSphere() {
  return (
    <svg
      viewBox="0 0 600 600"
      width={720}
      height={720}
      className="absolute pointer-events-none select-none"
      style={{ right: -140, bottom: -80 }}
    >
      <defs>
        <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(116,251,222,0.08)" />
        </radialGradient>
      </defs>
      <circle
        cx={SPHERE_CX}
        cy={SPHERE_CY}
        r={SPHERE_R + 40}
        fill="url(#sphereGlow)"
      />
      {DOTS.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.size}
          fill="var(--accent)"
          opacity={d.o}
        />
      ))}
    </svg>
  );
}
