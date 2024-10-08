import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface MessageProps {
  name: string;
  image: string;
  hasNotification?: boolean;
}

function ChatList({ name, image, hasNotification }: MessageProps) {
  return (
    <div className="flex flex-col items-center relative">
      <div className="relative">
      <Avatar>
          <AvatarImage
            src=""
            alt="Project Icon"
          />
          <AvatarFallback />
        </Avatar>
        {hasNotification && (
          <div className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></div>
        )}
      </div>
      <p className="text-sm font-semibold mt-1">{name}</p>
    </div>
  );
}

export default function GroupChat() {
  const messages = [
    { name: "Sinan", image: "/path-to-image1.jpg", hasNotification: false },
    { name: "Sinan", image: "/path-to-image2.jpg", hasNotification: true }, 
    { name: "Alixa", image: "/path-to-image3.jpg", hasNotification: false },
    { name: "Alixa", image: "/path-to-image4.jpg", hasNotification: false },
    { name: "Alixa", image: "/path-to-image5.jpg", hasNotification: false },
    { name: "Sinan", image: "/path-to-image6.jpg", hasNotification: false },
  ];

  return (
    <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-md p-2 space-y-2">
      <div className="text-sm font-semibold text-gray-600 ">Message</div>
      <div className="grid grid-cols-3 gap-1">
        {messages.map((message, index) => (
          <ChatList
            key={index}
            name={message.name}
            image={message.image}
            hasNotification={message.hasNotification}
          />
        ))}
      </div>
    </div>
  );
}

