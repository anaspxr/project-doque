import BoardsCard from "@/components/spaces/boards-card";
import Filter from "@/components/spaces/filter";
import SearchBar from "@/components/spaces/search-bar";
import { Button } from "@/components/ui/button";
import { spaces } from "@/consts/spaces";
import { FaPlus } from "react-icons/fa6";

export default function Page({ params }: { params: { spaceId: 1 | 2 | 3 } }) {
  const spaceDetails = spaces[params.spaceId];
  return (
    <div className="mt-4">
      <div className="flex px-4 justify-between">
        <SearchBar />
        <Filter />
      </div>
      <div className="h-0.5 bg-zinc-400 my-2 rounded-full"></div>
      <div className="flex gap-4 mt-8 mb-2 items-center">
        <h1 className="text-xl font-semibold">Boards</h1>
        <Button size="sm" variant="outline" className="flex gap-2 items-center">
          New Board <FaPlus size={10} />
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        {spaceDetails &&
          spaceDetails.contents.boards.map((board, i) => (
            <BoardsCard
              board={board}
              i={i.toString()}
              spaceId={`${params.spaceId}`}
              key={i}
            />
          ))}
      </div>
    </div>
  );
}
