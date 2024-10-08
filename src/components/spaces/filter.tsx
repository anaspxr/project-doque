import { IoFilter } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export default function Filter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
        asChild>
        <Button
          size="sm"
          variant="outline"
          className="flex gap-2 hover:border text-xs">
          <IoFilter /> Filters
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <span className="w-full">filter 1</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <span className="w-full">filter 2</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <span className="w-full">filter 3</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
