"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import {
  createTask,
  deleteList,
  updateList,
} from "@/lib/store/thunks/tasks-thunks";
import { TaskRow } from "@/types/spaces";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { ToastAction } from "../ui/toast";
import { toast } from "@/hooks/use-toast";
import ColorSelector from "../boards/color-box";
import { AlertConfirm } from "../ui/alert-confirm";
import { Button } from "../ui/button";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { SortableItem } from "@/components/task-list/task-list-container";

type StatusColumnProps = {
  workSpaceId: string;
  spaceId: string;
  label: string;
  id: string;
  color?: string;
  tasks: TaskRow[];
};

type NewTask = {
  title: string;
};

const StatusColumn: React.FC<StatusColumnProps> = ({
  workSpaceId,
  spaceId,
  label,
  id,
  color,
  tasks,
}) => {
  const dispatch = useAppDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(label);
  const [newTask, setNewTask] = useState<NewTask>({ title: "" });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ title: e.target.value });
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleCreateTask = async () => {
    if (newTask.title.trim()) {
      await dispatch(
        createTask({
          spaceId,
          listId: id,
          taskData: newTask,
          onSuccess: () => setNewTask({ title: "" }),
        })
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCreateTask();
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLabel(e.target.value);
  };

  const handleSaveLabel = () => {
    setIsEditing(false);
    dispatch(
      updateList({
        spaceId,
        listId: id,
        listData: { name: currentLabel },
        onSuccess() {
          setIsEditing(false);
          toast({ description: "List updated" });
        },
        onError(error) {
          toast({
            title: "Couldn't update list",
            description: error,
            action: (
              <ToastAction onClick={handleSaveLabel} altText="Try again">
                Try again
              </ToastAction>
            ),
          });
        },
      })
    );
  };

  const handleLabelBlur = () => {
    handleSaveLabel();
  };

  const handleLabelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveLabel();
    }
  };

  const currentTasks = tasks?.filter((task) => task.status === id);

  const handleDeleteList = () => {
    dispatch(
      deleteList({
        spaceId,
        listId: id,
        onSuccess: () => toast({ description: "List deleted" }),
      })
    );
  };

  const handleEditLabelClick = () => {
    setIsEditing(true);
    setCurrentLabel(label);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="w-full sm:w-[500px] py-1">
      <div className="flex items-center justify-between py-1 rounded-lg shadow">
        <div className="flex ">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleExpand}
            className="text-gray-500 focus:outline-none">
            {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
          </Button>
          <SortableItem id={id}>
            <span
              className="flex-1 ml-2 inline-flex items-center px-4 py-1 rounded-xl text-white"
              style={{ backgroundColor: color }}>
              {isEditing ? (
                <div className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentLabel}
                    onChange={handleLabelChange}
                    onBlur={handleLabelBlur}
                    onKeyDown={handleLabelKeyDown}
                    className="w-full bg-transparent text-white focus:outline-none"
                  />
                  <button
                    onClick={handleSaveLabel}
                    className="text-sm border border-gray-300 rounded bg-gray-200 text-gray-700">
                    Enter
                  </button>
                </div>
              ) : (
                <>
                  <span className="mr-2 h-2 w-4 rounded border-2 border-white bg-white"></span>
                  {currentLabel}
                </>
              )}
            </span>
          </SortableItem>
        </div>
        <div className="px-1 flex justify-center gap-2">
          <div
            className="cursor-pointer border rounded-md p-1 dark:border-none dark:hover:bg-gray-800"
            onClick={handleEditLabelClick}>
            <FaEdit  />
          </div>
          <ColorSelector currentColor={color} listId={id} name={currentLabel} />
          <AlertConfirm
            message="Are you sure you want to delete this List?"
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
      {isExpanded && (
        <div>
          {currentTasks?.map((task) => (
            <Link
              href={`/w/${workSpaceId}/spaces/${spaceId}/1?task=${task.id}&list=${id}`}
              key={task.id}>
              <div className="max-w-fit ml-6 py-2">
                <span
                  className="mr-2 w-fit rounded border-2 border-black"
                  style={{ backgroundColor: color }}></span>
                {task.title}
              </div>
            </Link>
          ))}
          <div className="max-w-full flex">
            <div className="ml-5 text-gray-400">
              <input
                type="text"
                value={newTask.title}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="+ Assign task..."
                className="w-[120px] ml-3 my-2 focus:outline-none"
              />
            </div>
            <div
              className="mt-2 h-6 text-sm px-1 border border-gray-300 text-gray-400 rounded cursor-pointer"
              onClick={handleCreateTask}>
              Enter
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusColumn;
