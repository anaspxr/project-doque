import Sidebar from "@/components/sidebar-home/sidebar";
import Workspace from "@/components/template-carousel/workspace";

export default function Home() {
  return <div className="flex">
    <Sidebar />
    <Workspace/>
  </div>;
}
