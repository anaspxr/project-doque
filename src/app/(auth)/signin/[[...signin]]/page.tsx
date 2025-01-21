"use client";

import React, { useState, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  clearMessages,
  setForgetEmail,
} from "@/lib/store/features/userSlice";
import { AppDispatch, RootState } from "@/lib/store";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const error = useSelector((state: RootState) => state.user.error);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearMessages());
    setLoading(true);
    const result = await dispatch(loginUser({ email, password }));
    if (result?.payload?.data?.newUser) {
      window.location.href = "/onboarding";
    } else if (result?.payload?.statusCode === 200) {
      window.location.href = "/u/home";
    }
    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch, email, password]);

  const handleForgotPassword = () => {
    dispatch(setForgetEmail(email));
    router.push("/forgot-password");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 overflow-x-hidden">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full max-w-4xl bg-white rounded-2xl shadow-2xl">
          <div className="p-5 flex flex-col justify-center">
            <div className="text-left font-bold">
              <span className="bg-black bg-clip-text text-transparent text-2xl font-bold">
                DO
              </span>
              <span className="text-black text-2xl font-bold">
                QUE
              </span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold bg-black bg-clip-text text-transparent mb-2">
                Sign In
              </h2>
              <div className="border-2 w-10 border-black inline-block mb-2"></div>
              <p className="mb-10 text-gray-500">Sign in to your account</p>
              {error && <p className="text-red-500">{error}</p>}
              <form
                onSubmit={handleLogin}
                className="flex flex-col items-center mt-10">
                <div className="bg-gray-100 w-full max-w-xs p-2 flex items-center mb-3">
                  <AiOutlineMail className="text-gray-400 m-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-100 w-full outline-none text-black text-sm flex-1 py-2"
                    required
                    onFocus={() => dispatch(clearMessages())}
                  />
                </div>
                <div className="bg-gray-100 w-full max-w-xs flex items-center mb-3 rounded-md p-1">
                  <AiOutlineLock className="text-gray-400 m-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-100 w-full text-black outline-none text-sm flex-1 py-2"
                    required
                    onFocus={() => dispatch(clearMessages())}
                  />
                  <div
                    className="cursor-pointer text-gray-400 m-2"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </div>
                </div>
                <div className="flex justify-end w-full max-w-xs mb-5">
                  <div
                    onClick={handleForgotPassword}
                    className="text-xs text-gray-500 cursor-pointer">
                    Forgot Password?
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="border-2 border-black  text-black rounded-full px-10 py-2 inline-block font-semibold 
             hover:bg-[#cae3eb] 
             hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                  {loading ? "Logging in..." : "Sign In"}
                </button>
              </form>
            </div>
          </div>
          <div className="bg-gradient-to-r from-white via-[#bbeeff] to-white text-black rounded-br-2xl rounded-bl-2xl sm:rounded-bl-none sm:rounded-tr-2xl py-10 sm:py-36 px-8 sm:px-12 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Don&apos;t have an account? Sign up today and start your journey!
            </p>
            <Link
              href="/signup"
              className="border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#E0F7FF] hover:text-black transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
