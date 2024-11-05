import React from "react";

export default function WorkSpaceCardSkeleton() {
  return (
    <div
      className="w-[160px] sm:w-[200px] md:w-[250px] h-full min-h-40 shadow-lg hover:shadow-xl
       bg-gradient-to-br from-[#349ca25f] via-white to-[#C4DBF6] hover:scale-105 transition-transform rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 animate-pulse">
      <div className="p-4 h-full flex flex-col gap-4">
        <div className="my-4 h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-1"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
