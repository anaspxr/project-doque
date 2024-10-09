import React from 'react';

const TaskSummary = () => {
  const tasks = [
    { label: 'In Progress', count: 12 },
    { label: 'Completed', count: 10 },
    { label: 'On Hold', count: 3 },
    { label: 'Total Task', count: 4 },
  ];

  return (
    <div className="flex justify-around  p-1 rounded-lg">
      {tasks.map((task) => (
        <div key={task.label} className="text-center">
          <div className="text-start text-xl font-semibold text-gray-600">{task.count}</div>
          <div className="text-xs font-semibold text-gray-300">{task.label}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskSummary;
