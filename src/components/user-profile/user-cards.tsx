import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export default function Usercards() {
  return (
    <div className="p-8 min-h-screen">
      <div className="grid grid-cols-4 p-3 font-bold text-gray-700 border-b-2 border-gray-400">
        <h2 className="text-left">Cards</h2>
        <h2 className="text-left">Lists</h2>
        <h2 className="text-left">Due Date</h2>
        <h2 className="text-left">Board</h2>
      </div>

      <div>
        <div className="grid grid-cols-4  p-3  items-center">
          <h1 className="text-left font-semibold">Research & Development</h1>
          <h1 className="text-left">ToDo</h1>
          <h1 className="text-left">12/01/2024</h1>
          <div className="flex items-center">
            <Avatar className="w-10 h-10 mr-4">
              <AvatarImage
                src="https://th.bing.com/th/id/OIP.zxKrmzm6kUWEn45kDUSKTgHaHT?rs=1&pid=ImgDetMain"
                alt="User Profile"
              />
              <AvatarFallback />
            </Avatar>
            <div>
              <h1 className="font-semibold text-gray-800">Alixa Workspace</h1>
              <h3 className="text-gray-600 text-sm">Alixa Workspace</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 p-4 items-center">
          <h1 className="text-left font-semibold">Research & Development</h1>
          <h1 className="text-left">ToDo</h1>
          <h1 className="text-left">12/01/2024</h1>
          <div className="flex items-center">
            <Avatar className="w-10 h-10 mr-4">
              <AvatarImage
                src="https://th.bing.com/th/id/OIP.zxKrmzm6kUWEn45kDUSKTgHaHT?rs=1&pid=ImgDetMain"
                alt="User Profile"
              />
              <AvatarFallback />
            </Avatar>
            <div>
              <h1 className="font-semibold text-gray-800">Alixa Workspace</h1>
              <h3 className="text-gray-600 text-sm">Alixa Workspace</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
