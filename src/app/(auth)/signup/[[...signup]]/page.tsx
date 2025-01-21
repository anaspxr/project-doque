"use client";

import React, { useEffect, useState } from "react";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signup, clearMessages } from "@/lib/store/features/userSlice";
import { FormikHelpers } from "formik";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";
import Link from "next/link";

interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
  image?: string;
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { error, successMessage } = useAppSelector((state) => state.user);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please re-enter your password"),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    dispatch(clearMessages());
    const resultAction = await dispatch(
      signup({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        image:
          "https://i.pinimg.com/564x/a3/e4/7c/a3e47c7483116543b6fa589269b760df.jpg",
      })
    );

    if (signup.fulfilled.match(resultAction)) {
      router.push("/verify-otp?email=" + values.email);
    }
    setSubmitting(false);
  };

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
            <div className="mb-6 flex items-center justify-start">
              <span className="bg-black bg-clip-text text-transparent text-2xl font-bold">
                DO
              </span>
              <span className="text-black text-2xl font-bold">
                QUE
              </span>
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-black bg-clip-text text-transparent mb-2">
                Create Account
              </h2>
              <div className="border-2 w-10 border-black inline-block mb-2"></div>
              <p className="mb-6 text-gray-500">
                Please fill in the details below to create your account.
              </p>
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-4">
                  <div className="relative">
                    <AiOutlineUser className="absolute left-3 top-4 text-gray-400" />
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="block w-full px-4 py-3 pl-10 border border-gray-300 rounded-md shadow-md focus:outline-none bg-white text-black focus:border-[#E0F7FF] focus:ring-[#E0F7FF]"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div className="relative">
                    <AiOutlineUser className="absolute left-3 top-4 text-gray-400" />
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="block w-full px-4 py-3 pl-10 border border-gray-300 bg-white text-black rounded-md shadow-md focus:outline-none focus:border-[#E0F7FF] focus:ring-[#E0F7FF]"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div className="relative">
                    <AiOutlineMail className="absolute left-3 top-4 text-gray-400" />
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="block w-full px-4 py-3 pl-10 border border-gray-300 bg-white text-black rounded-md shadow-md focus:outline-none focus:border-[#E0F7FF] focus:ring-[#E0F7FF]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div className="relative">
                    <AiOutlineLock className="absolute left-3 top-4 text-gray-400" />
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      className="block w-full px-4 py-3 pl-10 border border-gray-300 bg-white text-black rounded-md shadow-md focus:outline-none focus:border-[#E0F7FF] focus:ring-[#E0F7FF]"
                    />
                    <div
                      className="absolute right-3 top-4 cursor-pointer text-gray-400"
                      onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div className="relative">
                    <AiOutlineLock className="absolute left-3 top-4 text-gray-400" />
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      className="block w-full px-4 py-3 pl-10 border border-gray-300 bg-white text-black rounded-md shadow-md focus:outline-none focus:border-[#E0F7FF] focus:ring-[#E0F7FF]"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  {(successMessage || error) && (
                    <div
                      className={`text-center mb-4 ${successMessage ? "text-green-600" : "text-red-600"
                        }`}>
                      {successMessage || error}
                    </div>
                  )}
                  <button
                    type="submit"
                    className={`w-full border-2 border-gray-600 text-black rounded-xl px-12 py-3 font-semibold 
              hover:bg-[#E0F7FF]  
              hover:text-black focus:outline-none focus:ring-2
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                  <div className="mt-4 text-center md:hidden">
                    <p className="text-gray-500">Already have an account?</p>
                    <Link
                      href="/signin"
                      className="text-gray-700 hover:border-b border-gray-700 font-semibold">
                      Sign In
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="hidden sm:block w-full md:w-1/2 bg-gradient-to-r from-white via-[#bbeeff] to-white text-black rounded-tr-2xl rounded-br-2xl flex-col justify-center items-center p-10 space-y-6 relative">
            <h2 className="text-2xl font-bold text-center mt-12">
              Welcome to Doque!
            </h2>
            <Image
              width={1024}
              height={768}
              src="/images/onboarding1.jpg"
              alt="Onboarding Illustration"
              className="rounded-full shadow-lg w-72 h-72 object-cover ml-8"
            />
            <p className="text-center">
              Already have an account? Sign in to continue.
            </p>
            <Link
              href="/signin"
              className="border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#E0F7FF] hover:text-black">
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
