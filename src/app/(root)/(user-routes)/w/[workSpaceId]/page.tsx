const workSpaces = {
  1: {
    name: "Workspace 1",
  },
  2: {
    name: "Workspace 2",
  },
  3: {
    name: "Workspace 3",
  },
};

export default function Page({
  params,
}: {
  params: { workSpaceId: 1 | 2 | 3 };
}) {
  return (
    <div>{workSpaces[params.workSpaceId]?.name || "Work space not found"}</div>
  );
}
