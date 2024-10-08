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

import { spaces } from "@/consts/spaces";
import { useParams } from "next/navigation";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

export default function BoardsMenu() {
  const { workSpaceId, spaceId, boardId } = useParams();
  const boards = spaces[Number(spaceId)]?.contents.boards || [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
        asChild>
        <Button className="px-1 mx-1" variant="ghost">
          {boardId ? boards[Number(boardId)]?.name || "" : "boards"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuArrow />
        <DropdownMenuLabel>Switch Board</DropdownMenuLabel>
        {boards.map((board, i) => (
          <DropdownMenuItem key={board.name}>
            <Link href={`/w/${workSpaceId}/${spaceId}/${i}`}>{board.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
