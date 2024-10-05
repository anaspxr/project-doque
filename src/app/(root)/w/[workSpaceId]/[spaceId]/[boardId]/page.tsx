import { spaces } from "@/consts/spaces";
import { redirect } from "next/navigation";

export default function Page({
  params,
}: {
  params: { workSpaceId: string; spaceId: string; boardId: string };
}) {
  const spaceDetails = spaces[Number(params.spaceId)];
  const board = spaceDetails.contents.boards[Number(params.boardId)];

  if (!board) redirect(`/w/${params.workSpaceId}/${params.spaceId}`);

  return (
    <div>
      <h1>{board.name}</h1>
      <p>Created at: {board.createdAt}</p>
      <p>Updated at: {board.updatedAt}</p>
      <p>Members: {board.members}</p>
      <ul>
        {board.sections.map((section) => (
          <li key={section.name}>
            <p>{section.name}</p>
            <p>Tasks: {section.tasks}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
