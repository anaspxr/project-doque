import React from "react";
import { FilterIcon } from "@heroicons/react/outline";

interface FilterDropdownProps {
  setFilter: (selectedFilter: string) => void;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  setFilter,
  showDropdown,
  setShowDropdown,
}) => {
  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        <FilterIcon className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-300" />
        Filter
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-20">
          {["all", "today", "week", "month"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
