import React, { useEffect, useState } from "react";
import { FaEllipsisV, FaLock, FaUnlock } from "react-icons/fa";
import { useAppDispatch } from "../../../lib/store/hooks";
import { toggleBlockMember } from "../../../lib/store/features/admin/admin-member-slice";

interface StatusButtonProps {
  initialStatus: boolean;
  memberId: string;
}

export default function StatusButton({
  initialStatus,
  memberId,
}: StatusButtonProps) {
  const [isBlocked, setIsBlocked] = useState(initialStatus);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsBlocked(initialStatus);
  }, [initialStatus]);

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleStatus = (newStatus: boolean) => {
    setIsBlocked(newStatus);
    dispatch(toggleBlockMember({ memberId, isBlocked: newStatus }));
    setShowDropdown(false);
  };

  return (
    <div className="relative flex justify-start gap-2 sm:flex-col lg:flex-col">
      <button
        onClick={handleDropdown}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
      >
        <FaEllipsisV />
      </button>

      {showDropdown && (
        <div className="absolute  right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li
              onClick={() => toggleStatus(false)}
              className="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              <FaLock className="mr-2 text-red-500" /> Block
            </li>
            <li
              onClick={() => toggleStatus(true)}
              className="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              <FaUnlock className="mr-2 text-green-500" /> Unblock
            </li>
          </ul>
        </div>
      )}

      <div className="flex items-center">
        {isBlocked ? (
          <span className="text-red-500">
            <FaLock />
          </span>
        ) : (
          <span className="text-green-500">
            <FaUnlock />
          </span>
        )}
      </div>
    </div>
  );
}
