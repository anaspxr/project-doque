import { FaRegClock } from "react-icons/fa6";

export function PendingClock() {
  return (
    <div>
      <p className="flex items-center gap-2">
        <FaRegClock className="text-zinc-500 hover:opacity-0 transition-opacity duration-300" />
        <span className="text-xs">14 oct</span>
      </p>
    </div>
  );
}
