import Sidebar from "@/components/workspace/sidebar";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-4/5">{children}</div>
    </div>
  );
}
