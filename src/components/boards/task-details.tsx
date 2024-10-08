"use client";

import { useRouter, useParams } from "next/navigation";
import { useBoards } from "@/contexts/boards-context";
import { FiCreditCard } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TbCheckbox } from "react-icons/tb";
import StackedAvatars from "../ui/stacked-avatars";
import { Button } from "../ui/button";
import { MouseEvent, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { BsCardText } from "react-icons/bs";
import { Textarea } from "../ui/textarea";
import { ImAttachment } from "react-icons/im";

const members = [{}, {}, {}];

export default function TaskDetails({ taskId }: { taskId?: string }) {
  const { tasks } = useBoards();
  const router = useRouter();

  const { workSpaceId, spaceId, boardId } = useParams();

  if (!taskId) return null;
  const task = tasks.find((task) => task.id === taskId);
  if (!task) return null;

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (!target.closest("#task-card")) {
      // Remove the taskId from the URL so the user can navigate back (close the popup
      router.replace(`/w/${workSpaceId}/${spaceId}/${boardId[0]}`);
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed bg-black top-0 left-0 h-screen w-screen bg-opacity-50 z-40">
      <div className="absolute w-full h-full flex justify-center items-center">
        <Card id="task-card" className="overflow-hidden w-[600px]">
          <div
            className="h-16 flex justify-end items-end p-2"
            style={{ backgroundColor: task.color || "#FEE485" }}>
            <Button size="xs" variant="outline" className="rounded-full">
              Cover
            </Button>
          </div>

          <CardHeader>
            <CardTitle className="flex gap-4 items-center text-2xl">
              <FiCreditCard className="mt-1" /> {task.content}
            </CardTitle>
            <div className="h-0.5 bg-zinc-400 rounded-full"></div>

            <CardDescription>
              <div className="flex gap-8">
                <div>
                  <p>Members</p>
                  <div className="flex items-center gap-2">
                    <StackedAvatars members={members} size="sm" max={5} />
                    <Button variant="ghost" size="icon">
                      <CiCirclePlus size={20} />
                    </Button>
                  </div>
                </div>
                <div>
                  <p>Due Date</p>
                  <div className="flex items-center gap-2">
                    <FaRegClock className="text-zinc-500" />
                    <span>14 oct</span>
                  </div>
                </div>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <TaskDescription />
            <TaskAttachments />
            <div className="h-0.5 bg-zinc-300 my-2 rounded-full"></div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <p className="flex items-center gap-2">
              <FaRegClock className="text-zinc-500 hover:opacity-0 transition-opacity duration-300" />
              <span className="text-xs">14 oct</span>
            </p>
            <p className="flex gap-2 items-center">
              <TbCheckbox className="text-zinc-500" />
              <span className="text-xs"> 0/3</span>
            </p>
            <StackedAvatars members={members} size="sm" max={3} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function TaskDescription({ description }: { description?: string }) {
  const [editOpen, setEditOpen] = useState(false);
  const [value, setValue] = useState(description);

  return (
    <div>
      <span className="flex items-center text-lg gap-2">
        <BsCardText className="mt-1" /> <h2>Description</h2>
        <Button
          onClick={() => setEditOpen(!editOpen)}
          size="xs"
          variant="secondary"
          className="w-16 border text-zinc-600 rounded-sm">
          Edit
        </Button>
      </span>
      {editOpen || !value ? (
        <Textarea
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => {
            setEditOpen(false);
          }}
          disabled={!editOpen}
          className="my-2 disabled:cursor-default"
          placeholder="Add description here"
          value={value}
        />
      ) : (
        <pre className="border bg-zinc-100 text-zinc-800 px-4 py-2 min-h-16 rounded-md my-2 font-normal font-sans text-sm">
          {value}
        </pre>
      )}
    </div>
  );
}

function TaskAttachments() {
  return (
    <div>
      <span className="flex items-center text-lg gap-2">
        <ImAttachment className="mt-1" /> <h2>Attachments</h2>
        <Button
          size="xs"
          variant="secondary"
          className="w-16 border text-zinc-600 rounded-sm">
          Add
        </Button>
      </span>
    </div>
  );
}
