import React from "react";
import Link from "next/link";
import { FaBriefcase, FaUser, FaEye } from "react-icons/fa";
import CustomMarquee from "../../ui/marquee";

interface Creator {
  firstName: string;
  lastName: string;
}

interface Workspace {
  _id: string;
  name: string;
  createdAt: string;
  createdBy: string;
  visibility: string;
}

interface WorkspaceCardProps {
  workspace: Workspace;
  creator?: Creator;
}

export default function WorkspaceCard({
  workspace,
  creator,
}: WorkspaceCardProps) {
  return (
    <li
      key={workspace._id}
      className="bg-white dark:bg-gray-800 p-4 ml-10 sm:ml-2 sm:p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400"
    >
      <Link href={`/admin/workspace/${workspace._id}`}>
        <div className="cursor-pointer flex items-start space-x-4">
          <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800 p-2 sm:p-3 rounded-full">
            <FaBriefcase className="text-blue-500 dark:text-blue-300 w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <div className="overflow-hidden w-full">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2">
              <CustomMarquee text={workspace.name} delay={2} />
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-1">
              Created on: {new Date(workspace.createdAt).toLocaleDateString()}
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-1">
              <FaEye className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
              <p>Visibility: {workspace.visibility}</p>
            </div>
          </div>
        </div>
      </Link>

      {creator && (
        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          <FaUser className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
          <p>
            {creator.firstName} {creator.lastName}
          </p>
        </div>
      )}
    </li>
  );
}
