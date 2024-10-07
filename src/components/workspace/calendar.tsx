"use client";
import React from "react";
import CalendarSmall from "./calendar-small";
import DayCalendar from "./day-calendar";

export default function Calendar() {

  return (
    <div>
      <div className="w-[855px] h-[500px] py-1 rounded-lg  bg-white">
        <main className="flex justify-center items-center w-2/3 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between ml-[300px] ">
            <DayCalendar />
            <CalendarSmall />
          </div>
        </main>
      </div>
    </div>
  );
}

