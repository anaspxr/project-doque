"use client";

import axiosInstance from "@/utils/axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { axiosErrorCatch } from "@/utils/axiosErrorCatch";
import HandleLoading from "../ui/handle-loading";
import Link from "next/link";
import WorkSpaceCardSkeleton from "./workspace-card-skeleton";

export default function WorkspaceCard({
  workSpaceId,
}: {
  workSpaceId: string;
}) {
  const [workSpace, setWorkSpace] = useState<{
    name: string;
    createdAt: string;
    members: string[];
    space: string[];
  } | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkSpace = async () => {
      try {
        const { data } = await axiosInstance.get(`/workspace/${workSpaceId}`);
        setWorkSpace(data.data);
      } catch (error) {
        setError(axiosErrorCatch(error));
      } finally {
        setLoading(false);
      }
    };
    fetchWorkSpace();
  }, [workSpaceId]);

  return (
    <Link
      href={`/w/${workSpaceId}/dashboard`}
      className="shrink-0 basis-[120px] sm:basis-[200px] md:basis-[250px] mr-4 mb-4">
      <Card
        className="w-[160px] sm:w-[200px] md:w-[250px]  h-full min-h-40 shadow-lg hover:shadow-xl
       bg-gradient-to-br from-[#349ca25f] via-white to-[#C4DBF6] hover:scale-105 transition-transform rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        <HandleLoading
          error={error}
          loading={loading}
          loadingComponent={<WorkSpaceCardSkeleton />}>
          {workSpace && (
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {workSpace.name}
              </CardTitle>
              <CardDescription className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Created At:{" "}
                {new Date(workSpace?.createdAt).toLocaleDateString()}
              </CardDescription>
              <CardContent className="text-sm p-0">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    Spaces:
                  </span>{" "}
                  {workSpace.space?.length}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-green-600 dark:text-green-400">
                    Members:
                  </span>{" "}
                  {workSpace.members?.length}
                </p>
              </CardContent>
            </CardHeader>
          )}
        </HandleLoading>
      </Card>
    </Link>
  );
}
