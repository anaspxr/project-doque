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
import { spaces } from "@/consts/spaces";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

export default function SpacesMenu() {
  const { workSpaceId, spaceId } = useParams();
  const spaceDetails = spaces[Number(spaceId)];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
        asChild>
        <span className="pl-4 pr-1 inline-block -ml-4 text-xs">
          <Button size="sm" variant="ghost">
            {spaceDetails.name}
          </Button>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuArrow />
        <DropdownMenuLabel>Switch space</DropdownMenuLabel>
        {spaces.map((space, i) => (
          <DropdownMenuItem key={space.name}>
            <Link className="w-full" href={`/w/${workSpaceId}/${i}`}>
              {space.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
