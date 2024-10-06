import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default function StackedAvatars({
  members,
  max,
  className,
  size = "md",
}: {
  members: { src?: string; alt?: string }[];
  max: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const maxVisibleMembers = members.length > max ? max - 1 : members.length;

  return (
    <span className={`flex -space-x-4 ${className}`}>
      {members.slice(0, maxVisibleMembers).map((member, i) => (
        <Avatar
          key={i}
          className={`border-2 border-white ${
            size === "sm" ? "w-6 h-6" : size === "md" ? "w-8 h-8" : "w-12 h-12"
          }`}>
          <AvatarImage
            src={member.src || "/images/avatarFallback.png"}
            alt={member.alt || "Avatar"}
          />
          <AvatarFallback />
        </Avatar>
      ))}
      {members.length > maxVisibleMembers && (
        <div
          className={`flex items-center justify-center rounded-full z-10 bg-gray-300 text-zinc-800 font-semibold ${
            size === "sm"
              ? "w-6 h-6 text-xs"
              : size === "md"
              ? "w-8 h-8 text-base"
              : "w-12 h-12 text-lg"
          }`}>
          +{members.length - maxVisibleMembers}
        </div>
      )}
    </span>
  );
}
