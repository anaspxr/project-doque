import Navbar from "@/components/admin/nav-bar";
import Sidebar from "@/components/admin/side-bar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-hidden px-2 pl-6 sm:px-6 sm:pl-0 py-2">
          {children}
        </main>
      </div>
    </div>
  );
}
