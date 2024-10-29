export default function SpaceCardSkeleton() {
  return (
    <div className="h-full w-full relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-transform animate-pulse">
      <div className="absolute right-2 top-4">
        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>

      <div className="hover:bg-zinc-50 w-full h-full dark:hover:bg-zinc-900">
        <div className="p-4">
          <div className="mb-4">
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          </div>
          <div className="mb-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2 justify-between p-2 border bg-white dark:bg-zinc-950 rounded-md">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
            </div>
            <div className="flex gap-2 justify-between p-2 border bg-white dark:bg-zinc-950 rounded-md">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
            </div>
            <div className="flex gap-2 justify-between p-2 border bg-white dark:bg-zinc-950 rounded-md">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
