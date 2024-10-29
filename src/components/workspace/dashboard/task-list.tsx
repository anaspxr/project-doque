"use client"

import { useAppSelector } from "@/lib/store/hooks";
import React from "react";
import image from "../../../../public/images/spaceImage.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export  const formatedDate = (date: number | string | Date) => {
  const formated = new Date(date);
  return formated.toLocaleDateString("en-GB");
};

const TaskList: React.FC = () => {
  const { spaces } = useAppSelector((state) => state.space);
  const { selectedProjectId } = useAppSelector((state) => state.workspace);
  const { workSpaceId } = useParams<{ workSpaceId: string }>();

  const selectedSpace = spaces?.find((space) => space._id === selectedProjectId);

  const isTask = selectedSpace
    ? selectedSpace.lists.some((list) => list.tasks && list.tasks.length > 0)
    : false;

  return (
    <div className="w-full h-72 bg-white border border-gray-200 rounded-lg shadow-md p-2 mt-2  dark:bg-darkBg ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm">Task Lists</h2>
        <Link href={`/w/${workSpaceId}/spaces/${selectedProjectId}`}>
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </Link>
      </div>

      {isTask ? (
        <div>
          <div className="max-h-[185px] overflow-scroll">
            {selectedSpace?.lists.map((list) => (
              <div key={list._id} className="flex flex-col justify-between p-1">
                <div className="flex flex-col">
                  {list.tasks.map((task) => (
                    <div key={task._id} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-xs text-gray-700 dark:text-white">{task.title}</span>
                        <div className="flex items-center space-x-2 mt-2">
                          <span
                            className="text-[10px] text-green-600 px-1 rounded-full"
                            style={{
                              backgroundColor: `${list.color + "10"}`,
                            }}
                          >
                            {list.name}
                          </span>
                          {task.dueDate && (
                            <span className="text-[10px] bg-orange-100 text-orange-600 px-1 rounded-full">
                              {formatedDate(task.dueDate)}
                            </span>
                          )}
                        </div>
                      </div>
                      <Link
                        href={`/w/${workSpaceId}/spaces/${selectedProjectId}?task=${task._id}&list=${list._id}`}
                      >
                        <button className="focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <Link href={`/w/${workSpaceId}/spaces/${selectedProjectId}`}>
              <button className="flex items-center justify-center w-full text-xs font-semibold text-gray-600 border border-gray-300 rounded-full py-1 dark:text-gray-300 ">
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <Image height={300} src={image} alt="No tasks available" className="max-h-[200px] opacity-15" />
      )}
    </div>
  );
};

export default TaskList;
