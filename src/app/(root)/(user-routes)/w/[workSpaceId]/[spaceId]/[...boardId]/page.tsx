import BoardsContainer from "@/components/boards/boards-container";
import TaskDetails from "@/components/boards/task-details";
import Filter from "@/components/spaces/filter";
import SearchBar from "@/components/spaces/search-bar";
import { spaces } from "@/consts/spaces";
import { redirect } from "next/navigation";

export default function Page({
  params,
}: {
  params: { workSpaceId: string; spaceId: string; boardId: string[] };
}) {
  const spaceDetails = spaces[Number(params.spaceId)];
  const board = spaceDetails.contents.boards[Number(params.boardId[0])];
  if (params.boardId[2]) {
    redirect(`/w/${params.workSpaceId}/${params.spaceId}/${params.boardId[1]}`);
  }

  if (!board) redirect(`/w/${params.workSpaceId}/${params.spaceId}`);

  return (
    <div className="mt-4 overflow-hidden">
      <div className="flex px-4 justify-between">
        <SearchBar placeholder={`Search in ${board.name}..`} />
        <Filter />
      </div>
      <div className="h-0.5 bg-zinc-400 my-2 rounded-full"></div>
      <TaskDetails taskId={params.boardId[1]} />
      <BoardsContainer />
    </div>
  );
}
