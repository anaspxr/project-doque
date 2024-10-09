"use client";
import Calendar from "@/components/workspace/calendar/calendar";
import MonthCalendar from "@/components/workspace/calendar/month-calendar";
import WeekCalendar from "@/components/workspace/calendar/week-calendar";
import React, { useState } from "react";

type Toggle = "Day" | "Week" | "Month";

function Page() {
  const [activeTab, setActiveTab] = useState<Toggle>("Day");
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-gray-100 flex justify-end pr-10">
      <div>
        <div className="py-3 w-3/3 flex justify-between">
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
                  onClick={() => setActiveTab(tab as "Day" | "Week" | "Month")}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        {activeTab === "Day" ? (
          <Calendar />
        ) : activeTab === "Week" ? (
          <WeekCalendar />
        ) : (
          <MonthCalendar />
        )}
      </div>
    </div>
  );
}

export default Page;
