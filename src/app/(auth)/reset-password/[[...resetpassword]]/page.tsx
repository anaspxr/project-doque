'use client';

import React, { useState } from 'react';
import { BiLogIn } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from 'next/link';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Password reset:', password);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#8BD6EE] to-[#F8F7F7] w-full flex justify-center items-center">
            <div className="bg-gradient-to-br from-[#8BD6EE] to-[#F8F7F7] p-12 rounded-2xl shadow-lg w-full max-w-md">

                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg p-4 flex justify-center items-center shadow-md">
                        <BiLogIn className="text-4xl text-black" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-center mb-6">Reset Password</h1>

                <p className="text-gray-600 text-center mb-8">
                    Enter your new password below.
                </p>

                <form onSubmit={handleResetPassword} className="space-y-8">
                    <div className="relative">
                        <RiLockPasswordLine className="absolute left-3 top-4 text-[#5E6061]" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-3 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-4 text-[#5E6061]"
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                    <div className="relative">
                        <RiLockPasswordLine className="absolute left-3 top-4 text-[#5E6061]" />
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="block w-full px-4 py-3 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-4 text-[#5E6061]"
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#8BF376] text-xl text-gray-700 font-semibold px-4 py-3 rounded-2xl shadow-md hover:bg-[#6BBE4D] focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                    >
                        Reset Password
                    </button>
                </form>

                <div className="flex justify-center items-center mt-8 text-sm text-gray-700">
                    <Link href="/login" className="text-[#242425] hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
