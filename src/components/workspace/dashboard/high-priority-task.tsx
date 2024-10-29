"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { formatedDate } from "@/components/workspace/dashboard/task-list";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { NewSpaceButton } from "@/components/spaces/new-space-button";
import { IoMdAddCircleOutline } from "react-icons/io";

const HighPriorityTask: React.FC = () => {
  const { spaces } = useAppSelector((state) => state.space);
  const { selectedProjectId } = useAppSelector((state) => state.workspace);
  const { workSpaceId }: { workSpaceId: string } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedSpace = spaces.find((space) => space._id === selectedProjectId);

  const highPriorityTasks = selectedSpace
    ? selectedSpace.lists.flatMap((list) =>
        list.tasks
          .filter((task) => task.priority === "high")
          .map((task) => ({ ...task, listName: list.name, listId: list._id }))
      )
    : [];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < highPriorityTasks.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : highPriorityTasks.length - 1
    );
  };

  return (
    <div className="w-full h-[180px] bg-white  rounded-lg shadow-md p-2 space-y-2  dark:bg-darkBg">
      {highPriorityTasks.length > 0 ? (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-red-600 bg-red-100 px-1 rounded-full">
              {highPriorityTasks[currentIndex].priority}
            </span>
            <div className="space-x-1">
              <button className="focus:outline-none" onClick={handlePrev}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="focus:outline-none" onClick={handleNext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
            <Link
              href={`/w/${workSpaceId}/spaces/${selectedProjectId}?task=${highPriorityTasks[currentIndex]?._id}&list=${highPriorityTasks[currentIndex]?.listId}`}
              className="flex flex-col py-2"
            >
              {highPriorityTasks[currentIndex].createdAt &&
                highPriorityTasks[currentIndex].dueDate && (
                  <div className="flex justify-between text-[10px] text-gray-500 dark:text-gray-300">
                    <p>
                      Created at{" "}
                      {formatedDate(highPriorityTasks[currentIndex].createdAt)}
                    </p>
                    <p>
                      Due Date{" "}
                      {formatedDate(highPriorityTasks[currentIndex].dueDate)}
                    </p>
                  </div>
                )}
              <h2 className="text-ms py-1 text-gray-900 dark:text-gray-300">
                {highPriorityTasks[currentIndex].title}
              </h2>
              <p className="text-[10px] py1 text-gray-600 dark:text-gray-400">
                {highPriorityTasks[currentIndex].description}
              </p>
              <div className="py-1">
                <span className="text-xs  font-medium text-gray-700 dark:text-gray-300">
                  Status: {highPriorityTasks[currentIndex].listName}
                </span>
              </div>
            </Link>
        </div>
      ) : (
        <div>
          {selectedProjectId ? (
            <Link href={`/w/${workSpaceId}/spaces/${selectedProjectId}`}>
              <p className="h-full flex justify-center items-center text-gray-500 cursor-pointer">
                Assign High Priority Task
              </p>
            </Link>
          ) : (
            <NewSpaceButton>
              <div className="h-full flex justify-center items-center text-gray-500 cursor-pointer">
                <IoMdAddCircleOutline
                  size={15}
                  className="mr-1 text-gray-500"
                />
                <span className="text-gray-500">Add New Project</span>
              </div>
            </NewSpaceButton>
          )}
        </div>
      )}
    </div>
  );
};

export default HighPriorityTask;
