"use client";

import React from "react";

interface TaskNameStepProps {
  previousSpaceName: string;
  previousBoardName: string;
  onNext: (name: string) => void;
  onBack: () => void;
  taskCategories: {
    todo: string;
    doing: string;
    completed: string;
  };
  onTaskCategoryChange: (name: string, value: string) => void;
}

export default function TaskNameStep({
  previousSpaceName,
  previousBoardName,
  onNext,
  onBack,
  taskCategories,
  onTaskCategoryChange,
}: TaskNameStepProps) {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    onTaskCategoryChange(name, value);
  };

  const handleNext = () => {
    const currentBoardName = taskCategories.todo;
    onNext(currentBoardName);
  };

  // Check if all input fields are filled
  const allFieldsFilled = Object.values(taskCategories).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 p-6">
      <header className="absolute top-0 left-0 w-full py-6 flex justify-between items-center px-10">
        <div className="flex items-center space-x-2">
          <h1 className="font-megrim text-black font-bold text-2xl">DOQUE</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-16">
        {/* Left Side - Input for Task Categories */}
        <div className="space-y-6 md:mt-14">
          <h2 className="text-2xl font-semibold text-black">
            Start by organizing your tasks
          </h2>
          <p className="text-gray-700">
            You can move tasks between the lists as you progress.
          </p>

          <div className="space-y-4">
            {/* To-do input with text truncation */}
            <input
              type="text"
              name="todo"
              value={taskCategories.todo}
              onChange={handleInputChange}
              placeholder="To-do tasks..."
              className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 truncate"
            />

            {/* Doing input with text truncation */}
            <input
              type="text"
              name="doing"
              value={taskCategories.doing}
              onChange={handleInputChange}
              placeholder="In progress tasks..."
              className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 truncate"
            />

            {/* Completed input with text truncation */}
            <input
              type="text"
              name="completed"
              value={taskCategories.completed}
              onChange={handleInputChange}
              placeholder="Completed tasks..."
              className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 truncate"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              className="text-blue-600 font-semibold hover:underline"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className={`text-blue-600 font-semibold hover:underline ${
                !allFieldsFilled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
              disabled={!allFieldsFilled}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Side - Workspace View */}
        <div className="flex justify-center items-center">
          <div className="w-full md:w-96 h-auto bg-gray-400 border-2 border-gray-500 rounded-lg p-4">
            <h3 className="font-semibold mb-4">
              <div className="h-8 pl-5 bg-gray-300 rounded-lg flex items-center">
                {previousSpaceName} / {previousBoardName}
              </div>
            </h3>

            {/* Task Columns Skeleton */}
            <div className="grid grid-cols-3 gap-4">
              {/* Todo Column */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded-lg flex justify-center items-center truncate">
                  {taskCategories.todo}
                </div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
              </div>

              {/* Doing Column */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded-lg flex justify-center items-center truncate">
                  {taskCategories.doing}
                </div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
              </div>

              {/* Completed Column */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded-lg flex justify-center items-center truncate">
                  {taskCategories.completed}
                </div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
