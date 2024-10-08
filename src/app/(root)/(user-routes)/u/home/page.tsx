import React from "react";
import { cards, guestCards, recentlyVisitedCards } from "@/consts/user-home-cards"
import Carousel from "@/components/user-home/carousel";

export default function Workspace() {
  return (
    <div className="w-full p-4 flex-grow bg-[#EDF1F4] overflow-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
      <h1 className="text-3xl text-[#3B3C3D] font-bold ml-5 mb-4">My Workspaces</h1>
      <Carousel cards={cards} />

      <h2 className="text-3xl text-[#3B3C3D] font-bold ml-5 mt-8 mb-4">Guest&apos;s Workspace</h2>
      <Carousel cards={guestCards} />

      <h2 className="text-3xl text-[#3B3C3D] font-bold ml-5 mt-8 mb-4">Recently Visited</h2>
      <Carousel cards={recentlyVisitedCards} />
    </div>
  );
};