"use client"; 

import { useCalendarContext } from "@/contexts/CalenderContext";
import { FC, useState } from "react";

type TimeSlot = string; 
type Tasks = { [key: string]: string[] }; 

const generateTimeSlots = (): TimeSlot[] => {
  const times: TimeSlot[] = [];
  for (let hour = 9; hour < 24; hour++) {
    const timeString = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? "AM" : "PM"}`;
    times.push(timeString);
  }
  for (let hour = 0; hour < 9; hour++) {
    const timeString = `${hour === 0 ? 12 : hour}:00 AM`;
    times.push(timeString);
  }
  return times;
};

const DayCalendar: FC = () => {
  const { chosenDate } = useCalendarContext(); 

  const times: TimeSlot[] = generateTimeSlots();
  const [tasks, setTasks] = useState<Tasks>({});
  const [selectedTime, setSelectedTime] = useState<null | string>(null);
  const [newTask, setNewTask] = useState<string>("");
  const [customTime, setCustomTime] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const getDisplayedDate = () => {
    if (chosenDate) {
      return new Date(chosenDate); 
    }
    return new Date(); 
  };

  const displayedDate = getDisplayedDate();

  const handleAddOrEditTask = () => {
    const timeToSet = customTime || selectedTime;
    if (timeToSet && newTask.trim()) {
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        
        if (!updatedTasks[timeToSet]) {
          updatedTasks[timeToSet] = [];
        }
        
        if (isEditing && editIndex !== null) {
          updatedTasks[timeToSet][editIndex] = newTask; 
        } else {
          if (!updatedTasks[timeToSet].includes(newTask)) {
            updatedTasks[timeToSet].push(newTask);
          }
        }
        return updatedTasks;
      });
      resetModal();
    }
  };

  const handleDeleteTask = () => {
    if (selectedTime && editIndex !== null) {
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        
        updatedTasks[selectedTime]?.splice(editIndex, 1);
        return updatedTasks;
      });
      resetModal();
    }
  };

  const resetModal = () => {
    setSelectedTime(null);
    setNewTask("");
    setCustomTime("");
    setIsEditing(false);
    setEditIndex(null);
  };

  const openEditModal = (time: string, index: number) => {
    setSelectedTime(time);
    setNewTask(tasks[time][index] || ""); 
    setIsEditing(true);
    setEditIndex(index);
  };

  const openAddModal = (time: string) => {
    setSelectedTime(time);
    setNewTask("");
    setCustomTime("");
    setIsEditing(false); 
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 underline">
        {displayedDate.toLocaleDateString("en-US", { weekday: "long" })}
      </h2>
      <div className="space-y-4 w-[500px] h-[450px] overflow-hidden overflow-y-scroll hide-scrollbar">
        {times.map((time, idx) => (
          <div key={idx} className="relative hover:bg-gray-100 transition">
            <div className={`flex items-center cursor-pointer`} onClick={() => openAddModal(time)}>
              <div className="w-20 text-right pr-3 font-medium">{time}</div>
              <div className="flex-grow border-t border-gray-300 relative">
                <div className="grid grid-cols-3 gap-2">
                  {tasks[time]?.map((task, taskIndex) => (
                    <div
                      key={taskIndex}
                      className="bg-gray-200 rounded-full py-1 px-2 text-sm text-black cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditModal(time, taskIndex);
                      }}
                    >
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTime !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">{isEditing ? "Edit Task" : "Add Task"}</h3>
            <label className="block mb-2">Task Description</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task description"
            />
            <label className="block mb-2">Custom Time (Optional)</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={customTime}
              onChange={(e) => setCustomTime(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={resetModal}>Cancel</button>
              {isEditing && <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleDeleteTask}>Delete Task</button>}
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleAddOrEditTask}>
                {isEditing ? "Save Changes" : "Add Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DayCalendar;
