"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
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
import { useParams, useRouter, useSearchParams } from "next/navigation";

import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchCalendarData } from "@/lib/store/features/calendar-slice";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];




const CalendarSmall = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch()
  const {allTasks} = useAppSelector(state=>state.calendar)
  const router = useRouter();
  const {workSpaceId} : {workSpaceId: string} = useParams()
  const searchParams = useSearchParams();
  const chosenDateParam = searchParams.get("date");
  const chosenDate = chosenDateParam
    ? moment(chosenDateParam, "MM-DD").toDate()
    : new Date();

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
    setYearPickerOpen(false);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const setChosenDate = (date: Date) => {
    const formattedDate = moment(date).format("MM-DD");
    router.push(`/w/${workSpaceId}/calendar?${createQueryString("date", formattedDate)}`);
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

  useEffect(()=> {
    dispatch(fetchCalendarData({workSpaceId}))
  },[workSpaceId,dispatch])

  const renderHeader = () => (
    <div className="flex justify-between items-center min-w-[300px] py-5 dark:text-white">
      <button onClick={prevMonth} className="text-gray-500 hover:text-black">
        &#x276E;
      </button>
      <div className="flex space-x-5 items-center">
        <div className="relative inline-block">
          <div
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:text-black"
            onClick={() => setMonthPickerOpen(!isMonthPickerOpen)}>
            {format(currentMonth, "MMMM")}
          </div>
          {isMonthPickerOpen && (
            <div
              ref={monthPickerRef}
              className="absolute z-10 right-1 bg-white shadow-lg p-3 mt-1 rounded-lg w-30 max-h-60 overflow-y-scroll dark:bg-black">
              {months.map((month, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-blue-100 p-2 rounded-lg dark:hover:text-black"
                  onClick={() => onMonthSelect(index)}>
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative inline-block">
          <div
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:text-black"
            onClick={() => setYearPickerOpen(!isYearPickerOpen)}>
            {format(currentMonth, "yyyy")}
          </div>
          {isYearPickerOpen && renderYearPicker()}
        </div>
      </div>
      <button onClick={nextMonth} className="text-gray-500 hover:text-black">
        &#x276F;
      </button>
    </div>
  );

  const renderYearPicker = () => (
    <div
      ref={yearPickerRef}
      className="absolute z-10 bg-white shadow-lg p-3 mt-1 right-1 rounded-lg w-30 max-h-60 overflow-y-scroll dark:bg-black dark:text-white">
      {years.map((year) => (
        <div
          key={year}
          className={`cursor-pointer hover:bg-blue-100 p-2 rounded-lg flex justify-between items-center dark:hover:bg-gray-100 dark:hover:text-black ${
            year === currentMonth.getFullYear() ? "font-bold" : ""
          }`}
          onClick={() => onYearSelect(year)}>
          <span>{year}</span>
          {year === currentMonth.getFullYear() && (
            <span className="text-blue-500">&#10003;</span>
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
        <div key={i} className="text-center text-gray-500 text-xs dark:text-white">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
  
    const rows = [];
    let days = [];
    let day = startDate;
  
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
  
        // Find tasks that are due on this day
        const tasksForDay = allTasks.filter(task =>
          isSameDay(new Date(task.dueDate), cloneDay)
        );
  
        const taskCount = tasksForDay.length;
  
        days.push(
          <div
            key={day.toString()}
            className={`relative flex flex-col items-center justify-center py-1 cursor-pointer min-h-[30px]  ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300 dark:text-gray-400"
                : isSameDay(day, chosenDate)
                ? "bg-black bg-opacity-10 text-white rounded-full dark:bg-gray-500 dark:text-white"
                : isToday(day) 
                ? "bg-blue-500 text-white rounded-full "
                : "text-gray-700 hover:bg-gray-200 rounded-full dark:text-white dark:hover:text-black"
            }`}
            onClick={() => setChosenDate(cloneDay)}
          >
            {taskCount > 0 && (
              <div className="absolute top-0 right-1 mt-2 mr-1 flex items-center justify-center w-3 h-3 rounded-full bg-red-500 text-white text-[8px]">
                {taskCount}
              </div>
            )}
            <span className="text-base mt-2">{format(day, "d")}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };
    

  return (
    <div className={`${className} p-2 rounded-lg`}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default CalendarSmall;
