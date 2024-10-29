"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { MouseEvent, useEffect, useMemo, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { Task, TaskFormValues } from "@/types/spaces";
import { useToast } from "@/hooks/use-toast";
import { IoTrashOutline } from "react-icons/io5";
import clsx from "clsx";
import { Input } from "../ui/input";
import AssignTaskToMembers from "./task-form/task-assign-members";
import TaskDescription from "./task-form/task-description";
import DueDatePicker from "./task-form/due-date-picker";
import { AlertConfirm } from "../ui/alert-confirm";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { deleteTask, updateTask } from "@/lib/store/thunks/tasks-thunks";
import { ToastAction } from "../ui/toast";
import axiosInstance from "@/utils/axios";
import { axiosErrorCatch } from "@/utils/axiosErrorCatch";
import PrioritySelector from "./task-form/priority-selector";
import StatusSelector from "./task-form/status-selector";
import moment from "moment";
import { XIcon } from "lucide-react";
import TaskDetailsSkeleton from "./task-details-skeleton";

export default function TaskDetails({
  taskId,
  listId,
}: {
  taskId: string;
  listId: string;
}) {
  const [data, setData] = useState<Task | null>(null);
  const [taskDetailsLoading, setInitialLoading] = useState(true);
  const [titleEditOpen, setTitleEditOpen] = useState(false);
  const [values, setValues] = useState<TaskFormValues | null>(null);

  const initialData = useMemo(() => {
    return JSON.stringify({
      title: data?.title,
      description: data?.description,
      assignedTo: data?.assignedTo,
      priority: data?.priority,
      dueDate: data?.dueDate
        ? moment(data?.dueDate).format("YYYY-MM-DDTHH:mm")
        : undefined,
      status: data?.status,
    });
  }, [data]);

  const changesMade = useMemo(() => {
    return initialData !== JSON.stringify(values);
  }, [initialData, values]);

  const { toast } = useToast();

  const router = useRouter();
  const { spaceId }: { spaceId: string } = useParams();
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    setInitialLoading(true);

    const getTaskDetails = async () => {
      try {
        const { data: responseData } = await axiosInstance.get(
          `/space/${spaceId}/lists/${listId}/tasks/${taskId}`
        );
        const data = responseData.data;
        setData(data);
        setValues({
          title: data.title,
          description: data.description,
          assignedTo: data.assignedTo,
          priority: data.priority,
          dueDate: data.dueDate
            ? moment(data.dueDate).format("YYYY-MM-DDTHH:mm")
            : undefined,
          status: data.status,
        });
      } catch (error) {
        toast({
          title: "Error fetching task details!!",
          description: axiosErrorCatch(error),
        });
        router.push(pathname);
      } finally {
        setInitialLoading(false);
      }
    };

    getTaskDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskId, listId]);

  useEffect(() => {
    // When the user clicks outside or press escape key
    // remove the taskId from the URL so the user can navigate back (close the popup)
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        router.push(pathname);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading.updateTask) {
      toast({ title: "Saving changes.." });
    }

    if (loading.deleteTask) {
      toast({ title: "Deleting task.." });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading.updateTask, loading.deleteTask]);

  const handleUpdateTask = async () => {
    const payload = {
      title: values?.title,
      description: values?.description,
      assignedTo: values?.assignedTo,
      dueDate: values?.dueDate,
      priority: values?.priority,
      status: values?.status === data?.status ? undefined : values?.status,
    };
    dispatch(
      updateTask({
        spaceId,
        listId,
        taskId,
        taskData: payload,
        onSuccess() {
          setData((prev) => ({ ...prev!, ...values }));
          toast({ title: "Task updated successfully" });
          if (values?.status !== data?.status) {
            router.push(`${pathname}?task=${taskId}&list=${values?.status}`);
          }
        },
        onError(error) {
          toast({
            title: "Error Updating task",
            description: error,
            action: (
              <ToastAction onClick={handleUpdateTask} altText="Try again">
                Try again
              </ToastAction>
            ),
          });
        },
      })
    );
  };

  const handleTaskDelete = async () => {
    dispatch(
      deleteTask({
        spaceId,
        listId,
        taskId,
        onSuccess() {
          toast({ title: "Task deleted successfully" });
          router.push(pathname);
        },
        onError(error) {
          toast({
            title: "Error deleting task",
            description: error,
            action: (
              <ToastAction onClick={handleTaskDelete} altText="Try again">
                Try again
              </ToastAction>
            ),
          });
        },
      })
    );
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (!target.closest(".task-details-section")) {
      // Remove the taskId from the URL so the user can navigate back (close the popup
      router.push(pathname);
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed bg-black top-0 left-0 h-screen w-screen bg-opacity-50 z-50">
      <div className="absolute w-full h-full flex justify-center items-center">
        {taskDetailsLoading && <TaskDetailsSkeleton />}
        {data && (
          <Card className="task-details-section overflow-hidden sm:w-[600px]">
            <div
              className={clsx("h-10 flex justify-end items-center px-2", {
                "bg-red-300": values?.priority === "high",
                "bg-yellow-200": values?.priority === "medium",
                "bg-green-300": values?.priority === "low",
              })}>
              <Button
                title="Close"
                size="icon"
                variant="ghost"
                className="hover:bg-black hover:bg-opacity-20 text-zinc-700 dark:text-zinc-700 dark:hover:text-black dark:hover:bg-opacity-20 p-1 h-8 w-8"
                onClick={() => router.push(pathname)}>
                <XIcon className="" />
              </Button>
            </div>

            <CardHeader>
              <div className="flex justify-between flex-wrap">
                <CardTitle className="flex gap-x-4 items-center">
                  <div onClick={() => setTitleEditOpen(true)}>
                    {!titleEditOpen && (
                      <h2 className="flex items-center cursor-text justify-between gap-2 min-w-40 hover:border rounded-md px-3 py-2">
                        {values?.title}
                        <CiEdit className="text-zinc-800 flex-shrink-0 dark:text-zinc-200" />
                      </h2>
                    )}
                    {titleEditOpen && (
                      <Input
                        required
                        type="text"
                        autoFocus
                        value={values?.title}
                        onChange={(e) => {
                          setValues((prev) => ({
                            ...prev!,
                            title: e.target.value,
                          }));
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") setTitleEditOpen(false);
                        }}
                        onBlur={() => setTitleEditOpen(false)}
                      />
                    )}
                  </div>
                </CardTitle>
                <div className="flex flex-wrap gap-x-2 items-center px-3">
                  <p className="text-zinc-700 text-xs">Created At</p>
                  <div className="flex items-center gap-2 text-sm">
                    <FaRegClock />
                    {data.createdAt && (
                      <span>
                        {new Date(data.createdAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="h-0.5 bg-zinc-400 rounded-full"></div>
            </CardHeader>

            <CardContent className="max-h-[350px] overflow-y-auto">
              <TaskDescription
                description={values?.description}
                setDescription={(description) =>
                  setValues((prev) => ({
                    ...prev!,
                    description,
                  }))
                }
              />
              <div className="flex justify-between my-4 flex-wrap gap-2">
                <DueDatePicker
                  dueDate={values?.dueDate}
                  setDueDate={(dueDate) =>
                    setValues((prev) => ({
                      ...prev!,
                      dueDate,
                    }))
                  }
                />

                <div>
                  <p>Priority</p>
                  <PrioritySelector
                    priority={values?.priority || "medium"}
                    setPriority={(priority) =>
                      setValues((prev) => ({
                        ...prev!,
                        priority,
                      }))
                    }
                  />
                </div>
                <div>
                  <p>Status</p>
                  <StatusSelector
                    status={values?.status}
                    setStatus={(status) =>
                      setValues((prev) => ({
                        ...prev!,
                        status,
                      }))
                    }
                  />
                </div>
              </div>
              <AssignTaskToMembers
                existingMembers={values?.assignedTo || []}
                assignMember={(member) =>
                  setValues((prev) => ({
                    ...prev,
                    assignedTo: [...(prev?.assignedTo || []), member],
                  }))
                }
                removeMember={(member) =>
                  setValues((prev) => ({
                    ...prev,
                    assignedTo: prev?.assignedTo?.filter((m) => m !== member),
                  }))
                }
              />
            </CardContent>

            <div className="h-0.5 bg-zinc-300 my-2 rounded-full"></div>

            <CardFooter className="flex justify-between items-end mt-4">
              <AlertConfirm
                confirmText="Delete Task"
                onConfirm={handleTaskDelete}
                message="Are you sure you want to delete this task?"
                description="This action is permanent and cannot be undone">
                <Button size="sm" variant="destructive">
                  Delete task <IoTrashOutline />
                </Button>
              </AlertConfirm>
              <Button
                onClick={handleUpdateTask}
                size="sm"
                disabled={!changesMade || loading.updateTask}
                className="col-start-4 self-end">
                {loading.updateTask ? "Saving.." : "Save changes"}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
