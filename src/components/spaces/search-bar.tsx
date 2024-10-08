import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ placeholder }: { placeholder?: string }) {
  return (
    <div className="bg-white flex items-center px-4 border rounded-full">
      <IoIosSearch className="text-zinc-500 relative top-[1px]" />
      <Input
        type="text"
        className="bg-white border-none rounded-none shadow-none pl-1 focus-visible:ring-0"
        placeholder={placeholder || "Search.."}
      />
    </div>
  );
}
