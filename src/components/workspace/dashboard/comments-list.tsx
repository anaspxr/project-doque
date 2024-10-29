"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchMessages } from "@/lib/store/features/message-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";

interface Message {
  messages?: {
    content: string;
    timestamp: string;
    _id: string;
    sender: { firstName: string; image: string };
  }[];
}

const Comment: React.FC<Message> = ({ messages }) => {
  return (
    <div>
      {messages?.slice(-3).reverse().map((comment) => (
        <div
          key={comment._id}
          className="w-full my-1 h-8 flex items-centerrounded-lg shadow-sm transition overflow-hidden dark:bg-darkBg"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={comment.sender.image} alt="Project Icon" />
            <AvatarFallback />
          </Avatar>
          <div className="flex-1 pl-3 overflow-hidden">
            <p className="text-xs truncate">{comment.sender.firstName}</p>
            <p className="text-[10px] text-gray-600 truncate">
              {comment.content}
            </p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

const CommentsList = () => {
  const dispatch = useAppDispatch();
  const { workSpaceId }: { workSpaceId: string } = useParams();
  const { messages } = useAppSelector((state) => state.message);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [workSpaceId]);

  const handleRefreshClick = () => {
    setIsRotating(true); 
    dispatch(fetchMessages());
    setTimeout(() => {
      setIsRotating(false);
    }, 500); 
  };

  return (
    <div className="w-full h-44 bg-white rounded-lg shadow-md p-4 space-y-3 mt-4 overflow-hidden dark:bg-darkBg">
    <div className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700">
      <div className="font-semibold text-sm text-gray-600 dark:text-gray-300">
        New Comments
      </div>
      <div>
        <IoMdRefresh 
          onClick={handleRefreshClick} 
          className={`cursor-pointer transition-transform duration-500 ${
            isRotating ? 'rotate-180' : ''
          } hover:text-gray-600 dark:hover:text-gray-400`}
        />
      </div>
    </div>
    <div className="space-y-2 overflow-auto  px-1">
      <Comment {...messages} />
    </div>
  </div>
  
  );
};

export default CommentsList;
