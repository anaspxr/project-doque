"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useAppSelector } from "@/lib/store/hooks";
import Cookies from "js-cookie";
import HandleLoading from "../ui/handle-loading";
import { Skeleton } from "../ui/skeleton";
import WorkspaceCard from "./workspace-card";

const loadingCards = [1, 2, 3];

export default function MyWorkSpace() {
  const [carouselRef] = useEmblaCarousel({ loop: false });
  const { workSpace, loading, error } = useAppSelector(
    (state) => state.workspace
  );

  const cookie = Cookies.get("user") || "{}";
  const userId = JSON.parse(cookie).id;

  const usersWorkSpaces = workSpace.filter((workspace) => {
    const owner = workspace.members.find((member) => member.status === "owner");
    return owner?.user?._id === userId;
  });

  return (
    <div className="relative min-h-40">
      <div ref={carouselRef} className="overflow-hidden">
        <div className="flex py-4 ml-4">
          <HandleLoading
            loading={loading}
            error={error}
            loadingComponent={loadingCards.map((i) => (
              <Skeleton key={i} className="w-[250px] h-36 rounded-lg mr-4" />
            ))}>
            <>
              {usersWorkSpaces.map(({ WorkspaceId }, index) => (
                <WorkspaceCard key={index} workSpaceId={WorkspaceId} />
              ))}
              {!loading && usersWorkSpaces.length < 2 && (
                <div className="w-[250px] h-36 rounded-lg bg-white dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 flex justify-center items-center hover:scale-105 hover:bg-purple-100">
                  <p>Create workSpace +</p>
                </div>
              )}
            </>
          </HandleLoading>
        </div>
      </div>
    </div>
  );
}
