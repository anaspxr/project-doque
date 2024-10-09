"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import Spaces from "./spaces";
import { FiSettings } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Sidebar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sidebarItems = [
    {
      icon: <AiFillHome className="text-xl text-black mr-3" />,
      label: "Home",
      href: "/home",
    },
    {
      icon: <RiDashboardFill className="text-xl text-black mr-3" />,
      label: "Dashboard",
      href: "/w/id/dashboard",
    },
    {
      icon: <BsFillPeopleFill className="text-xl text-black mr-3" />,
      label: "Members",
      href: "/w/id/members",
    },
    {
      icon: <FaCalendar className="text-xl text-black mr-3" />,
      label: "Calendar",
      href: "/w/id/calendar",
    },
    {
      icon: <AiFillMessage className="text-xl text-black mr-3" />,
      label: "Message",
      href: "",
    },
  ];

  return (
    <div className="relative h-full w-1/5 bg-gray-100 p-2 flex flex-col">
      <div
        className="relative group"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}>
        <div className="flex items-center justify-between p-3 bg-gray-200 rounded-md cursor-pointer">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://th.bing.com/th/id/OIP.qknTW8EsnyNvPGESKQFnWAHaEK?rs=1&pid=ImgDetMain"
                alt="Workspace logo"
              />
              <AvatarFallback />
            </Avatar>
            <h2 className="text-md text-black">Alixa Workspace</h2>
          </div>
          <IoIosArrowDown
            className={`text-black transform transition-transform duration-300 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {dropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-300 shadow-xl rounded-xl z-50">
            <div className="border-b-2 border-black p-2">
              <h3 className="text-md text-black">Workspaces</h3>
            </div>
            <div className="p-2 hover:bg-gray-200 cursor-pointer">
              <h3 className="text-sm text-black">Workspace 1</h3>
            </div>
            <div className="p-2 hover:bg-gray-200 cursor-pointer">
              <h3 className="text-sm text-black">Workspace 2</h3>
            </div>
            <div className="flex items-center justify-center p-2 hover:bg-gray-100 cursor-pointer">
              <FaPlus className="mr-2" />
              <span>Add New</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 bg-gray-200 rounded-md mt-3 flex flex-col">
        <div className="p-4">
          {sidebarItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="flex items-center p-2 hover:border-l-4 border-black cursor-pointer">
                {item.icon}
                <h2 className="font-base text-black">{item.label}</h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar max-h-64 p-4">
          <Spaces />
        </div>

        <div className="mt-auto flex items-center p-2 hover:bg-gray-300 rounded-lg cursor-pointer">
          <FiSettings className="text-xl text-black mr-3" />
          <h1 className="font-medium text-black">Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
