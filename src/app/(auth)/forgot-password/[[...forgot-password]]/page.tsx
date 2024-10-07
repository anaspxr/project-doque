'use client';

import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLogIn } from "react-icons/bi";
import Link from 'next/link';

export default function ForgotPassword() {
    const handleForgotPassword = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('OTP sent to the email.');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#8BD6EE] to-[#F8F7F7] w-full flex justify-center items-center">
            <div className="bg-gradient-to-br from-[#8BD6EE] to-[#F8F7F7] p-12 rounded-2xl shadow-lg w-full max-w-md">
                
                {/* Icon */}
                <div className="flex justify-center mb-8"> {/* Increased margin */}
                    <div className="bg-white rounded-lg p-4 flex justify-center items-center shadow-md">
                        <BiLogIn className="text-4xl text-black" /> {/* Increased icon size */}
                    </div>
                </div>
                
                {/* Heading */}
                <h1 className="text-3xl font-bold text-center mb-6"> {/* Increased margin */}
                    Forgot Password?
                </h1>
                
                {/* Instruction Text */}
                <p className="text-gray-600 text-center mb-8"> {/* Increased margin */}
                    Enter your email to receive an OTP to reset your password.
                </p>

                {/* Form */}
                <form onSubmit={handleForgotPassword} className="space-y-8"> {/* Increased spacing */}
                    <div className="relative">
                        <AiOutlineMail className="absolute left-3 top-4 text-[#5E6061]" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#8BF376] text-xl text-gray-700 font-semibold px-4 py-3 rounded-2xl shadow-md hover:bg-[#6BBE4D] focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                    >
                        Send OTP
                    </button>
                </form>
                
                {/* Links */}
                <div className="flex justify-center items-center mt-8 text-sm text-gray-700"> {/* Increased margin */}
                    <Link href="/signup" className="text-[#242425] hover:underline">
                        Create New Account
                    </Link>
                    <span className="mx-4 text-gray-600">|</span> {/* Increased gap */}
                    <Link href="/login" className="text-[#242425] hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
