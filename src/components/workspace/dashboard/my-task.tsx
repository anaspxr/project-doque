"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import Cookies from "js-cookie";
import { FaPlus } from "react-icons/fa";

export default function MyTask() {
  const { spaces } = useAppSelector((state) => state.space);
  const { selectedProjectId } = useAppSelector((state) => state.workspace);
  const { workSpaceId }: { workSpaceId: string } = useParams();
  const selectedSpace = spaces?.find(
    (space) => space._id === selectedProjectId
  );
  const [userId, setUserId] = useState<string | undefined>("");

  useEffect(() => {
    const userCokeis = JSON.parse(Cookies.get("user") || "{}");
    setUserId(userCokeis.id);
  }, [workSpaceId]);

  const assignedTask = selectedSpace?.lists.flatMap((list) =>
    list.tasks.filter((task) =>
      task.assignedTo.find((id) => id === userId && task)
    )
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 mb-2">
      <h3 className="text-gray-600 text-lg font-semibold dark:text-gray-300">
        My Tasks
      </h3>
      {assignedTask && assignedTask.length > 0 ? (
        <Slider {...settings} className="mt-4">
          {assignedTask.map((task) => (
            <div
              key={task._id}
              className="group flex-shrink-0 w-60 h-28 border border-gray-500  dark:bg-darkBg p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
              <Link
                href={`/w/${workSpaceId}/spaces/${selectedProjectId}?task=${task._id}&list=${task.status}`}>
                <p
                  className="text-sm font-medium dark:text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap "
                  title={task.title}>
                  {task.title}
                </p>
                <p
                  className="text-xs text-gray-600 dark:text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap "
                  title={task.description}>
                  {task.description}
                </p>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="group flex-shrink-0 w-40 h-28 border border-gray-500  dark:bg-darkBg p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          <Link href={`/w/${workSpaceId}/spaces/${selectedProjectId}`}>
            <p className="flex justify-center items-center h-full text-gray-400 cursor-pointer">
              <FaPlus /> Assign Task
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
