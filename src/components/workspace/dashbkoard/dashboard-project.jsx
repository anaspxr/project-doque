import React from 'react'
import ProjectCard from './project-cards'
import TaskList from './task-list'
import HighPriorityTask from './high-priority-task'
import CommentsList from './comments-list'
import TaskSummary from './task-summary'
import { IoMdAddCircleOutline } from "react-icons/io";

export default function DashboardProject() {
  return (
    <div className='w-[550px] h-[460px]  bg-white border border-gray-200 rounded-lg shadow-md p-3'>
        <div>
        <TaskSummary />
        </div>
        <div className='flex justify-between px-4 mt-1'>
            <div className='font-extrabold text-xl mb-1'>
                Project
            </div>
            <div className='font-semibold text-xs text-gray-600 flex'>
               <IoMdAddCircleOutline size={15}/><span>Add New Project</span>
            </div>
        </div>
      <div className="flex  gap-2">
          <div>
            <ProjectCard />
            <TaskList />
          </div>
          <div>
            <HighPriorityTask />
            <CommentsList />
          </div>
        </div>
    </div>
  )
}
