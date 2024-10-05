import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Board } from "@/types/spaces";
import Link from "next/link";

export default function BoardsCard({
  board,
  i,
  spaceId,
}: {
  board: Board;
  i: string;
  spaceId: string;
}) {
  return (
    <Link href={`${spaceId}/${i}`}>
      <Card className="w-80 hover:bg-zinc-50">
        <CardHeader>
          <CardTitle>{board.name}</CardTitle>
          <CardDescription>Created At {board.createdAt}</CardDescription>
        </CardHeader>
        <CardContent>
          {board.sections.map((section, i) => (
            <div
              className="flex gap-2 justify-between mb-2 p-2 bg-zinc-100 rounded-md"
              key={i}>
              <p>{section.name}</p>
              <p>Tasks: {section.tasks}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </Link>
  );
}
