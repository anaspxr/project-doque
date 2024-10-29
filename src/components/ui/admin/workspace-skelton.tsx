export default function WorkspaceCardSkeleton() {
  return (
    <li className="bg-white dark:bg-gray-800 p-6 border ml-10 sm:ml-0 border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-all duration-300">
      <div className="flex items-start space-x-4 animate-pulse">
        <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800 p-3 rounded-full">
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>

        <div className="overflow-hidden w-full">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-1"></div>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          </p>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
            <div className="mr-1 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400 text-sm">
        <div className="mr-1 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      </div>
    </li>
  );
}
