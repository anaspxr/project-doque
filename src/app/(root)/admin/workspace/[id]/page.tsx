"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../../../lib/store/hooks";
import {
  fetchWorkspaceDetails,
  selectWorkspaceLoading,
  selectWorkspaceError,
  selectWorkspaces,
} from "../../../../../lib/store/features/admin/admin-workspace-slice";
import {
  fetchMembers,
  selectMembers,
} from "../../../../../lib/store/features/admin/admin-member-slice";
import Spinner from "@/components/ui/spinner/spinner";
import {
  UserIcon,
  CalendarIcon,
  ClipboardListIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export default function WorkspaceDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectWorkspaceLoading);
  const error = useAppSelector(selectWorkspaceError);
  const workspaces = useAppSelector(selectWorkspaces);
  const members = useAppSelector(selectMembers);

  const workspace = workspaces.find((w) => w._id === id);

  useEffect(() => {
    if (id) {
      dispatch(fetchWorkspaceDetails(id as string));
      dispatch(fetchMembers());
    }
  }, [dispatch, id]);

  const getCreatorDetails = (creatorId: string) => {
    return members.find((member) => member._id === creatorId);
  };

  const getMemberDetails = (memberId: string) => {
    return members.find((member) => member._id === memberId);
  };

  const creatorDetails = workspace
    ? getCreatorDetails(workspace.createdBy)
    : null;

  return (
      <div>
      {loading && <Spinner />}
      {error && <p className="text-red-500 font-semibold">{error}</p>}
      <Link href="/admin/workspace">
        <MdOutlineKeyboardDoubleArrowLeft
          size={32}
          className="text-gray-500  ml-8 hover:text-gray-700 transition-colors duration-300 cursor-pointer"
          title="Back to Workspace"
        />
      </Link>
    <div className="rounded-lg ml-10 pt-6 sm:p-8 transition-all duration-300 max-h-[80vh] overflow-y-auto">
      {workspace ? (
        <div>
          <div className="flex flex-col md:flex-row items-start justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {workspace.name}
              </h2>
              {creatorDetails && (
                <div className="flex items-center mb-2">
                  <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Created by: {creatorDetails.firstName}{" "}
                    {creatorDetails.lastName}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-1">
                <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Created on:{" "}
                  {new Date(workspace.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Updated on:{" "}
                  {new Date(workspace.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <ClipboardListIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
            <p className="text-gray-600 dark:text-gray-300">
              Description: {workspace.description}
            </p>
          </div>

          <div className="flex items-center mb-4 ml-6">
            <p className="text-gray-600 dark:text-gray-300">
              No of Spaces: {workspace.space.length}
            </p>
          </div>

          <hr className="my-4 border-gray-300 dark:border-gray-600" />

          <div>
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Members
            </h4>
            <div className="max-h-[300px] overflow-y-auto overflow-x-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workspace.members.map((member) => {
                  const memberDetails = getMemberDetails(member.user);
                  return memberDetails ? (
                    <div
                      key={member._id}
                      className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform duration-200 hover:scale-95"
                    >
                      <UserIcon className="w-10 h-10 text-blue-500 dark:text-blue-400 mr-3" />
                      <div>
                        <p className="text-gray-800 dark:text-gray-100 font-medium text-lg">
                          {memberDetails.firstName} {memberDetails.lastName}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Status: {member.status}
                        </p>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        !loading && (
          <p className="text-gray-600 dark:text-gray-300">
            No workspace details available.
          </p>
        )
      )}
    </div>
    </div>
  );
}
