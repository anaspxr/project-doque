"use client";

import { sections, tasksData } from "@/consts/spaces";
import { Section, Task } from "@/types/spaces";
import { UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import React, { createContext, useContext, useState } from "react";

const BoardsContext = createContext<{
  columns: Section[];
  setColumns: React.Dispatch<React.SetStateAction<Section[]>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  createColumn: () => void;
  createTask: (sectionId: string) => void;
  handleDelete: (id: string) => void;
  updateSectionTitle: (id: string, newTitle: string) => void;
  moveColumn: (activeId: UniqueIdentifier, overId: UniqueIdentifier) => void;
  swapTasksInSameColumn: (
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
  ) => void;
  moveTaskToColumn: (
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
  ) => void;
} | null>(null);

export const useBoards = () => {
  const context = useContext(BoardsContext);
  if (!context) {
    throw new Error("useBoards must be used within a BoardsProvider");
  }
  return context;
};

export default function BoardsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [columns, setColumns] = useState<Section[]>(sections);
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const createColumn = () => {
    setColumns((prevColumns) => [
      ...prevColumns,
      { id: Date.now().toString(), title: "New Column", color: "bg-blue-500" },
    ]);
  };

  const createTask = (sectionId: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      content: "New Task",
      section: sectionId,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id: string) => {
    setColumns((prevColumns) =>
      prevColumns.filter((column) => column.id !== id)
    );
  };

  const updateSectionTitle = (id: string, newTitle: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === id ? { ...column, title: newTitle } : column
      )
    );
  };

  const moveColumn = (activeId: UniqueIdentifier, overId: UniqueIdentifier) => {
    setColumns((prevColumns) => {
      // Find the index of the active and over columns and move the active column to the over column's position
      const activeColumnIndex = prevColumns.findIndex(
        (column) => column.id === activeId
      );
      const overColumnIndex = prevColumns.findIndex(
        (column) => column.id === overId
      );
      return arrayMove(prevColumns, activeColumnIndex, overColumnIndex);
    });
  };

  const swapTasksInSameColumn = (
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
  ) => {
    setTasks((tasks) => {
      console.log("triggerd 1");

      const activeIndex = tasks.findIndex((task) => task.id === activeId);
      const overIndex = tasks.findIndex((task) => task.id === overId);
      if (tasks[activeIndex].section !== tasks[overIndex].section) {
        tasks[activeIndex].section = tasks[overIndex].section;
      }

      return arrayMove(tasks, activeIndex, overIndex);
    });
  };

  const moveTaskToColumn = (
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
  ) => {
    setTasks((tasks) => {
      console.log("triggerd 2");
      const activeIndex = tasks.findIndex((task) => task.id === activeId);

      tasks[activeIndex].section = overId.toString();

      return arrayMove(tasks, activeIndex, activeIndex);
    });
  };

  const values = {
    columns,
    setColumns,
    tasks,
    setTasks,
    createColumn,
    createTask,
    handleDelete,
    updateSectionTitle,
    moveColumn,
    swapTasksInSameColumn,
    moveTaskToColumn,
  };
  return (
    <BoardsContext.Provider value={values}>{children}</BoardsContext.Provider>
  );
}
