'use client';

import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiLogIn } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        if (password.length < 4) {
            setPasswordError('Password must be more than 4 characters');
            setIsSubmitting(false);
        } else {
            setPasswordError('');
            console.log('Registering user...');
            
            setTimeout(() => {
                console.log('User registered successfully');
                router.push('/signin'); 
            }, 2000);
        }
    };

    const handleGoogleSignup = () => {
        console.log('Signing up with Google...');
    };

    const handleGithubSignup = () => {
        console.log('Signing up with GitHub...');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-white to-[#E0F7FF] w-full flex justify-center items-center">
            <div className="bg-gradient-to-br from-[#E0F7FF] to-white p-8 rounded-2xl shadow-gray-300 shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="bg-white rounded-lg p-3 flex justify-center items-center shadow-md">
                        <BiLogIn className="text-3xl text-black" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
                <p className="text-gray-600 text-center mb-6">
                    Please fill in the details below to create your account.
                </p>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="relative">
                        <AiOutlineMail className="absolute left-3 top-4 text-[#5E6061]" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                            required
                        />
                    </div>
                    <div className="relative">
                        <AiOutlineLock className="absolute left-3 top-4 text-[#5E6061]" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            name="password"
                            className="block w-full px-4 py-3 pl-10 pr-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                            required
                        />
                        <div className="absolute right-3 top-4 cursor-pointer text-[#5E6061]" onClick={togglePasswordVisibility}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </div>
                    </div>
                    {passwordError && (
                        <p className="text-red-500 text-sm">{passwordError}</p>
                    )}
                    <button
                        type="submit"
                        className={`w-full bg-[#8BF376] text-xl text-gray-700 font-semibold px-4 py-3 rounded-2xl shadow-md hover:bg-[#6BBE4D] focus:outline-none focus:ring-2 focus:ring-[#93D8EE] ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <div className="flex items-center justify-between my-4">
                    <hr className="w-full border-t border-gray-500" />
                    <span className="mx-2 text-gray-800 text-xs whitespace-nowrap">or sign in with</span>
                    <hr className="w-full border-t border-gray-500" />
                </div>
                <div className="flex justify-between space-x-4 mt-6">
                    <Button
                        onClick={handleGoogleSignup}
                        className="flex items-center justify-center space-x-2 w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg hover:bg-[#93D8EE] focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                    >
                        <FcGoogle className="text-xl" />
                        <span className='font-semibold text-[#5E6061]'>Google</span>
                    </Button>
                    <Button
                        onClick={handleGithubSignup}
                        className="flex items-center justify-center space-x-2 w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg hover:bg-[#93D8EE] focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                    >
                        <FaGithub className="text-xl" />
                        <span className='font-semibold text-[#5E6061]'>GitHub</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
