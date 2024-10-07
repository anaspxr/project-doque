'use client';

import React, { useState, useEffect } from 'react';
import { BiLogIn } from "react-icons/bi";

export default function VerifyEmail() {
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const [timer, setTimer] = useState(30);

    // Update OTP in the correct index
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Automatically focus next input if a digit is entered
            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleResendOTP = () => {
        setIsResendDisabled(true);
        setTimer(30); 
        console.log('Resending OTP...');
    };

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        } else {
            setIsResendDisabled(false);
        }
    }, [timer]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#8BD6EE] to-[#F8F7F7] w-full flex justify-center items-center">
            <div className="bg-gradient-to-br from-[#8BD6EE] to-[#F8F7F7] p-12 rounded-2xl shadow-lg w-full max-w-lg h-auto">
                
                {/* Icon */}
                <div className="flex justify-center mb-8"> {/* Increased margin */}
                    <div className="bg-white rounded-lg p-3 flex justify-center items-center shadow-md">
                        <BiLogIn className="text-4xl text-black" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-bold text-center mb-4"> {/* Increased margin */}
                    Verify Your Email
                </h1>

                {/* Instruction Text */}
                <p className="text-gray-600 text-sm text-center mb-6"> {/* Increased margin */}
                    An OTP has been sent to your email. Please enter the 6-digit OTP to verify your account.
                </p>

                {/* OTP Label */}
                <p className="text-sm font-semibold text-left mb-6 text-[#5E6061]"> {/* Increased margin */}
                    Enter OTP
                </p>

                {/* OTP Input Fields */}
                <div className="flex justify-between mb-8"> {/* Increased margin */}
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(e, index)}
                            className="w-14 h-14 text-center text-xl border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#93D8EE]"
                        />
                    ))}
                </div>

                {/* Submit Button */}
                <button
                    type="button"
                    className="w-full bg-[#8BF376] text-xl text-gray-700 font-semibold px-4 py-3 rounded-2xl shadow-md hover:bg-[#6BBE4D] focus:outline-none focus:ring-2 focus:ring-[#93D8EE] mb-8"  
                >
                    Submit
                </button>

                {/* Resend OTP Section */}
                <div className="flex justify-center items-center text-sm text-[#5E6061]">
                    <button
                        onClick={handleResendOTP}
                        disabled={isResendDisabled}
                        className={`text-[#5E6061] hover:underline ${isResendDisabled ? 'cursor-not-allowed' : ''}`}
                    >
                        {isResendDisabled ? `Resend OTP in (${timer}s)` : 'Resend OTP'}
                    </button>
                </div>
            </div>
        </div>
    );
}
