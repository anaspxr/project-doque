'use client';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Image from 'next/image';

export default function Sidebar() {
    const sidebarItems = [
        { icon: <AiOutlineHome className='text-3xl text-black mr-3' />, label: 'Home' },
        { icon: <HiOutlineTemplate className='text-3xl text-black mr-3' />, label: 'Templates' },
    ];

    return (
        <div className='w-full sm:w-1/4 md:w-1/5 min-h-screen bg-[#EDF1F4] p-4 flex flex-col'>
            <div className='flex-1'>
                {sidebarItems.map((item, index) => (
                    <div key={index} className='flex items-center p-3 bg-[#EDF1F4] hover:bg-[#E1E4E6] rounded-lg cursor-pointer mt-2'>
                        {item.icon}
                        <h2 className='font-medium text-lg text-black'>{item.label}</h2>
                    </div>
                ))}

                <hr className="my-4 border-gray-300 h-1" />

                <h2 className='font-semibold text-sm text-black mt-2'>Workspaces</h2>

                <div className='flex items-center ml-8 mt-8'>
                    <Image
                        src="https://i.pravatar.cc/300"
                        alt="Profile"
                        className='h-12 w-12 rounded-full object-cover mr-3'
                        width={300}
                        height={300}
                    />
                    <div className='flex flex-col'>
                        <span className='font-medium text-black text-lg'>Alixa&apos;s</span>
                        <span className='font-medium text-black text-sm'>Workspace</span>
                    </div>
                </div>
            </div>

            <div className='flex items-center p-3 bg-[#EDF1F4] hover:bg-[#E1E4E6] rounded-lg cursor-pointer ml-5 mt-2 mb-20'>
                <FiSettings className='text-3xl text-black mr-3' />
                <h1 className='font-medium text-lg text-black'>Settings</h1>
            </div>
        </div>
    );
}

