"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineTemplate } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiOutlineHome className="text-2xl" />,
      label: "Home",
      link: "/u/home",
    },
    {
      icon: <HiOutlineTemplate className="text-2xl" />,
      label: "Templates",
      link: "/u/home/templates",
    },
  ];

  const workspaceItems = [
    { name: "Alixa's", link: "https://i.pravatar.cc/300" },
    { name: "Guest's", link: "https://i.pravatar.cc/300" },
  ];

  return (
    <div className="w-full h-screen sm:w-1/4 md:w-1/5  bg-[#EDF1F4] p-4 flex flex-col">
      <div className="flex-1">
        {sidebarItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="flex items-center p-1 mr-2 hover:bg-[#E1E4E6] rounded-lg mt-1">
              {item.icon}
              <h2 className="font-medium text-sm ml-2">{item.label}</h2>
            </div>
          </Link>
        ))}

        <hr className="my-2 border-gray-500 h-1" />
        <h2 className="font-semibold text-sm mt-1 text-gray-600">Workspaces</h2>

        {workspaceItems.map((workspace, index) => (
          <Link href="/w/1/1" key={index}>
            <div className="flex items-center ml-1 mt-3 ">
              <Image
                src={workspace.link}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover mr-2"
                width={32}
                height={32}
              />
              <div className="flex flex-col py-1">
                <span className="font-semibold text-sm">{workspace.name}</span>
                <span className="font-medium text-sm">Workspace</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link href="">
        <div className="flex items-center p-1 hover:bg-[#E1E4E6] rounded-lg mt-2">
          <FiSettings className="text-2xl" />
          <h2 className="font-medium text-lg ml-2">Settings</h2>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
