"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface CalendarContextType {
    chosenDate: Date | string | number;
    setChosenDate: React.Dispatch<React.SetStateAction<Date | string | number >>;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

type ContextProps = {
  children: ReactNode;
};

const CalenderContextProvider = ({ children }: ContextProps) => {
    const [chosenDate, setChosenDate] = useState<Date | string | number>("");

  return (
    <CalendarContext.Provider value={{ chosenDate, setChosenDate }}>
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendarContext = () => {
    const context = useContext(CalendarContext);
    if (context === undefined) {
      throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
  };

export { useCalendarContext, CalenderContextProvider };
