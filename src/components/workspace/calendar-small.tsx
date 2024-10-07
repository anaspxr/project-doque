"use client";
import React, { useState, useRef, useEffect } from "react";
import { useCalendarContext } from "@/contexts/CalenderContext";
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
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const CalendarSmall: React.FC = () => {
  const { chosenDate, setChosenDate } = useCalendarContext();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isYearPickerOpen, setYearPickerOpen] = useState(false);
  const [isMonthPickerOpen, setMonthPickerOpen] = useState(false);

  const monthPickerRef = useRef<HTMLDivElement>(null);
  const yearPickerRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - 50 + i);

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
    setChosenDate(newDate); // Update chosen date to reflect the selected year
    setYearPickerOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        monthPickerRef.current &&
        !monthPickerRef.current.contains(event.target as Node)
      ) {
        setMonthPickerOpen(false);
      }
      if (
        yearPickerRef.current &&
        !yearPickerRef.current.contains(event.target as Node)
      ) {
        setYearPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderHeader = () => (
    <div className="flex justify-between items-center py-3">
      <button onClick={prevMonth} className="text-gray-500">
        &#x276E;
      </button>
      <div className="flex space-x-4">
        <div className="relative inline-block">
          <div
            className="cursor-pointer p-2 rounded-lg"
            onClick={() => setMonthPickerOpen(!isMonthPickerOpen)}
          >
            {format(currentMonth, "MMMM")}
          </div>
          {isMonthPickerOpen && (
            <div
              ref={monthPickerRef} 
              className="absolute z-10 bg-white shadow-lg p-3 mt-1 rounded-lg w-40 max-h-60 overflow-y-scroll hide-scrollbar"
            >
              {months.map((month, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-blue-100 p-2 rounded-lg"
                  onClick={() => onMonthSelect(index)}
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative inline-block">
          <div
            className="cursor-pointer p-2 rounded-lg"
            onClick={() => setYearPickerOpen(!isYearPickerOpen)}
          >
            {format(currentMonth, "yyyy")}
          </div>
          {isYearPickerOpen && renderYearPicker()}
        </div>
      </div>
      <button onClick={nextMonth} className="text-gray-500">
        &#x276F;
      </button>
    </div>
  );

  const renderYearPicker = () => (
    <div
      ref={yearPickerRef}
      className="absolute z-10 bg-white shadow-lg p-3 mt-1 rounded-lg w-40 max-h-60 overflow-y-scroll hide-scrollbar"
    >
      {years.map((year) => (
        <div
          key={year}
          className={`cursor-pointer hover:bg-blue-100 p-2 rounded-lg flex justify-between items-center ${
            year === currentMonth.getFullYear() ? "font-bold" : ""
          }`}
          onClick={() => onYearSelect(year)}
        >
          <span>{year}</span>
          {year === currentMonth.getFullYear() && (
            <span className="text-blue-500">&#10003;</span> // Tick mark for selected year
          )}
        </div>
      ))}
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
                : isSameDay(day, chosenDate)
                ? "bg-black text-white rounded-full"
                : isToday(day)
                ? "bg-blue-500 text-white rounded-full"
                : "text-gray-700 hover:bg-gray-200 rounded-full"
            }`}
            onClick={() => setChosenDate(cloneDay)}
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
    <div className="w-80 bg-white p-5 rounded-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default CalendarSmall;
