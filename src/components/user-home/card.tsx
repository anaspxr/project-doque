import React from "react";
import Image from "next/image";

interface CardProps {
    title: string;
    description?: string;
    image: string;
}

export default function Card({ title, description, image }: CardProps) {
    return (
        <div className="relative rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-36">
                <Image
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                    width={300}
                    height={400}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h2 className="text-white font-bold text-xl">{title}</h2>
                </div>
            </div>
            {description && (
                <p className="text-gray-600 text-sm text-center mt-2">{description}</p>
            )}
        </div>
    );
}
