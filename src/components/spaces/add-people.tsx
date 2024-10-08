import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const members = Array.from({ length: 7 }, (_, i) => i);
export default function AddPeople() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full">
          Add People
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Add members to the space</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {members.map((member) => (
          <DropdownMenuItem key={member} className="flex gap-4 hover:bg-white">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="flex justify-between gap-4 items-center">
              <h4 className="text-sm font-semibold">Name</h4>
              <Button variant="outline">Add</Button>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
