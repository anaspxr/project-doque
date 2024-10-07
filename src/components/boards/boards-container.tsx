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
import { useMemo, useState } from "react";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import SectionContainer from "./section-container";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { Section, Task } from "@/types/spaces";
import TaskCard from "./task-card";
import { useBoards } from "@/contexts/boards-context";

export default function BoardsContainer() {
  const [activeColumn, setActiveColumn] = useState<Section | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const {
    tasks,
    columns,

    createColumn,
    createTask,
    handleDelete,
    moveColumn,
    moveTaskToColumn,
    swapTasksInSameColumn,
    updateSectionTitle,
  } = useBoards();

  const columnsIds = useMemo(
    () => columns.map((column) => column.id),
    [columns]
  );

  const handleDragStart = (event: DragStartEvent) => {
    const active = event.active.data.current; // This is the active item that is being dragged
    if (active?.type === "section") {
      setActiveColumn(active.section); // if the active item is a section, set it as the active column
      return;
    }
    if (active?.type === "task") {
      setActiveTask(active.task); // if the active item is a task, set it as the active task
      return;
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveTask(null); // reset the active column and task
    const { active, over } = event;
    if (!over) {
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    moveColumn(activeId, overId); // move the column if the active item is a column
  };

  const handleDragOver = (event: DragEndEvent) => {
    // This function is called when the dragged item is over another item
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
      // If the active item is a task and the over item is a task, swap the positions of the tasks
      swapTasksInSameColumn(activeId, overId);
    }

    const isOverAColumn = over.data.current?.type === "section";

    if (taskIsActive && isOverAColumn) {
      // If the active item is a task and the over item is a column, move the task to the column
      moveTaskToColumn(activeId, overId);
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

  return (
    <DndContext
      id="dnd-context-id"
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}>
      <div className="w-full">
        <Button
          onClick={createColumn}
          size="sm"
          variant="outline"
          className="flex gap-2 items-center my-2">
          Add Column <FaPlus size={10} />
        </Button>
        <div className="flex gap-4 w-screen-lg overflow-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-white scrollbar-corner-transparent">
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
