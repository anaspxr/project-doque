'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { RiLockPasswordLine } from "react-icons/ri";
import Link from 'next/link';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, clearMessages } from '@/lib/store/features/userSlice';
import { AppDispatch, RootState } from '@/lib/store';

export default function ResetPassword() {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, successMessage } = useSelector((state: RootState) => state.user);

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const router = useRouter();
    const { token }: { token?: string } = useParams();

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(clearMessages());
        if (newPassword !== confirmPassword) {
            return;
        }
        if (!token) {
            return;
        }
        try {
            await dispatch(resetPassword({ token, newPassword })).unwrap();
            router.push('/signin');
        } catch (error) {
            console.error("Reset password failed:", error);
        }
    };

    useEffect(() => {
        dispatch(clearMessages());
    }, [dispatch]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 bg-gray-100 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-white via-[#dbf7ff] p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="text-center font-bold text-3xl">
                        <span className="bg-black bg-clip-text text-transparent text-2xl font-bold">
                            DO
                        </span>
                        <span className="text-black text-2xl font-bold">QUE</span>
                    </div>
                </div>

                <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 
               bg-black bg-clip-text text-transparent ">
                    Reset Password
                </h1>

                <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
                    Enter your new password below.
                </p>

                {error && <p className="text-red-600 text-center mb-4">{error}</p>}
                {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}
                {newPassword !== confirmPassword && confirmPassword && (
                    <p className="text-red-600 text-center mb-4">Passwords do not match.</p>
                )}

                <form onSubmit={handleResetPassword} className="space-y-6 sm:space-y-8">
                    <div className="relative">
                        <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5E6061]" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => {
                                setNewPassword(e.target.value);
                                dispatch(clearMessages());
                            }}
                            className="block w-full px-4 py-3 pl-10 border bg-white text-black border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#90d7ef] transition duration-300"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5E6061]"
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                    <div className="relative">
                        <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5E6061]" />
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                dispatch(clearMessages());
                            }}
                            className="block w-full px-4 py-3 pl-10 border bg-white text-black border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#90d7ef] transition duration-300"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5E6061]"
                            aria-label="Toggle confirm password visibility"
                        >
                            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-white via-[#bbeeff] to-white text-base sm:text-xl text-black border border-black font-semibold 
             px-4 py-3 rounded-2xl shadow-md 
             hover:border-[#90d7ef] hover:bg-[#9fd3e4]
             hover:text-black focus:outline-none focus:ring-2 focus:ring-[#90d7ef]
             transition duration-300 ease-in-out"
                        disabled={loading}
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>

                </form>

                <div className="flex justify-center items-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-700">
                    <Link href="/signin" className="text-[#242425] hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
