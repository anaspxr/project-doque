"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sections, tasksData } from "@/consts/spaces";
import { useMemo, useState } from "react";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import SectionContainer from "./section-container";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { Section, Task } from "@/types/spaces";
import TaskCard from "./task-card";

export default function BoardsContainer() {
  const [activeColumn, setActiveColumn] = useState<Section | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [columns, setColumns] = useState<Section[]>(sections);
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const columnsIds = useMemo(
    () => columns.map((column) => column.id),
    [columns]
  );

  const handleDragStart = (event: DragStartEvent) => {
    const active = event.active.data.current;
    if (active?.type === "section") {
      setActiveColumn(active.section);
      return;
    }
    if (active?.type === "task") {
      setActiveTask(active.task);
      return;
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveTask(null);
    const { active, over } = event;
    if (!over) {
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    setColumns((prevColumns) => {
      const activeColumnIndex = prevColumns.findIndex(
        (column) => column.id === activeId
      );
      const overColumnIndex = prevColumns.findIndex(
        (column) => column.id === overId
      );
      return arrayMove(prevColumns, activeColumnIndex, overColumnIndex);
    });
  };

  const handleDragOver = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const taskIsActive = active.data.current?.type === "task";
    const isOverATask = over.data.current?.type === "task";

    if (!taskIsActive) return;

    if (taskIsActive && isOverATask) {
      setTasks((tasks) => {
        console.log("triggerd 1");

        const activeIndex = tasks.findIndex((task) => task.id === activeId);
        const overIndex = tasks.findIndex((task) => task.id === overId);
        if (tasks[activeIndex].section !== tasks[overIndex].section) {
          tasks[activeIndex].section = tasks[overIndex].section;
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "section";

    if (taskIsActive && isOverAColumn) {
      setTasks((tasks) => {
        console.log("triggerd 2");
        const activeIndex = tasks.findIndex((task) => task.id === activeId);

        tasks[activeIndex].section = overId.toString();

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  };

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 20 pixels before activating
    activationConstraint: {
      distance: 20,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 100,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

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

  const addColumn = () => {
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

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}>
      <div>
        <Button
          onClick={addColumn}
          size="sm"
          variant="outline"
          className="flex gap-2 items-center my-2">
          Add Column <FaPlus size={10} />
        </Button>
        <div className="flex gap-4 w-screen overflow-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-white scrollbar-corner-transparent">
          <SortableContext
            items={columnsIds}
            strategy={horizontalListSortingStrategy}>
            {columns.map((section) => (
              <SectionContainer
                key={section.id}
                createTask={createTask}
                updateSectionTitle={updateSectionTitle}
                deleteSection={handleDelete}
                section={section}
                tasks={tasks.filter((task) => task.section === section.id)}
              />
            ))}
          </SortableContext>
        </div>
        <DragOverlay>
          {activeColumn ? (
            <SectionContainer
              section={activeColumn}
              tasks={tasks.filter((task) => task.section === activeColumn.id)}
            />
          ) : null}
          {activeTask ? <TaskCard task={activeTask} /> : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
