"use client";

import { spaces } from "@/consts/spaces";
import { useParams } from "next/navigation";
import React from "react";

export function CreatedDate() {
  const { spaceId, boardId } = useParams();
  const currentBoard =
    spaces[Number(spaceId)]?.contents.boards[Number(boardId)];
  return (
    <>
      {currentBoard && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs text-zinc-600">Created At</p>
          <p className="text-sm">{currentBoard?.createdAt}</p>
        </div>
      )}
    </>
  );
}
