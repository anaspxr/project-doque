"use client";

import Spinner from "@/components/ui/spinner/spinner";
import { useUser } from "@/contexts/user-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const { loggedUser, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (loggedUser) {
        return router.push("/u/home");
      }
      return router.push("/home");
    }
  }, [loggedUser, router, loading]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Spinner />
    </div>
  );
}
