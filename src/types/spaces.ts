export type Board = {
  name: string;
  createdAt: string;
  updatedAt: string;
  members: number;
  sections: {
    name: string;
    tasks: number;
  }[];
};

export type SpaceDetails = {
  name: string;
  contents: {
    boards: Board[];
  };
};

export type Task = {
  id: string;
  content: string;
  section: string;
};

export type Section = {
  title: string;
  id: string;
  color: string;
};
