import CalendarSmall from "@/components/workspace/calendar/calendar-small";
import DashboardProject from "@/components/workspace/dashboard/dashboard-project";
import GroupChat from "@/components/workspace/dashboard/group-chat";

export default function page() {
  return (
    <div className="flex justify-around m-1 ">
      <div>
        <DashboardProject />
      </div>
      <div>
        <CalendarSmall className="bg-white border border-gray-200 rounded-lg shadow-md w-[280px] h-[250px]" />
        <GroupChat />
      </div>
    </div>
  );
}
