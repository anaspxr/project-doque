import DisplaySpaceCards from "@/components/spaces/display-space-cards";
// import Filter from "@/components/spaces/filter";
import SearchBar from "@/components/spaces/search-spaces";

export default function Page() {
  return (
    <div className="mt-2 ">
      <div className="flex sm:px-2 px-4">
        <SearchBar />
        {/* <Filter /> */}
      </div>
      <div className="h-0.5 bg-zinc-400 my-2 rounded-full"></div>
      <div className="sm:px-2 px-4">
        <DisplaySpaceCards />
      </div>
    </div>
  );
}
