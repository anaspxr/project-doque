"use client";
import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns";

const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const CalendarSmall: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | string | number>("");
  const [isYearPickerOpen, setYearPickerOpen] = useState(false);
  const [isMonthPickerOpen, setMonthPickerOpen] = useState(false);

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i); // Display last 5, next 5 years

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const onMonthSelect = (monthIndex: number) => {
    const newDate = new Date(currentMonth.getFullYear(), monthIndex, 1);
    setCurrentMonth(newDate);
    setMonthPickerOpen(false);
  };

  const onYearSelect = (year: number) => {
    const newDate = new Date(year, currentMonth.getMonth(), 1);
    setCurrentMonth(newDate);
    setYearPickerOpen(false);
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center py-3 relative">
      <button onClick={prevMonth} className="text-gray-500">
        &#x276E;
      </button>
      <div className="text-lg font-medium flex space-x-2">
        
        <div className="cursor-pointer" onClick={() => setMonthPickerOpen(!isMonthPickerOpen)}>
          {format(currentMonth, "MMMM")}
        </div>
        
        <div className="cursor-pointer" onClick={() => setYearPickerOpen(!isYearPickerOpen)}>
          {format(currentMonth, "yyyy")}
        </div>
      </div>
      <button onClick={nextMonth} className="text-gray-500">
        &#x276F;
      </button>

      
      {isMonthPickerOpen && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-lg">
          {months.map((month, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => onMonthSelect(index)}
            >
              {month}
            </div>
          ))}
        </div>
      )}

      
      {isYearPickerOpen && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-lg">
          {years.map((year) => (
            <div
              key={year}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => onYearSelect(year)}
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-gray-500 text-sm">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            key={day.toString()}
            className={`py-2 text-center cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300"
                : isSameDay(day, selectedDate)
                ? "bg-black text-white rounded-full"
                : isToday(day)
                ? "bg-blue-500 text-white rounded-full"
                : "text-gray-700 hover:bg-gray-200 rounded-full"
            }`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="w-80 bg-white p-5  rounded-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default CalendarSmall;
