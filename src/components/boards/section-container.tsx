import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "../ui/button";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import { Input } from "../ui/input";
import { Column, TaskRow } from "@/types/spaces";
import TaskCard from "./task-card";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { NewTaskButton } from "./new-task-button";
import { AlertConfirm } from "../ui/alert-confirm";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { deleteList, updateList } from "@/lib/store/thunks/tasks-thunks";
import { ToastAction } from "../ui/toast";
import ColorSelector from "./color-box";

export default function SectionContainer({
  section,
  tasks,
  isOverLay = false,
}: {
  section: Column;
  isOverLay?: boolean;
  tasks: TaskRow[];
}) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(section.title);

  const { error, loading } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const { spaceId }: { spaceId: string } = useParams();

  const { toast } = useToast();

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
    scrollbarGutter: "stable",
    border: `1px solid ${section.color || "#FEE485"}`,
  };

  useEffect(() => {
    if (error.deleteList) {
      toast({
        title: "Couldn't delete list",
        description: error.deleteList + "!!",
        action: (
          <ToastAction onClick={handleDeleteList} altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error.deleteList, error.updateList]);

  const handleUpdateTitle = async () => {
    if (value === section.title) return setEditMode(false);
    dispatch(
      updateList({
        spaceId,
        listId: section.id,
        listData: { name: value },
        onSuccess() {
          setEditMode(false);
          toast({ description: "List updated" });
        },
        onError(error) {
          toast({
            title: "Couldn't update list",
            description: error,
            action: (
              <ToastAction onClick={handleUpdateTitle} altText="Try again">
                Try again
              </ToastAction>
            ),
          });
        },
      })
    );
  };

  const handleDeleteList = () => {
    dispatch(
      deleteList({
        spaceId,
        listId: section.id,
        onSuccess: () => toast({ description: "List deleted" }),
      })
    );
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      className={`relative sm:w-64 w-40 h-[600px]  flex-shrink-0 p-2 rounded-md cursor-default shadow-sm border overflow-y-auto bg-white dark:bg-zinc-900
       ${isDragging && !isOverLay && "opacity-50"} `}
      {...attributes}>
      <div className="flex gap-2 cursor-pointer" {...listeners}>
        {!editMode ? (
          <h2
            onClick={() => setEditMode(true)}
            style={{ color: section.color, background: section.color + "1f" }}
            className="font-semibold cursor-text hover:border rounded-md px-3 py-1 ">
            {section.title}
          </h2>
        ) : (
          editMode && (
            <Input
              disabled={loading.updateList}
              type="text"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleUpdateTitle();
              }}
              onBlur={() => handleUpdateTitle()}
            />
          )
        )}
      </div>

      <div className="flex justify-between items-center">
        <NewTaskButton listId={section.id}>
          <Button
            size="sm"
            variant="outline"
            className="flex sm:gap-2 items-center my-2 ">
            <span className="hidden sm:inline">Create Task</span>{" "}
            <FaPlus size={10} />
          </Button>
        </NewTaskButton>
        <div className="flex gap-2">
          <ColorSelector
            currentColor={section.color}
            listId={section.id}
            name={section.title}
          />
          <AlertConfirm
            message="Are you sure you want to delete this section?"
            description="All tasks in this section will be deleted!!"
            confirmText="Delete"
            onConfirm={handleDeleteList}>
            <Button
              variant="outline"
              size="icon"
              className="hover:text-red-700 h-6 w-6">
              <FaTrash />
            </Button>
          </AlertConfirm>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
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
