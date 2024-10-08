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
  { title: "To Do", id: "to-do", color: "#F9C86A" },
  { title: "In Progress", id: "in-progress", color: "#EF9033" },
  { title: "Done", id: "done", color: "#96C18B" },
];

export const tasksData = [
  { id: "task-1", content: "Task 1", section: "to-do", color: "#F9C86A" },
  { id: "task-2", content: "Task 2", section: "in-progress", color: "#EF9033" },
  { id: "task-3", content: "Task 3", section: "done", color: "#96C18B" },
  { id: "task-4", content: "Task 4", section: "to-do", color: "#F9C86A" },
];

export const colors = {
  blue1: {
    name: "Green Blue",
    hex: "#2364AA",
  },
  blue2: {
    name: "Picton Blue",
    hex: "#3DA5D9",
  },
  green1: {
    name: "Verdigris",
    hex: "#4CAF50",
  },
  green2: {
    name: "Olivine",
    hex: "#96C18B",
  },
  yellow1: {
    name: "Jasmine",
    hex: "#FEE485",
  },
  yellow2: {
    name: "Saffron",
    hex: "#F9C86A",
  },
  orange1: {
    name: "Carrot",
    hex: "#EF9033",
  },
};
