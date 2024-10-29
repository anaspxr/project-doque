"use client";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setSelectedProjectId } from "@/lib/store/features/workspace-slice";
import { NewSpaceButton } from "@/components/spaces/new-space-button";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useParams } from "next/navigation";
import CustomMarquee from "@/components/ui/marquee";

const ProjectCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { spaces } = useAppSelector((state) => state.space);
  const { selectedProjectId } = useAppSelector((state) => state.workspace);
  const [isOpen, setIsOpen] = useState(false);
  const { workSpaceId }: { workSpaceId: string } = useParams();

  useEffect(() => {
    if (workSpaceId && spaces && spaces.length > 0) {
      dispatch(setSelectedProjectId(spaces[0]._id));
    }
  }, [workSpaceId, spaces, dispatch]);

  const toggleProjects = () => {
    setIsOpen((prev) => !prev);
  };

  const handleProjectClick = (projectId: string) => {
    dispatch(setSelectedProjectId(projectId));
    setIsOpen(false);
  };

  const displayedProject = spaces?.find(
    (project) => project._id === selectedProjectId
  );

  const otherProjects =
    spaces?.filter((project) => project._id !== selectedProjectId) || [];

  return (
    <div className="relative w-full bg-white  rounded-lg shadow-md p-4  dark:bg-darkBg">
      {displayedProject ? (
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <h3 className="text-sm font-medium">{displayedProject.name}</h3>
            <p className="text-xs text-gray-500 max-w-48">
              <CustomMarquee text={displayedProject.description} />
            </p>
          </div>
          <button onClick={toggleProjects} className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>
        </div>
      ) : (
        <NewSpaceButton>
          <div className="flex justify-center cursor-pointer">
            <IoMdAddCircleOutline
              size={15}
              className="mr-1 mt-1 text-gray-500"
            />
            <span className="text-gray-500">Add New Project</span>
          </div>
        </NewSpaceButton>
      )}
      {isOpen && otherProjects.length > 0 && (
        <div className="absolute left-0 w-full max-h-72 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-y-auto  dark:bg-darkBg ">
          {otherProjects.map((project) => (
            <div
              key={project._id}
              className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-100 border-b dark:hover:bg-gray-800"
              onClick={() => handleProjectClick(project._id)}>
              <div className="flex-grow">
                <p className="text-sm font-medium">{project.name}</p>
                <p className="text-xs text-gray-500">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
