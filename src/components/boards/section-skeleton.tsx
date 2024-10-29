import React from "react";

export default function SectionContainerSkeleton() {
  return (
    <div className="sm:w-64 w-40 h-[600px] flex-shrink-0 p-2 rounded-md shadow-sm border overflow-y-auto bg-white dark:bg-zinc-900 animate-pulse">
      <div className="flex gap-2 ">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex sm:gap-2 items-center my-2">
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-8">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border pb-2 border-gray-200 space-y-2 dark:border-gray-700 shadow-sm animate-pulse">
            <div className="sm:h-5 h-3 bg-gray-300 dark:bg-gray-600"></div>
            <div className="p-2">
              <div className="mb-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-2 items-center h-6">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                  <div className="flex gap-1">
                    <div
                      key={index}
                      className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div
                      key={index}
                      className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
