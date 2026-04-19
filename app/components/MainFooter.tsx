import PoweredByCard from "./PoweredByCard";

export default function MainFooter() {
  return (
    <>
      <div
        className="absolute bottom-5 left-6 text-[11px] tracking-[0.14em] uppercase leading-[1.7] z-[60]"
        style={{ color: "#74FBDE" }}
      >
        <div>Press [ESC] to enter setup</div>
        <div>Press [F12] for network boot</div>
      </div>
      <div className="absolute bottom-5 right-6 z-[60]">
        <PoweredByCard />
      </div>
    </>
  );
}
