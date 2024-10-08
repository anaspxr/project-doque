import React from "react";
import Carousel from "@/components/user-home/carousel";
import { cards, guestCards, recentlyVisitedCards } from "@/consts/user-home-cards";

export default function Templates() {
    return (
        <div className="w-full p-4 flex-grow bg-[#EDF1F4] overflow-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
            <h1 className="text-3xl text-[#3B3C3D] font-bold ml-5 mb-4">Templates</h1>
            <Carousel cards={cards} />

            <h2 className="text-3xl text-[#3B3C3D] font-bold ml-5 mt-8 mb-4">Used Templates</h2>
            <Carousel cards={guestCards} />

            <h2 className="text-3xl text-[#3B3C3D] font-bold ml-5 mt-8 mb-4">Category</h2>
            <Carousel cards={recentlyVisitedCards} />
        </div>
    );
}
