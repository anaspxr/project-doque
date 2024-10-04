"use client";
import React, { useState } from "react";
import CalendarSmall from "./calendar-small";
import DayCalendar from "./day-calendar";

function Calendar() {
  const [activeTab, setActiveTab] = useState<"Day" | "Week" | "Month">("Day");
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-gray-100">
      <div className="">
        <div className="py-3 w-2/3 flex justify-between">
          <div>
            <h1 className="font-extrabold text-3xl">Calendar</h1>
            <span>
              <i>{formattedDate}</i>
            </span>
          </div>
          <div className="p-3">
            <div className="inline-flex bg-gray-100 rounded-2xl  border border-gray-300 border-2">
              {["Day", "Week", "Month"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-xl focus:outline-none ${
                    activeTab === tab ? "bg-gray-300 text-black" : "text-black "
                  }`}
                  onClick={() => setActiveTab(tab as "Day" | "Week" | "Month")}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        <main className="flex justify-center items-center w-2/3 rounded-lg shadow-lg bg-white p-6">
          <div className="flex space-x-4">
            <DayCalendar />
            <CalendarSmall />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Calendar;
