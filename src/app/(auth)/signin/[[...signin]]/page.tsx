"use client";

import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user-context";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useUser();

  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in user...");

    setTimeout(() => {
      console.log("User logged in successfully");
      router.push("/home");
    }, 1000);
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google...");
    login({
      name: "John Doe",
      email: "johndoe@gmail.com",
      avatar: null,
      id: "111",
    });
  };

  const handleGithubLogin = () => {
    console.log("Logging in with GitHub...");
    router.push("/home");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-[#E0F7FF] w-full flex justify-center items-center">
      <div className="bg-gradient-to-br from-[#E0F7FF] to-white p-8 rounded-2xl shadow-gray-300 shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-3 flex justify-center items-center shadow-lg">
            <BiLogIn className="text-3xl text-black" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your credentials to access your account.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-4 text-[#5E6061]" />
            <input
              type="email"
              placeholder="Enter your email"
              className="block w-full px-4 py-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
              required
            />
          </div>
          <div className="relative">
            <AiOutlineLock className="absolute left-3 top-4 text-[#5E6061]" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="block w-full px-4 py-3 pl-10 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
              required
            />
            <div
              className="absolute right-3 top-4 cursor-pointer text-[#5E6061]"
              onClick={togglePasswordVisibility}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <div className="text-right text-sm">
            <Link
              href="/forgot-password"
              className="text-[#5E6061] hover:text-[#333]">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-[#8BF376] text-xl text-gray-700 font-semibold px-4 py-3 rounded-2xl shadow-md hover:bg-[#6BBE4D] focus:outline-none focus:ring-2 focus:ring-[#93D8EE]">
            Get Started
          </button>
        </form>
        <div className="flex items-center justify-between my-4">
          <hr className="w-full border-t border-gray-500" />
          <span className="mx-2 text-gray-800 text-xs whitespace-nowrap">
            or sign in with
          </span>
          <hr className="w-full border-t border-gray-500" />
        </div>
        <div className="flex justify-between space-x-4 mt-4">
          <Button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center space-x-2 w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg shadow-md hover:bg-[#93D8EE] focus:outline-none focus:ring-2 focus:ring-[#93D8EE]">
            <FcGoogle className="text-xl" />
            <span className="font-semibold text-[#5E6061]">Google</span>
          </Button>
          <Button
            onClick={handleGithubLogin}
            className="flex items-center justify-center space-x-2 w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg shadow-md hover:bg-[#93D8EE] focus:outline-none focus:ring-2 focus:ring-[#93D8EE]">
            <FaGithub className="text-xl" />
            <span className="font-semibold text-[#5E6061]">GitHub</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
