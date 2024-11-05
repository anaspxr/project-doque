"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useAppSelector } from "@/lib/store/hooks";
import Cookies from "js-cookie";
import WorkspaceCard from "./workspace-card";

export default function GuestWorkSpaces() {
  const [carouselRef] = useEmblaCarousel({ loop: false });
  const { workSpace } = useAppSelector((state) => state.workspace);

  const userId = JSON.parse(Cookies.get("user") || "{}").id;

  const guestWorkSpaces = workSpace.filter((workspace) => {
    const owner = workspace.members.find((member) => member.status === "owner");
    return owner?.user?._id !== userId;
  });

  return (
    <>
      {guestWorkSpaces.length > 0 && (
        <>
          <h2 className="text-1xl sm:text-2xl md:text-2xl text-[#3B3C3D] font-bold ml-5 mt-8 mb-4">
            Guest Workspaces
          </h2>
          <hr />
          <div className="relative">
            <div ref={carouselRef} className="overflow-hidden">
              <div className="flex py-4 ml-4">
                {guestWorkSpaces.map(({ WorkspaceId }, index) => (
                  <WorkspaceCard key={index} workSpaceId={WorkspaceId} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
