"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "@/components/user-home/card";

interface CarouselProps {
    cards: Array<{
        title: string;
        description?: string;
        image: string;
    }>;
}

export default function Carousel({ cards }: CarouselProps) {
    const [carouselRef] = useEmblaCarousel({ loop: true });

    return (
        <div className="relative">
            <div ref={carouselRef} className="overflow-hidden">
                <div className="flex">
                    {cards.map((card, index) => (
                        <div key={index} className="min-w-0 shrink-0 grow-0 basis-[250px] p-2">
                            <Card title={card.title} image={card.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


