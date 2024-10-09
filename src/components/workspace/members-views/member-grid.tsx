import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface Member {
  img: string;
  name: string;
  email: string;
  role: string;
  online: boolean;
}

const MembersGrid: React.FC<{ members: Member[] }> = ({ members }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {members.map((member, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md p-6 flex">
          <div className="text-center">
            <Avatar className="w-16 h-16" key={i}>
              <AvatarImage
                src={member.img || "/images/avatarFallback.png"}
                alt="Avatar"
              />
              <AvatarFallback />
            </Avatar>
            <h2
              className={`text-xs font-medium mt-3 rounded-xl ${
                member.online ? "bg-green-300" : "text-red-500"
              }`}>
              {member.online ? "Online" : ""}
            </h2>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-700">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500">{member.email}</p>
            <p className="text-sm text-gray-500">Role: {member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersGrid;
