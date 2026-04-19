import PopupFrame from "./PopupFrame";

export default function SessionPopup({
  id,
  onClose,
  initialLeft,
  initialTop,
}: {
  id: string;
  onClose: () => void;
  initialLeft?: number | string;
  initialTop?: number | string;
}) {
  return (
    <PopupFrame
      title={`Session ${id}`}
      onClose={onClose}
      initialLeft={initialLeft}
      initialTop={initialTop}
    >
      <div className="px-5 py-5 leading-[1.7]">
        <p>&gt; Lorem ipsum senectus id eget varius sed urna velit mauris proin neque.</p>
        <p className="mt-4">
          &gt; Lorem ipsum senectus id eget varius sed urna velit mauris proin neque.
        </p>
      </div>
      <div className="px-5 pb-6 flex gap-4">
        <div
          className="flex-1 aspect-[4/3]"
          style={{ border: "1px solid var(--fg-dim)" }}
        />
        <div
          className="flex-1 aspect-[4/3]"
          style={{ border: "1px solid var(--fg-dim)" }}
        />
      </div>
    </PopupFrame>
  );
}
