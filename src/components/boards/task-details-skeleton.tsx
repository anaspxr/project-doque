import React from "react";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function TaskDetailsSkeleton() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="task-details-section overflow-hidden sm:w-[600px] bg-white dark:bg-zinc-900 rounded-xl shadow-md ">
      <div className="animate-pulse space-y-4">
        <div className="h-10 flex justify-end items-center px-2 bg-gray-300 dark:bg-gray-600">
          <Button
            title="Close"
            size="icon"
            variant="ghost"
            className="hover:bg-black hover:bg-opacity-20 text-zinc-700 dark:text-zinc-700 dark:hover:text-black dark:hover:bg-opacity-20 p-1 h-8 w-8"
            onClick={() => router.push(pathname)}>
            <XIcon className="" />
          </Button>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center flex-wrap mb-2">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-[200px] mb-2"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-[150px]"></div>
          </div>
          <div className="h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full mb-4"></div>
          <div className="h-8 mt-8 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-4"></div>
          <div className="h-16 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>

          <div className="flex justify-between my-4 flex-wrap gap-2 mt-10">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-[220px] mb-2"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-[120px] mb-2"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-[120px] mb-2"></div>
          </div>
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-[200px] mb-2"></div>
          <div className="flex gap-2">
            <div className="h-12 w-12  rounded-full bg-gray-300 dark:bg-gray-600  mb-2"></div>
            <div className="h-12 w-12  rounded-full bg-gray-300 dark:bg-gray-600  mb-2"></div>
            <div className="h-12 w-12  rounded-full bg-gray-300 dark:bg-gray-600  mb-2"></div>
          </div>

          <div className="h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full my-4"></div>

          <div className="flex justify-between items-end mt-4">
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
