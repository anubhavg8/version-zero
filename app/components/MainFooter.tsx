import PoweredByCard from "./PoweredByCard";

export default function MainFooter() {
  return (
    <>
      <div
        className="absolute bottom-5 left-5 text-[10px] tracking-normal uppercase leading-[120%] z-[60]"
        style={{ color: "#74FBDE" }}
      >
        <div>Press [ESC] to enter setup</div>
        <div>Press [F12] for network boot</div>
      </div>
      <div className="absolute bottom-0 right-0 z-[60]">
        <PoweredByCard />
      </div>
    </>
  );
}
