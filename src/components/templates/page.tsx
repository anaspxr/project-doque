"use client";

import React from "react";
import Carousel from "../template-carousel/carousel";


const cards = [
    {
        title: "Project 1",
        description: "Description for Project 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 2",
        description: "Description for Project 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 3",
        description: "Description for Project 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 4",
        description: "Description for Project 4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 5",
        description: "Description for Project 5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },

];

const guestCards = [
    {
        title: " Project 1",
        description: "Description for  Project 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: " Project 2",
        description: "Description for  Project 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 3",
        description: "Description for Project 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 4",
        description: "Description for Project 4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 5",
        description: "Description for Project 5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },


];

const recentlyVisitedCards = [
    {
        title: " Project 1",
        description: "Description for  Project 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: " Project 2",
        description: "Description for  Project 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 3",
        description: "Description for Project 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 4",
        description: "Description for Project 4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },
    {
        title: "Project 5",
        description: "Description for Project 5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s",
    },

];

export default function Templates() {
    return (
        <div className="p-4 flex-grow bg-[#EDF1F4]">
            <h1 className="text-3xl text-[#3B3C3D] font-bold ml-5 mb-4">Templates</h1>
            <Carousel cards={cards} />

            <h2 className="text-3xl text-[#3B3C3D] font-bold ml-5 mt-8 mb-4">Used Templates</h2>
            <Carousel cards={guestCards} />

            <h2 className="text-3xl text-[#3B3C3D] font-bold ml-5 mt-8 mb-4">Category</h2>
            <Carousel cards={recentlyVisitedCards} />
        </div>
    );
};
