import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-2 sm:mt-4 ml-10 sm:ml-0 lg:ml-0 space-x-4">
      <button
        className="flex items-center px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
        title="Previous"
      >
        <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
      </button>
      <span className="px-4 py-2 text-gray-600 dark:text-gray-200">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="flex items-center px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        title="Next"
      >
        <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}
