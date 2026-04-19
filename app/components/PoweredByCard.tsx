import Image from "next/image";

const pixelBg = {
  backgroundImage: "url(/pixels.svg)",
  backgroundSize: "auto",
  backgroundRepeat: "repeat",
  backgroundPosition: "top left",
};

export default function PoweredByCard() {
  return (
    <div
      className="flex relative"
      style={{
        border: "1px solid var(--fg-dim)",
        width: 340,
        background: "var(--bg)",
      }}
    >
      {/* Pixel texture overlay behind the content (matches section-header bars) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ ...pixelBg, opacity: 0.12 }}
      />
      <div
        className="w-[96px] relative"
        style={{
          borderRight: "1px solid var(--fg-dim)",
          background: "var(--bg-elev)",
        }}
      >
        <Image
          src="/shader_image_placeholder.png"
          alt="Blackbird"
          fill
          sizes="96px"
          style={{ objectFit: "cover", imageRendering: "pixelated" }}
        />
      </div>
      <div className="flex-1 relative">
        <div
          className="px-3 py-[6px] text-[10px] tracking-[0.16em] uppercase"
          style={{
            color: "var(--accent)",
            borderBottom: "1px solid var(--fg-dim)",
          }}
        >
          &gt; Powered by:
        </div>
        <div
          className="px-3 py-3 flex items-center justify-between"
          style={{ borderBottom: "1px solid var(--fg-dim)" }}
        >
          <Image
            src="/blackbird-logo.svg"
            alt="Blackbird"
            width={135}
            height={15}
            priority
          />
          <span className="text-[11px] text-[var(--accent)]">[+]</span>
        </div>
        <div className="px-3 py-3 flex items-center justify-between">
          <Image
            src="/nextgen-logo.svg"
            alt="NextGen Ventures"
            width={145}
            height={16}
          />
          <span className="text-[11px] text-[var(--accent)]">[+]</span>
        </div>
      </div>
    </div>
  );
}
