import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface Member {
  img: string;
  name: string;
  email: string;
  role: string;
  online: boolean;
}

const MembersList: React.FC<{ members: Member[] }> = ({ members }) => {
  return (
    <div className="space-y-4">
      {members.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 rounded-lg">
          <div className="flex items-center">
            <Avatar className="w-10 h-10 mr-4">
              <AvatarImage
                src={item.img || "/images/avatarFallback.png"}
                alt="Avatar"
              />
              <AvatarFallback />
            </Avatar>
            <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
          </div>
          <h2 className="text-gray-600">{item.email}</h2>
          <h2 className="text-gray-600">{item.role}</h2>
          <h2
            className={`text-sm font-medium ${
              item.online ? "text-green-500" : "text-red-500"
            }`}>
            {item.online ? "Online" : "Offline"}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default MembersList;
