"use client";
import React, { useState } from "react";

const WeekCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const getWeekDates = (date: Date): Date[] => {
    const weekDays: Date[] = [];
    const dayOfWeek = date.getDay();
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - ((dayOfWeek + 1) % 7));

    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(weekStart);
      currentDay.setDate(weekStart.getDate() + i);
      weekDays.push(currentDay);
    }

    return weekDays;
  };

  const times = [
    ...Array.from({ length: 12 }, (_, i) => {
      const hour = 9 + i;
      const period = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour > 12 ? hour - 12 : hour;
      return `${formattedHour}:00 ${period}`;
    }),
    ...Array.from({ length: 8 }, (_, i) => {
      const hour = i + 1;
      return `${hour}:00 AM`;
    }),
  ];

  const days = getWeekDates(currentDate);

  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  return (
    <div className="w-[855px] h-[500px] py-1 rounded-lg shadow-md border border-gray-300 bg-white">
      <div className="flex justify-end p-4 bg-white shadow-lg rounded-t-lg">
        <button
          onClick={handlePreviousWeek}
          className="text-gray-600 hover:text-gray-800 px-3"
        >
          &lt;
        </button>

        <span className="font-bold text-lg">
          {currentDate.toDateString() === new Date().toDateString()
            ? "This Week"
            : `${days[0].toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${days[days.length - 1].toLocaleDateString("en-US", { month: "long", day: "numeric" })}`}
        </span>

        <button
          onClick={handleNextWeek}
          className="text-gray-600 hover:text-gray-800 px-3"
        >
          &gt;
        </button>
      </div>

      <div className="overflow-y-auto h-[calc(100%-64px)] hide-scrollbar">
        <div className="grid grid-cols-[50px,repeat(7,1fr)] border-t border-gray-300">
          <div className="border border-gray-300 bg-gray-100"></div>

          {days.map((day, index) => (
            <div
              key={index}
              className="text-center border border-gray-300 bg-gray-100 font-light"
            >
              {`${day.toLocaleString("en-US", { weekday: "short" })} ${day.getDate()}`}
            </div>
          ))}
          {times.map((time) => (
            <React.Fragment key={time}>
              <div className="border border-gray-300 text-right p-1 bg-gray-200 w-[50px] text-xs text-gray-500 font-bold">
                {time}
              </div>

              {days.map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-300 h-16 hover:bg-gray-200 transition-colors duration-200"
                ></div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekCalendar;
