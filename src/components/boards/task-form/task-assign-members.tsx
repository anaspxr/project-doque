"use client";

import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axiosInstance from "@/utils/axios";
import { useParams } from "next/navigation";
import { axiosErrorCatch } from "@/utils/axiosErrorCatch";

type Member = {
  firstName: string;
  _id: string;
  lastName: string;
  email: string;
  image: string;
};

export default function AssignTaskToMembers({
  existingMembers,
  assignMember,
  removeMember,
}: {
  existingMembers?: string[];
  assignMember: (member: string) => void;
  removeMember: (member: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { workSpaceId } = useParams();

  useEffect(() => {
    setLoading(true);
    async function fetchMembers() {
      try {
        const { data } = await axiosInstance.get(
          `/workspace/${workSpaceId}/invited-members`
        );
        setMembers(data.data.members);
      } catch (error) {
        setError(axiosErrorCatch(error));
      } finally {
        setLoading(false);
      }
    }
    fetchMembers();
  }, [workSpaceId]);

  return (
    <div className="flex flex-col gap-2 min-h-28">
      <div className="flex gap-2 items-center">
        <p>Members</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="flex gap-2 items-center"
            >
              Add members
              <CiCirclePlus size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command className="task-details-section">
              <CommandInput placeholder="Search member..." className="h-9" />
              <CommandList>
                <CommandEmpty>No members found..</CommandEmpty>
                <CommandGroup className="max-h-60 overflow-y-auto">
                  {loading && <CommandEmpty>Loading...</CommandEmpty>}
                  {error && (
                    <CommandEmpty className="text-red-600">
                      {error}
                    </CommandEmpty>
                  )}
                  {members.map((member) => {
                    const isAssigned = existingMembers?.includes(member._id);
                    return (
                      <CommandItem
                        value={member.firstName + " " + member.lastName}
                        key={member._id}
                        className="flex justify-between"
                      >
                        <div className="flex flex-col items-start text-ellipsis whitespace-nowrap overflow-hidden w-full">
                          <span>
                            {member.firstName} {member.lastName}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          className="flex gap-2 flex-shrink-0"
                          title="Add member"
                          onClick={() => {
                            if (isAssigned) {
                              removeMember(member._id);
                              return;
                            }
                            assignMember(member._id);
                          }}
                        >
                          {isAssigned ? (
                            "Remove"
                          ) : (
                            <>
                              Add <CiCirclePlus size={20} />
                            </>
                          )}
                        </Button>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-2 flex-wrap ">
        {existingMembers?.length ? (
          <>
            {existingMembers.map((member) => (
              <div
                key={member}
                className="flex flex-col justify-center items-center"
              >
                <Avatar className="border-2 border-white w-12 h-12">
                  <AvatarImage
                    src={"/images/avatarFallback.png"}
                    alt={"Avatar"}
                  />
                  <AvatarFallback />
                </Avatar>
                <p className="text-xs text-zinc-700 min-h-2 dark:text-gray-300 mt-1">
                  {members.find((m) => member === m._id)?.firstName}
                </p>
              </div>
            ))}
          </>
        ) : (
          <p className="text-xs">No members assigned..</p>
        )}
      </div>
    </div>
  );
}
