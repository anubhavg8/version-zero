import Image from "next/image";
import CornerPlus from "./CornerPlus";

export default function PoweredByCard() {
  return (
    <div
      className="flex relative overflow-visible w-full md:w-[340px]"
      style={{
        border: "0.5px solid var(--fg-dim)",
        background: "var(--bg)",
      }}
    >
      <div
        className="w-[96px] relative"
      >
        <Image
          src="/shader_image_placeholder.png"
          alt="Blackbird"
          fill
          sizes="96px"
          style={{ objectFit: "cover", imageRendering: "pixelated" }}
        />
        <CornerPlus className="-top-0.75 -left-0.75" />
        <CornerPlus className="-top-0.75 -right-0.75" />
        <CornerPlus className="-bottom-0.75 -left-0.75" />
        <CornerPlus className="-bottom-0.75 -right-0.75" />
      </div>
      <div className="flex-1 relative">
        <CornerPlus className="-top-0.75 -right-0.75" />
        <div
          className="relative px-5 py-3 text-[10px] tracking-[0.16em] uppercase"
          style={{
            color: "var(--accent)",
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
          <span className="relative text-[10px] leading-[120%] tracking-normal">&gt; Powered by:</span>
        </div>
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ borderBottom: "0.5px solid var(--fg-dim)" }}
        >
          <Image
            src="/blackbird-logo.svg"
            alt="Blackbird"
            width={90}
            height={10}
            priority
          />
          <span className="text-[11px] text-[var(--accent)]">[+]</span>
        </div>
        <div className="px-5 py-3 flex items-center justify-between">
          <Image
            src="/nextgen-logo.svg"
            alt="NextGen Ventures"
            width={94}
            height={10}
          />
          <span className="text-[11px] text-[var(--accent)]">[+]</span>
        </div>
      </div>
    </div>
  );
}
