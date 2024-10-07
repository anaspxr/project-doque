'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import Spaces from './spaces';
import { FiSettings } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Sidebar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sidebarItems = [
    { icon: <AiFillHome className='text-xl text-black mr-3' />, label: 'Home' },
    { icon: <RiDashboardFill className='text-xl text-black mr-3' />, label: 'Dashboard' },
    { icon: <BsFillPeopleFill className='text-xl text-black mr-3' />, label: 'Members' },
    { icon: <FaCalendar className='text-xl text-black mr-3' />, label: 'Calendar' },
  ];

  return (
    <div className='relative w-1/5 min-h-screen bg-gray-100 p-4 flex flex-col'>
      <div 
        className='relative group' 
        onMouseEnter={() => setDropdownOpen(true)} 
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <div className='flex items-center justify-between p-3 bg-gray-200 rounded-md cursor-pointer'>
          <div className='flex items-center'>
            <img
              src="https://th.bing.com/th/id/OIP.qknTW8EsnyNvPGESKQFnWAHaEK?rs=1&pid=ImgDetMain"
              alt="Workspace Logo"
              className='h-8 w-8 mr-2 rounded-full bg-gray-400'
            />
            <h2 className='font-bold text-lg text-black'>Alixa Workspace</h2>
          </div>
          <IoIosArrowDown className={`text-black transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
        </div>

        {dropdownOpen && (
          <div className='absolute top-full left-0 w-full bg-gray-300 shadow-xl rounded-xl z-50'>
            <div className='border-b-2 border-black p-2'>
              <h3 className='text-lg text-black'>Workspaces</h3>
            </div>
            <div className='p-2 hover:bg-gray-200 cursor-pointer'>
              <h3 className='text-base text-black'>Workspace 1</h3>
            </div>
            <div className='p-2 hover:bg-gray-200 cursor-pointer'>
              <h3 className='text-base text-black'>Workspace 2</h3>
            </div>
            <div className='flex items-center justify-center p-2 hover:bg-gray-200 cursor-pointer'>
              <FaPlus className='mr-2' />
              <span className='text-black'>Add New</span>
            </div>
          </div>
        )}
      </div>

      <div className='flex-1 bg-gray-200 rounded-md mt-6 p-4 flex flex-col'>
        <div>
          {sidebarItems.map((item, index) => (
            <div key={index} className='flex items-center p-2 hover:border-l-4 border-black cursor-pointer mt-2'>
              {item.icon}
              <h2 className='font-medium text-black'>{item.label}</h2>
            </div>
          ))}
        </div>

        <Spaces />

        <div className='mt-auto flex items-center p-2 hover:bg-gray-300 rounded-lg cursor-pointer'>
          <FiSettings className='text-xl text-black mr-3' />
          <h1 className='font-medium text-black'>Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
