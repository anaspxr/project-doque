'use client';
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FiSettings } from "react-icons/fi";
import { Button } from '../ui/button';
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

export default function ProfileSection() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div className="flex items-center space-x-2">
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        src="https://i.pravatar.cc/300"
                        alt="Profile"
                        className="h-8 w-8 rounded-full object-cover"
                        width={300}
                        height={300}
                    />
                    <span className="font-semibold text-gray-800">Alixa</span>
                    {isOpen ? (
                        <IoIosArrowUp className="text-gray-600 transition-transform duration-300" />
                    ) : (
                        <IoIosArrowDown className="text-gray-600 transition-transform duration-300" />
                    )}
                </div>
            </div>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-64 bg-white/90 rounded-lg border border-gray-200 z-10 shadow-lg backdrop-blur-md p-3"
                >
                    <Button className="flex items-center justify-between bg-[#E5E9EC] rounded-lg w-full hover:bg-[#E5E9EC]/90 h-12 p-2">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="https://i.pravatar.cc/300"
                                alt="Profile"
                                className="h-8 w-8 rounded-full object-cover"
                                width={300}
                                height={300}
                            />
                            <span className="font-semibold text-gray-800">Alixa</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="text-sm text-gray-500">Profile</span>
                            <IoIosArrowForward className="text-gray-600" />
                        </div>
                    </Button>

                    <div className="flex justify-between gap-2 mt-2 border-b border-gray-200 pb-2">
                        <Button className="flex-1 bg-[#C8AFBE] text-black rounded-2xl h-10 hover:bg-[#C7C3B5]">
                            Theme
                        </Button>
                        <Button className="flex-1 bg-[#C8AFBE] text-black rounded-2xl h-10 hover:bg-[#C7C3B5]">
                            Templates
                        </Button>
                    </div>

                    <div className="flex justify-between gap-2 mt-2">
                        <Button className="flex-1 bg-[#E5E9EC] text-black rounded-2xl flex items-center justify-center h-8 hover:bg-[#C7C3B5]">
                            <FiSettings className="mr-1" />
                            Settings
                        </Button>
                        <Button className="flex-1 bg-[#E5E9EC] text-black rounded-2xl flex items-center justify-center h-8 hover:bg-[#C7C3B5]">
                            <IoLogOutOutline className="mr-1" />
                            Logout
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
