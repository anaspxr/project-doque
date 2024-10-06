import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "../ui/button";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { useMemo, useState } from "react";
import { Input } from "../ui/input";
import { Section, Task } from "@/types/spaces";
import TaskCard from "./task-card";

export default function SectionContainer({
  section,
  deleteSection = () => {},
  updateSectionTitle = () => {},
  createTask = () => {},
  tasks,
  isOverLay = false,
}: {
  section: Section;
  deleteSection?: (id: string) => void;
  updateSectionTitle?: (id: string, title: string) => void;
  createTask?: (id: string) => void;
  isOverLay?: boolean;
  tasks: Task[];
}) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const {
    setNodeRef,
    isDragging,
    listeners,
    transform,
    transition,
    attributes,
  } = useSortable({
    id: section.id,
    data: {
      type: "section",
      section,
    },
    disabled: editMode,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: `1px solid ${section.color || "#FEE485"}`,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      className={` w-72 h-[600px] flex-shrink-0 p-4 rounded-md cursor-default shadow-sm border overflow-x-auto bg-white
       ${isDragging && !isOverLay && "opacity-50"} `}
      {...attributes}>
      <div
        className="flex justify-between p-2 gap-2 cursor-pointer"
        {...listeners}>
        <h2
          onClick={() => setEditMode(true)}
          className="font-semibold bg-zinc-200 rounded-md p-1 text-center px-4">
          {!editMode && section.title}
          {editMode && (
            <Input
              className="bg-white"
              type="text"
              autoFocus
              value={section.title}
              onChange={(e) => {
                updateSectionTitle(section.id, e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") setEditMode(false);
              }}
              onBlur={() => setEditMode(false)}
            />
          )}
        </h2>
        <Button
          onClick={() => {
            deleteSection(section.id);
          }}
          variant="outline"
          size="icon">
          <FaTrash />
        </Button>
      </div>

      <Button
        size="sm"
        variant="outline"
        onClick={() => createTask(section.id)}
        className="flex gap-2 items-center my-2 ">
        Create new task <FaPlus size={10} />
      </Button>
      <div className="flex flex-col gap-2">
        <SortableContext
          items={tasksIds}
          strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}
