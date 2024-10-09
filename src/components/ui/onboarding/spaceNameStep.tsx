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
    <div className="min-h-screen flex items-center justify-center px-10">
      <header className="absolute top-0 left-0 w-full py-6 flex justify-between items-center px-10">
        <div className="flex items-center space-x-2">
          <h1 className="font-megrim text-black font-bold text-2xl">DOQUE</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        <div className="mt-14 space-y-4 flex flex-col">
          <h2 className="text-3xl font-semibold text-black">Great!</h2>
          <p className="text-lg text-gray-700">Let&apos;s create your first board</p>
          <input
            type="text"
            placeholder="Enter Your Space Name..."
            value={boardName}
            onChange={handleInputChange}
            className="w-full py-3 px-4 bg-transparent border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            className={`text-left flex flex-end text-indigo-600 font-semibold hover:underline ${
              !boardName.trim() ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNextStep}
            disabled={!boardName.trim()}
          >
            Next
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-96 h-auto bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold mb-4">
              <div className="h-8 pl-5 bg-indigo-100 text-indigo-600 rounded-lg flex items-center">
                {boardName || "Space Name"}
              </div>
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="h-8 bg-yellow-200 text-yellow-800 rounded-lg flex justify-center items-center"></div>
                <div className="h-24 bg-yellow-100 rounded-lg shadow-md"></div>
                <div className="h-24 bg-yellow-100 rounded-lg shadow-md"></div>
                <div className="h-24 bg-yellow-100 rounded-lg shadow-md"></div>
              </div>

              <div className="space-y-4">
                <div className="h-8 bg-purple-200 text-purple-800 rounded-lg flex justify-center items-center"></div>
                <div className="h-24 bg-purple-100 rounded-lg shadow-md"></div>
                <div className="h-24 bg-purple-100 rounded-lg shadow-md"></div>
              </div>

              <div className="space-y-4">
                <div className="h-8 bg-green-200 text-green-800 rounded-lg flex justify-center items-center"></div>
                <div className="h-24 bg-green-100 rounded-lg shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
