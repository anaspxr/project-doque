"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaUsers,
  FaFolder,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useAppDispatch } from "@/lib/store/hooks";
import { logout } from "../../lib/store/features/admin/admin-auth-slice";
import { useRouter } from "next/navigation";
import Image from "next/image";

type MenuItem = {
  icon: JSX.Element;
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { icon: <FaTachometerAlt />, label: "Dashboard", href: "/admin/dashboard" },
  { icon: <FaUsers />, label: "Members", href: "/admin/members" },
  { icon: <FaFolder />, label: "Workspaces", href: "/admin/workspace" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/u/home");
  };

  return (
    <aside
      className={`fixed sm:relative z-50 flex flex-col h-screen p-4 bg-white dark:bg-gray-800 shadow-md transition-width duration-300 ${
        isOpen ? "w-64" : "w-14"
      }`}
    >
      <div className="flex items-center justify-between relative">
        <button
          className={`z-50 p-2 text-black hover:text-gray-900 dark:text-white dark:hover:text-gray-300`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
        <div className="flex justify-center w-full">
          <Image
            src="/images/DOQ_LOGO.png"
            alt="Logo"
            className={`h-8 w-14 sm:w-12 md:w-14 transition-all duration-300 ${
              isOpen ? "ml-2" : ""
            }`}
            width={300}
            height={300}
          />
        </div>
      </div>
      <ul className="flex-grow space-y-4 mt-8">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <div
                className={`flex items-center pl-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer transform transition-transform duration-300 hover:scale-105 
            ${
              pathname === item.href
                ? "border-l-4 border-gray-700 dark:border-gray-400"
                : "hover:border-l-4 hover:border-gray-400 dark:hover:border-gray-600"
            }`}
              >
                <span className="mr-2">{item.icon}</span>
                {isOpen && <span>{item.label}</span>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className={`flex items-center pl-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer transform transition-transform duration-300 hover:scale-105
        ${isOpen ? "justify-start" : "justify-center"}`}
        >
          <FaSignOutAlt className="mr-2" />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
