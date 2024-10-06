import { SpaceDetails } from "@/types/spaces";

export const spaces: SpaceDetails[] = [
  {
    name: "Space 1",
    contents: {
      boards: [
        {
          name: "Board 1",
          createdAt: "2021-01-01",
          updatedAt: "2021-01-02",
          members: 5,
          sections: [
            { name: "To Do", tasks: 5 },
            { name: "In Progress", tasks: 3 },
            { name: "Done", tasks: 2 },
          ],
        },
        {
          name: "Board 2",
          createdAt: "2021-01-01",
          updatedAt: "2021-01-02",
          members: 5,
          sections: [
            { name: "To Do", tasks: 5 },
            { name: "In Progress", tasks: 3 },
            { name: "Done", tasks: 2 },
          ],
        },
      ],
    },
  },
  {
    name: "Space 2",
    contents: {
      boards: [
        {
          name: "Board 1",
          createdAt: "2021-01-01",
          updatedAt: "2021-01-02",
          members: 5,
          sections: [
            { name: "To Do", tasks: 5 },
            { name: "In Progress", tasks: 3 },
            { name: "Done", tasks: 2 },
          ],
        },
        {
          name: "Board 2",
          createdAt: "2021-01-01",
          updatedAt: "2021-01-02",
          members: 5,
          sections: [
            { name: "To Do", tasks: 5 },
            { name: "In Progress", tasks: 3 },
            { name: "Done", tasks: 2 },
          ],
        },
        {
          name: "Board 3",
          createdAt: "2021-01-01",
          updatedAt: "2021-01-02",
          members: 5,
          sections: [
            { name: "To Do", tasks: 5 },
            { name: "In Progress", tasks: 3 },
            { name: "Done", tasks: 2 },
          ],
        },
      ],
    },
  },
  {
    name: "Space 3",
    contents: {
      boards: [
        {
          name: "Board 1",
          createdAt: "2021-01-01",
          updatedAt: "2021-01-02",
          members: 5,
          sections: [
            { name: "To Do", tasks: 5 },
            { name: "In Progress", tasks: 3 },
            { name: "Done", tasks: 2 },
          ],
        },
      ],
    },
  },
];

export const sections = [
  { title: "To Do", id: "to-do", color: "bg-red-500" },
  { title: "In Progress", id: "in-progress", color: "bg-yellow-500" },
  { title: "Done", id: "done", color: "bg-green-500" },
];

export const tasksData = [
  { id: "task-1", content: "Task 1", section: "to-do" },
  { id: "task-2", content: "Task 2", section: "in-progress" },
  { id: "task-3", content: "Task 3", section: "done" },
  { id: "task-4", content: "Task 4", section: "to-do" },
];
