"use client"
import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

const MonthCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const getDaysInMonth = () => {
    const daysInMonth = [];
    const firstDayOfMonth = currentDate.startOf('month').day(); // Get the first day of the month
    const daysInCurrentMonth = currentDate.daysInMonth();

    const previousMonth = currentDate.subtract(1, 'month');
    const daysInPreviousMonth = previousMonth.daysInMonth();

    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      daysInMonth.push({
        day: daysInPreviousMonth - (firstDayOfMonth - 2) + i,
        isCurrentMonth: false,
      });
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      daysInMonth.push({ day, isCurrentMonth: true });
    }

    const remainingSpots = 7 - (daysInMonth.length % 7);
    if (remainingSpots < 7) {
      for (let day = 1; day <= remainingSpots; day++) {
        daysInMonth.push({
          day,
          isCurrentMonth: false,
        });
      }
    }

    return daysInMonth;
  };

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  return (
    <div className="w-[855px] h-[500px] py-1 border border-2  overflow-y-scroll hide-scrollbar bg-white">
      <div className="flex items-center justify-end p-4 bg-white shadow-md rounded-t-lg">
        <button
          onClick={handlePreviousMonth}
          className="text-gray-600 hover:text-gray-800 px-3"
        >
          &lt;
        </button>

        <span className="font-bold text-lg text-gray-800">
          {currentDate.isSame(dayjs(), 'month') ? 'This Month' : currentDate.format('MMMM YYYY')}
        </span>

        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-800 px-3"
        >
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-[1px] border-t border-gray-300 shadow-md bg-gray-100">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div
            key={index}
            className="text-center p-2 bg-gray-100 text-gray-600 font-semibold"
          >
            {day}
          </div>
        ))}

        {getDaysInMonth().map((dayInfo, index) => (
          <div
            key={index}
            className={`relative h-20 border border-gray-200 ${
              dayInfo.isCurrentMonth
                ? 'bg-white hover:bg-gray-50'
                : 'bg-gray-50 text-gray-400'
            }`}
          >
            <span className="absolute top-2 right-2 text-sm font-bold">
              {dayInfo.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthCalendar;
