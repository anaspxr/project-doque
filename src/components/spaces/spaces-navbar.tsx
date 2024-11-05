"use client";

import { useParams } from "next/navigation";
import { Button } from "../ui/button";
import { EditSpace } from "./edit-space";
import SpacesMenu from "./spaces-dropdown";
import { useAppSelector } from "@/lib/store/hooks";
// import MembersAvatars from "./members-avatars";

export default function Navbar() {
  const { spaceId }: { spaceId: string } = useParams();
  const { currentSpace } = useAppSelector((state) => state.tasks);

  return (
    <div className="flex sm:ml-2 my-2 ml-4 mr-1 px-2 rounded-md justify-between h-12 shadow-sm bg-white sm:px-4 items-center dark:bg-darkBg ">
      <div className="flex items-center">
        <SpacesMenu />
      </div>
      {currentSpace && (
        <EditSpace
          spaceId={spaceId}
          initialData={{
            name: currentSpace.name,
            description: currentSpace.description,
          }}>
          <Button variant="outline" size="sm">
            Edit space
          </Button>
        </EditSpace>
      )}
      {/* <div className="flex gap-4">
        <MembersAvatars />
      </div> */}
    </div>
  );
}
