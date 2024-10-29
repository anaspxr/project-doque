"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { List } from "lucide-react";
import { ViewBoardsIcon } from "@heroicons/react/solid";

export default function ListBoardView() {
  const { workSpaceId, spaceId }: { workSpaceId: string; spaceId: string } =
    useParams();

  const pathname = usePathname();
  const isList = pathname.split("/").filter(Boolean).pop() === "1";

  return (
    <div className="flex text-sm items-center border shadow-sm rounded-md overflow-hidden flex-shrink-0">
      <Link href={`/w/${workSpaceId}/spaces/${spaceId}`} className="h-full">
        <button
          className={clsx(
            "w-8 sm:w-24 h-full p-0 flex items-center justify-center gap-1 dark:hover:bg-gray-800",
            {
              "bg-gray-600 text-zinc-100": !isList,
              "hover:bg-zinc-200": isList,
            }
          )}>
          <ViewBoardsIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Boards</span>
        </button>
      </Link>
      <Link href={`/w/${workSpaceId}/spaces/${spaceId}/1`} className="h-full">
        <button
          className={clsx(
            "w-8 sm:w-24 h-full p-0 flex gap-1 justify-center items-center dark:hover:bg-gray-800",
            {
              "bg-gray-600 text-zinc-100": isList,
              "hover:bg-zinc-200 ": !isList,
            }
          )}>
          <List />
          <span className="hidden sm:inline">List</span>
        </button>
      </Link>
    </div>
  );
}
