import StackedAvatars from "@/components/ui/stacked-avatars";
import React from "react";

type Task = {
  title: string;
  description: string;
  createdAt: string;
  dueDate: string;
  priority: string;
  assignedUsers: string[];
  remainingUsers: number;
};

const task: Task = {
  title: "Create wireframe for home page",
  description: "Define and plan the information hierarchy of their design for a website",
  createdAt: "05/10/2024",
  dueDate: "12/12/2024",
  priority: "High Priority",
  assignedUsers: [
    "/path/to/avatar1.jpg",
    "/path/to/avatar2.jpg",
    "/path/to/avatar3.jpg",
    "/path/to/avatar4.jpg"
  ],
  remainingUsers: 4,
};

const HighPriorityTask: React.FC = () => {
  return (
    <div className="w-[259px] h-[180px] bg-white border border-gray-200 rounded-lg shadow-md p-2 space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs  text-red-600 bg-red-100 px-1  rounded-full">
          {task.priority}
        </span>
        <div className="space-x-1">
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-between text-[10px] text-gray-500">
        <p>Created at {task.createdAt}</p>
        <p>Due Date {task.dueDate}</p>
      </div>

      <h3 className="text-xs text-gray-900">{task.title}</h3>
      <p className="text-[10px] text-gray-600">{task.description}</p>

      <div>
        <span className="text-xs font-medium text-gray-700">ToDo</span>
        <div className="flex items-center mt-1 space-x-2">
          <StackedAvatars max={4} members={[{},{},{},{},{},{},{}]} size="sm" space="high"/>
        </div>
      </div>
    </div>
  );
};

export default HighPriorityTask;
