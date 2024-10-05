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
