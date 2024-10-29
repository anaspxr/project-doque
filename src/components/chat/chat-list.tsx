import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { fetchMessages } from "@/lib/store/features/message-slice";

export default function MessageList() {
  const dispatch = useDispatch<AppDispatch>();
  const { messages, error, isOnline } = useSelector(
    (state: RootState) => state.message
  );

  function formatTimestamp(timestamp: string): string {
    const messageDate = new Date(timestamp);
    const currentDate = new Date();

    const diffInMilliseconds = currentDate.getTime() - messageDate.getTime();
    const diffInMinutes = diffInMilliseconds / (1000 * 60);
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;

    if (diffInMinutes < 1) {
      return "Now";
    } else if (diffInMinutes < 60) {
      return `${Math.floor(diffInMinutes)} minute${
        Math.floor(diffInMinutes) > 1 ? "s" : ""
      } ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)} hour${
        Math.floor(diffInHours) > 1 ? "s" : ""
      } ago`;
    } else if (diffInDays < 1) {
      return "Yesterday";
    } else if (diffInDays < 2) {
      return "2 days ago";
    } else {
      return format(messageDate, "dd-MM-yyyy HH:mm");
    }
  }

  setInterval(() => {
    dispatch(fetchMessages());
  }, 60000);

  return (
    <div className="h-full p-2 space-y-4">
    {!isOnline && (
      <p className="text-center text-red-500">
        You are offline. Please check your internet connection.
      </p>
    )}
    {(!messages || messages?.messages?.length < 1) && (
      <p className="h-full text-gray-500 flex justify-center items-center">
        No messages yet!
      </p>
    )}
    {error && <p>Something went wrong</p>}
    {messages?.messages && (
      <div className="space-y-4">
        {messages?.messages?.map((item) => (
          <div key={item._id} className="flex items-start space-x-3">
            {item.sender?.image && (
              <Avatar className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                <AvatarImage
                  src={item.sender.image}
                  alt={item.sender.firstName}
                />
                <AvatarFallback />
              </Avatar>
            )}
  
            <div className="flex-grow bg-white rounded-lg shadow-md p-3 border border-gray-200 max-w-56 sm:max-w-lg md:max-w-2xl dark:bg-gray-800">
              <div className="flex flex-col sm:flex-row justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.sender?.firstName}
                </p>
                <p className="text-xs text-gray-500 sm:text-right dark:text-white">
                  {formatTimestamp(item.timestamp)}
                </p>
              </div>
  
              <p className="mt-1 text-gray-700 whitespace-pre-wrap break-words dark:text-white">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
  );
}
