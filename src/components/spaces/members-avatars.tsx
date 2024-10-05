import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const membersLength = 6;
const members = Array.from({ length: membersLength }, (_, i) => i);
const maxVisibleMembers = membersLength > 4 ? 3 : membersLength; //? if there are more than 4 members, show only 3. Otherwise, show all members.

export default function MembersAvatars() {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost" className="flex -space-x-4 cursor-pointer">
            {members.slice(0, maxVisibleMembers).map((member) => (
              <Avatar key={member} className="border-2 w-8 h-8 border-white">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback />
              </Avatar>
            ))}
            {members.length > maxVisibleMembers && (
              <div className="flex items-center justify-center w-8 h-8 rounded-full z-10 bg-gray-300 text-zinc-800 text-lg font-semibold">
                +{members.length - maxVisibleMembers}
              </div>
            )}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent
          align="end"
          className="space-y-2 relative top-1 left-4">
          {members.map((member) => (
            <div key={member} className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-semibold">Name</h4>
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          ))}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
