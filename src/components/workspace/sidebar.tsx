"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Spaces from "./spaces";
import { FiSettings } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AddWorkSpaceBtn } from "../ui/add-workspace";
import { useParams, useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { ReactNode } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import {
  fetchWorkspaceData,
  setWorkSpaceId,
} from "@/lib/store/features/workspace-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchWorkspaceUser } from "@/lib/store/features/userSlice";
import { fetchSpacesData } from "@/lib/store/thunks/space-thunks";
import { EditWorkSpace } from "./edit-workspace";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface SidebarIcon {
  icon: ReactNode;
  label: string;
  href: string;
}

const Sidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { workSpace } = useSelector((state: RootState) => state.workspace);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatched = useAppDispatch();
  const { workspaceUser } = useAppSelector((state) => state.user);
  const { workSpaceId }: { workSpaceId: string } = useParams();

  const profile = workSpace
    ?.find((workspace) => workspace.WorkspaceId === workSpaceId)
    ?.members.find((p) => p.status === "owner");

  useEffect(() => {
    if (profile?.user?._id) {
      const fetchData = async () => {
        dispatch(fetchWorkspaceUser({ userId: profile?.user?._id }));
      };
      fetchData();
    }
  }, [dispatched, workSpaceId, profile?.user?._id]);

  const sidebarItems: SidebarIcon[] = [
    {
      icon: <AiFillHome className="text-xl" />,
      label: "Home",
      href: "/",
    },
    {
      icon: <RiDashboardFill className="text-xl" />,
      label: "Dashboard",
      href: `/w/${workSpaceId}/dashboard`,
    },
    {
      icon: <BsFillPeopleFill className="text-xl" />,
      label: "Members",
      href: `/w/${workSpaceId}/members`,
    },
    {
      icon: <FaCalendar className="text-xl" />,
      label: "Calendar",
      href: `/w/${workSpaceId}/calendar`,
    },
  ];

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setWorkSpaceId(workSpaceId));
      await dispatch(fetchWorkspaceData());
    };
    fetchData();
  }, [workSpaceId]);

  useEffect(() => {
    setActiveRoute(window.location.pathname);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRouteChange = (route: string) => {
    setActiveRoute(route);
    setIsCollapsed(true);
    router.push(route);
  };

  const main = workSpace.find((val) => val.WorkspaceId === workSpaceId);

  useEffect(() => {
    dispatch(fetchSpacesData(workSpaceId));
  }, [workSpaceId]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setDropdownOpen(false);
  };

  return (
    <div
      className={`fixed sm:relative md:relative lg:relative z-50 h-full border-r-2 dark:border-gray-700 p-2 flex-shrink-0 flex flex-col transition-all duration-300 bg-white dark:bg-darkBg ${
        isCollapsed ? "w-14" : "w-64"
      }`}
    >
      <div
        className={`flex items-center p-2 cursor-pointer ${
          isCollapsed ? "justify-center" : ""
        }`}
        onClick={toggleCollapse}
      >
        <MdKeyboardDoubleArrowRight
          className={`text-3xl sm:fixed bg-gray-200 p-1 rounded-lg left-5 top-5 z-50 transition-transform duration-500`}
          style={{
            transform: isCollapsed
              ? "rotateY(180deg) "
              : "rotateY(0deg) ",
            perspective: "500px",
          }}
        />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between p-3 rounded-md cursor-pointer">
          <div className="flex items-center h-10">
            <Avatar className={`${isCollapsed ? "h-6 w-6" : "h-8 w-8"}`}>
              <AvatarImage src={workspaceUser?.image} alt="Workspace logo" />
              <AvatarFallback />
            </Avatar>
            {!isCollapsed && (
              <h2 className="text-md text-black ml-2 h-5 overflow-hidden dark:text-gray-300">
                {main?.name}
              </h2>
            )}
          </div>
          <IoIosArrowDown
            className={`text-black transform transition-transform duration-300 cursor-pointer dark:text-gray-300 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            onClick={toggleDropdown}
          />
        </div>

        {dropdownOpen && (
          <div
            onMouseLeave={() => setDropdownOpen(false)}
            className="absolute top-full left-0 w-full bg-white border dark:border-gray-600 rounded-lg z-50 dark:bg-darkBg"
          >
            <div className="border-b-2 border-gray-200 dark:border-gray-600 p-2">
              <h3 className="text-md font-medium text-gray-700 dark:text-gray-300">
                Workspaces
              </h3>
            </div>
            <div className="h-[200px] overflow-scroll">
              {workSpace.length > 0 ? (
                workSpace.map((data, key) => (
                  <Link href={`/w/${data.WorkspaceId}/dashboard`} key={key}>
                    <div className="p-2 hover:border-l-2 cursor-pointer dark:text-gray-300 hover:border-black">
                      <h3 className="text-sm text-black dark:text-gray-300">
                        {data.name}
                      </h3>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-2">No workspaces available</div>
              )}
            </div>
            <AddWorkSpaceBtn>
              <div className="flex items-center justify-center p-2 border-t-2 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer">
                <FaPlus className="mr-2" />
                <h3 className="text-md text-black dark:text-gray-300">
                  Add Workspace
                </h3>
              </div>
            </AddWorkSpaceBtn>
          </div>
        )}
      </div>

      <div className="flex-1 rounded-md mt-3 flex flex-col">
        <div className="p-2">
          {!isCollapsed &&
            sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-2 cursor-pointer ${
                  activeRoute === item.href
                    ? "border-l-4 border-black dark:border-gray-300"
                    : "hover:border-l-4 border-transparent"
                }`}
                onClick={() => handleRouteChange(item.href)}
              >
                <div className="flex items-center">
                  <div>{item.icon}</div>
                  <h2 className="ml-3 text-black h-5 overflow-hidden dark:text-gray-300">
                    {item.label}
                  </h2>
                </div>
              </div>
            ))}

          {isCollapsed &&
            sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer ${
                  isCollapsed ? "p-2 mt-1" : ""
                } ${
                  activeRoute === item.href
                    ? "border-l-4 border-black dark:border-gray-300"
                    : "hover:border-l-4 border-transparent"
                }`}
                onClick={() => handleRouteChange(item.href)}
              >
                <div className="flex items-center">
                  <div>{item.icon}</div>
                </div>
              </div>
            ))}
        </div>

        {!isCollapsed && (
          <div className="flex-1 overflow-y-auto hide-scrollbar max-h-64 p-4">
            {<Spaces />}
          </div>
        )}

        <EditWorkSpace
          initialData={{ name: main?.name || "", visibility: true }}
        >
          <div className="mt-auto flex items-center p-2 pl-3 hover:bg-gray-300 rounded-lg cursor-pointer dark:hover:bg-gray-900">
            <FiSettings className="text-xl text-black dark:text-gray-300" />
            {!isCollapsed && (
              <h1 className="ml-3 font-medium text-black h-6 overflow-hidden dark:text-gray-300">
                Settings
              </h1>
            )}
          </div>
        </EditWorkSpace>
      </div>
    </div>
  );
};

export default Sidebar;
