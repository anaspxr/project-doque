"use client";

import React, { useState } from "react";

interface SpaceNameStepProps {
  onNext: (name: string) => void;
  initialName?: string;
}

export default function SpaceNameStep({
  onNext,
  initialName = "",
}: SpaceNameStepProps) {
  const [boardName, setBoardName] = useState<string>(initialName);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(event.target.value);
  };

  const handleNextStep = () => {
    onNext(boardName);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-10">
      <header className="absolute top-0 left-0 w-full py-6 flex justify-between items-center px-10">
        <div className="flex items-center space-x-2">
          <h1 className="font-megrim text-black font-bold text-2xl">DOQUE</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        {/* Left Side - Input Section */}
        <div className="mt-14 space-y-4 flex flex-col">
          <h2 className="text-3xl font-semibold text-black">Great!</h2>
          <p className="text-lg text-gray-700">Let's create your first board</p>
          <input
            type="text"
            placeholder="Enter Your Space Name..."
            value={boardName}
            onChange={handleInputChange}
            className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className={`text-left flex flex-end text-blue-600 font-semibold hover:underline ${
              !boardName.trim() ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNextStep}
            disabled={!boardName.trim()}
          >
            Next
          </button>
        </div>

        {/* Right Side - Board Skeleton Model */}
        <div className="flex justify-center items-center">
          <div className="w-96 h-auto bg-gray-400 border-2 border-gray-500 rounded-lg p-4">
            <h3 className="font-semibold mb-4">
              <div className="h-8 pl-5 bg-gray-300 rounded-lg flex items-center">
                {boardName || "Space Name"}
              </div>
            </h3>

            {/* Task Columns */}
            <div className="grid grid-cols-3 gap-4">
              {/* Todo Column */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded-lg flex justify-center items-center"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
              </div>

              {/* In Progress Column */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded-lg flex justify-center items-center"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
              </div>

              {/* Done Column */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded-lg flex justify-center items-center"></div>
                <div className="h-24 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
