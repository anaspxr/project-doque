import DisplaySpaceCards from "@/components/spaces/display-space-cards";
// import Filter from "@/components/spaces/filter";
import SearchBar from "@/components/spaces/search-spaces";

export default function Page() {
  return (
    <div className="mt-4">
      <div className="flex px-4 justify-between">
        <SearchBar />
        {/* <Filter /> */}
      </div>
      <div className="h-0.5 bg-zinc-400 my-2 rounded-full"></div>
      <DisplaySpaceCards />
    </div>
  );
}
