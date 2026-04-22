export default function CornerPlus({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute pointer-events-none ${className}`}
    >
      <path d="M0 2.99219H6" stroke="#74FBDE" strokeWidth="0.5" />
      <path d="M2.99219 6L2.99219 0" stroke="#74FBDE" strokeWidth="0.5" />
    </svg>
  );
}
