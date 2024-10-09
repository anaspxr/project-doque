import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface CommentProps {
  name: string;
  title: string;
  message: string;
}

const Comment: React.FC<CommentProps> = ({ name, title, message }) => {
  return (
    <div className="w-full h-8 flex items-center bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition overflow-hidden">
      <Avatar className="h-8 w-8">
          <AvatarImage
            src=""
            alt="Project Icon"
          />
          <AvatarFallback />
        </Avatar>
      <div className="flex-1 pl-3 overflow-hidden">
        <p className="text-xs truncate">
          {name} in {title}
        </p>
        <p className="text-[10px] text-gray-600 truncate">{message}</p>
      </div>
      <button className="ml-4 text-gray-600 hover:text-gray-800 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const CommentsList = () => {
  const comments = [
    {
      name: "Elon S.",
      title: "Market research 2024",
      message: "Find my keynote attached in the...",
    },
    {
      name: "Elon S.",
      title: "Market research 2024",
      message: "Find my keynote attached in the...",
    },
    {
      name: "Elon S.",
      title: "Market research 2024",
      message: "Find my keynote attached in the...",
    },
  ];

  return (
    <div className="w-[259px] h-[160px] bg-white border border-gray-200 rounded-lg shadow-md p-2 space-y-2 mt-2 overflow-hidden">
      <div className="font-semibold text-sm text-gray-500">New Comments</div>
      <div className="space-y-2 h-[140px] overflow-auto">
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
