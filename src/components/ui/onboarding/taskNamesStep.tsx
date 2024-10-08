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

  const allFieldsFilled = Object.values(taskCategories).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6">
      <header className="absolute top-0 left-0 w-full py-6 flex justify-between items-center px-10">
        <div className="flex items-center space-x-2">
          <h1 className="font-megrim text-black font-bold text-2xl">DOQUE</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-16">
        <div className="space-y-6 md:mt-14">
          <h2 className="text-2xl font-semibold text-black">
            Start by organizing your tasks
          </h2>
          <p className="text-gray-700">
            You can move tasks between the lists as you progress.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              name="todo"
              value={taskCategories.todo}
              onChange={handleInputChange}
              placeholder="To-do tasks..."
              className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="doing"
              value={taskCategories.doing}
              onChange={handleInputChange}
              placeholder="In progress tasks..."
              className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="completed"
              value={taskCategories.completed}
              onChange={handleInputChange}
              placeholder="Completed tasks..."
              className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              className="text-indigo-600 font-semibold hover:underline"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className={`text-indigo-600 font-semibold hover:underline ${
                !allFieldsFilled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
              disabled={!allFieldsFilled}
            >
              Next
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full md:w-96 h-auto bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold mb-4">
              <div className="h-8 pl-5 bg-indigo-100 text-indigo-600 rounded-lg flex items-center">
                {previousSpaceName} / {previousBoardName}
              </div>
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="h-8 bg-yellow-200 text-yellow-800 rounded-lg flex justify-center items-center truncate">
                  {taskCategories.todo}
                </div>
                <div className="h-24 bg-yellow-100 rounded-lg shadow-md"></div>
                <div className="h-24 bg-yellow-100 rounded-lg shadow-md"></div>
                <div className="h-24 bg-yellow-100 rounded-lg shadow-md"></div>
              </div>

              <div className="space-y-4">
                <div className="h-8 bg-purple-200 text-purple-800 rounded-lg flex justify-center items-center truncate">
                  {taskCategories.doing}
                </div>
                <div className="h-24 bg-purple-100 rounded-lg shadow-md"></div>
                <div className="h-24 bg-purple-100 rounded-lg shadow-md"></div>
              </div>

              <div className="space-y-4">
                <div className="h-8 bg-green-200 text-green-800 rounded-lg flex justify-center items-center truncate">
                  {taskCategories.completed}
                </div>
                <div className="h-24 bg-green-100 rounded-lg shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
