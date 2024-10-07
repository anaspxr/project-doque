'use client';
import React from 'react';
import { IoIosSearch, IoIosClose } from 'react-icons/io';

export default function SearchField() {
    return (
        <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoIosSearch className="text-gray-400 size-6" />
            </span>
            <input
                type="text"
                placeholder="Search here..."
                className="w-full px-10 py-2 pl-10 pr-10 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EDF1F4] shadow-[0px_4px_10px_rgba(0,0,0,0.1),0px_6px_30px_rgba(0,0,0,0.1)]"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <IoIosClose className="text-gray-400 size-8" />
            </span>
        </div>
    );
};


