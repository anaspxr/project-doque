"use client";

import Spinner from "../spinner/spinner"; // Adjust the import path as necessary

export default function ReadyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-black mb-4">Your Board Is Ready</h1>
      <Spinner />
    </div>
  );
}
