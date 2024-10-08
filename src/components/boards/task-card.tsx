import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import StackedAvatars from "../ui/stacked-avatars";
import { TbCheckbox } from "react-icons/tb";
import { Task } from "@/types/spaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegClock } from "react-icons/fa6";

const members = [{}, {}, {}];

export default function TaskCard({ task }: { task: Task }) {
  const {
    setNodeRef,
    isDragging,
    listeners,
    transform,
    transition,
    attributes,
  } = useSortable({
    id: task.id,
    data: {
      type: "task",
      task,
    },
  });

  const pathName = usePathname();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Link href={`${pathName}/${task.id}`}>
        <Card
          className={`hover:bg-zinc-50 overflow-hidden ${
            isDragging && "opacity-50 "
          }`}>
          <div
            className="h-5"
            style={{ backgroundColor: task.color || "#FEE485" }}></div>
          <CardHeader>
            <CardTitle>{task.content}</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          {/* <CardContent>{content}</CardContent> */}
          <CardFooter className="flex justify-between">
            <p className="flex items-center gap-2">
              <FaRegClock className="text-zinc-500 hover:opacity-0 transition-opacity duration-300" />
              <span className="text-xs">14 oct</span>
            </p>
            <p className="flex gap-2 items-center">
              <TbCheckbox className="text-zinc-500" />{" "}
              <span className="text-xs"> 0/3</span>
            </p>
            <StackedAvatars members={members} size="sm" max={3} />
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
