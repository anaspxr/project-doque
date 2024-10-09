"use client";

import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<{
  loggedUser: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
} | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useBoards must be used within a BoardsProvider");
  }
  return context;
};

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    setLoggedUser(user);
    router.push("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setLoggedUser(null);
  };

  const values = { loggedUser, loading, login, logout };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
