"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useParams } from "next/navigation";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { useAppSelector } from "@/lib/store/hooks";
import { RiExpandUpDownLine } from "react-icons/ri";

export default function SpacesMenu() {
  const { workSpaceId, spaceId }: { workSpaceId: string; spaceId: string } =
    useParams();

  const { spaces } = useAppSelector((state) => state.space);

  const spaceDetails =
    spaces && spaceId ? spaces.find((space) => space._id === spaceId) : null;

  return (
    <>
      {spaceId && (
        <>
          <Link
            href={`/w/${workSpaceId}/spaces`}
            className="pl-4 pr-1 hidden sm:inline-block -ml-4 text-xs">
            <Button variant="ghost">Spaces</Button>
          </Link>
          <span className="hidden sm:inline">{">"}</span>
        </>
      )}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
            asChild>
            <span className="pl-4 pr-1 inline-block -ml-4 text-xs">
              <Button variant="ghost" className="flex gap-2 justify-between">
                <span className="max-w-20 whitespace-nowrap text-ellipsis overflow-hidden">
                  {spaceDetails?.name || "Spaces"}
                </span>
                <RiExpandUpDownLine className="text-lg" />
              </Button>
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            <DropdownMenuArrow />
            <DropdownMenuLabel>
              {spaceId ? "Switch space" : "Select a Space"}
            </DropdownMenuLabel>
            {spaces &&
              spaces.map((space) => (
                <DropdownMenuItem key={space._id}>
                  <Link
                    className="w-full"
                    href={`/w/${workSpaceId}/spaces/${space._id}`}>
                    {space.name}
                  </Link>
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
