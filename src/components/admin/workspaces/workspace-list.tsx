"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/hooks";
import {
  fetchWorkspaces,
  selectWorkspaces,
  selectWorkspaceLoading,
  selectWorkspaceError,
} from "../../../lib/store/features/admin/admin-workspace-slice";
import {
  fetchMembers,
  selectMembers,
} from "../../../lib/store/features/admin/admin-member-slice";
import SearchInput from "./search-input";
import FilterDropdown from "./filter-drop-down";
import WorkspaceCard from "./workspace-card";
import Pagination from "@/components/ui/pagination";
import WorkspaceCardSkeleton from "@/components/ui/admin/workspace-skelton";

export default function WorkspaceList() {
  const dispatch = useAppDispatch();
  const workspaces = useAppSelector(selectWorkspaces);
  const members = useAppSelector(selectMembers);
  const loading = useAppSelector(selectWorkspaceLoading);
  const error = useAppSelector(selectWorkspaceError);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    dispatch(fetchWorkspaces({ page: currentPage, limit: itemsPerPage }));
    dispatch(fetchMembers());
  }, [dispatch, currentPage, itemsPerPage]);

  const filteredWorkspaces = workspaces.filter((workspace) => {
    const matchesSearch = workspace.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesFilter = true;
    if (filter === "today") {
      matchesFilter =
        new Date(workspace.createdAt).toDateString() ===
        new Date().toDateString();
    } else if (filter === "week") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      matchesFilter =
        new Date(workspace.createdAt) >= oneWeekAgo &&
        new Date(workspace.createdAt) <= new Date();
    } else if (filter === "month") {
      const currentMonth = new Date().getMonth();
      matchesFilter = new Date(workspace.createdAt).getMonth() === currentMonth;
    }

    return matchesSearch && matchesFilter;
  });

  const handleFilterSelect = (selectedFilter: string) => {
    setFilter(selectedFilter);
    setShowFilterDropdown(false);
  };

  const getCreatorDetails = (creatorId: string) => {
    return members.find((member) => member._id === creatorId);
  };

  const totalPages = Math.ceil(filteredWorkspaces.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 py-2 px-4 bg-gray-200 rounded dark:bg-gray-700 ml-10 sm:ml-0 lg:ml-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200 mb-4 sm:mb-0">
            Workspaces
          </h2>
          <div className="flex items-center space-x-4">
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <FilterDropdown
              setFilter={handleFilterSelect}
              showDropdown={showFilterDropdown}
              setShowDropdown={setShowFilterDropdown}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 relative">
        {loading && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto h-[calc(100vh-250px)]">
            {Array.from({ length: 12 }).map((_, index) => (
              <WorkspaceCardSkeleton key={index} />
            ))}
          </ul>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto h-[calc(100vh-250px)]">
            {filteredWorkspaces
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((workspace) => {
                const creator = getCreatorDetails(workspace.createdBy);
                return (
                  <WorkspaceCard
                    key={workspace._id}
                    workspace={workspace}
                    creator={creator}
                  />
                );
              })}
          </ul>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
