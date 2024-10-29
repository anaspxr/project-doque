import CalendarSmall from "@/components/workspace/calendar/calendar-small";
import DashboardProject from "@/components/workspace/dashboard/dashboard-project";
import GroupChat from "@/components/workspace/dashboard/group-chat";

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 m-4">
      <div className="lg:basis-3/5 w-full">
        <DashboardProject />
      </div>
      <div className="flex flex-col lg:basis-2/5 w-full space-y-4">
        <CalendarSmall className="bg-white rounded-lg shadow-md  dark:bg-darkBg mb-3" />
        <GroupChat />
      </div>
    </div>
  );
}
