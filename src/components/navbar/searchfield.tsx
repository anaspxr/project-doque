'use client';
import React from 'react';
import { IoIosSearch, IoIosClose } from 'react-icons/io';

export default function SearchField() {
    return (
        <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <IoIosSearch className="text-gray-400" />
            </span>
            <input
                type="text"
                placeholder="Search here..."
                className="w-full px-8 text-sm py-1 pl-8 pr-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#EDF1F4] shadow-[0px_2px_5px_rgba(0,0,0,0.1)]"
            />
            <span className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer">
                <IoIosClose className="text-gray-400 size-6" />
            </span>
        </div>
    );
};
