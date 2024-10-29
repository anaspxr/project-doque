import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Space } from "@/types/spaces";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { Button } from "../ui/button";
import { EditSpace } from "./edit-space";

export default function SpaceCard({ space }: { space: Space }) {
  return (
    <Card className="h-full w-full relative overflow-hidden hover:scale-[102%]  transition-transform">
      <EditSpace
        initialData={{
          name: space.name,
          description: space.description,
        }}
        spaceId={space._id}>
        <Button
          title="Edit space"
          size="icon"
          variant="ghost"
          className="absolute right-2 top-4 ">
          <FaEdit />
        </Button>
      </EditSpace>

      <div className="hover:bg-zinc-50 w-full h-full dark:hover:bg-zinc-900  ">
        <Link href={`spaces/${space._id}`}>
          <CardHeader>
            <CardTitle className="max-w-[calc(100%-40px)]">
              {space.name}
            </CardTitle>
            <CardDescription>{space.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <p>Created By {space.createdBy}</p> */}
            <p className="text-sm">Lists: {space.lists.length}</p>
            {space.lists.map((section, i) => (
              <div
                className="flex gap-2 text-sm justify-between mb-2 p-2 border bg-white dark:bg-zinc-950 rounded-md"
                key={i}>
                <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                  {section.name}
                </p>
                <p className="flex-shrink-0">Tasks: {section.tasks.length}</p>
              </div>
            ))}
          </CardContent>
        </Link>
      </div>
    </Card>
  );
}
