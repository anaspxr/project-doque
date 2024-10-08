"use client";

import { FaTasks } from "react-icons/fa";

interface Option {
  label: string;
}

interface OnboardingProps {
  onContinue: (option: string) => void;
}

const options: Option[] = [
  { label: "Personal Tasks" },
  { label: "Work Projects" },
  { label: "Team Collaboration" },
  { label: "Other" },
];

export default function Onboarding({ onContinue }: OnboardingProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="absolute top-0 left-0 w-full py-6 flex justify-between items-center px-10">
        <div className="flex items-center space-x-2">
          <FaTasks className="text-2xl text-black" />
          <h1 className="font-megrim text-black font-bold text-2xl">DOQUE</h1>
        </div>
      </header>

      <div className="flex flex-grow justify-between items-center mt-20 px-24">
        <div className="w-full md:w-1/3 p-8 bg-transparent space-y-8">
          <h2 className="text-1xl text-black text-center">
            What type of tasks are you managing?
          </h2>

          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.label}
                onClick={() => onContinue(option.label)}
                className="w-full py-3 px-6 text-left bg-transparent text-black text-center rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
              >
                {option.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => onContinue("Skipped")}
            className="mt-6 text-gray-500 hover:text-gray-800 underline text-center"
          >
            Skip
          </button>
        </div>

        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img
            src="/images/onboarding1.jpg"
            alt="Onboarding Illustration"
            className="rounded-full shadow-lg w-72 h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
