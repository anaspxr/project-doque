'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp, resendOtp } from '@/lib/store/features/userSlice';
import { AppDispatch, RootState } from '@/lib/store';

export default function VerifyEmail() {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [countdown, setCountdown] = useState<number>(30);

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);
    const success = useSelector((state: RootState) => state.user.successMessage);

    const searchParams = useSearchParams();
    const email = searchParams.get('email') || '';

    useEffect(() => {
        if (error) setStatusMessage(error);
        if (success) setStatusMessage(success);
    }, [error, success]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            setStatusMessage(null);

            if (value && index < otp.length - 1) {
                const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
                nextInput?.focus();
            }
        }
    };

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
            prevInput?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pasteData = e.clipboardData.getData('text').slice(0, 6).replace(/[^0-9]/g, '');
        if (pasteData.length === otp.length) {
            setOtp(pasteData.split(''));
        }
    };

    const handleSubmit = async () => {
        const fullOtp = otp.join('');

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatusMessage('Invalid email address.');
            return;
        }

        setStatusMessage(null);
        const response = await dispatch(verifyOtp({ email, otp: fullOtp }));

        if (verifyOtp.fulfilled.match(response)) {
            setStatusMessage('OTP verified successfully!');
            router.push('/signin');
        } else {
            setStatusMessage(error || 'Failed to verify OTP.');
        }
    };

    const handleResendOtp = async () => {
        setStatusMessage(null);
        setCountdown(30);
        await dispatch(resendOtp(email));
        const response = await dispatch(resendOtp(email));
        if (resendOtp.fulfilled.match(response)) {
            setStatusMessage('OTP resent successfully!');
        } else {
            setStatusMessage(error || 'Failed to resend OTP.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 sm:px-6 lg:px-8 bg-gray-100">
            <div className="bg-gradient-to-r from-white via-[#dbf7ff] to-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="text-center font-bold text-3xl">
                        <span className="bg-black bg-clip-text text-transparent text-2xl font-bold">
                            DO
                        </span>
                        <span className="text-black text-2xl font-bold">QUE</span>
                    </div>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 
               bg-black bg-clip-text text-transparent">
                    Verify Your Email
                </h1>

                <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
                    An OTP has been sent to your email. Please enter the 6-digit OTP to verify your account.
                </p>
                <p className="text-sm font-semibold text-left mb-4 sm:mb-6 text-gray-800">
                    Enter OTP
                </p>
                {statusMessage && (
                    <div className="text-center mb-4 text-green-500">{statusMessage}</div>
                )}
                <div className="grid grid-cols-6 gap-2 sm:gap-4 mb-6 sm:mb-8">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(e, index)}
                            onKeyDown={(e) => handleBackspace(e, index)}
                            onPaste={index === 0 ? handlePaste : undefined}
                            className="w-full h-12 sm:h-14 text-center text-xl bg-white text-black border border-gray-300 rounded-lg shadow-md 
                 focus:outline-none focus:ring-2 focus:ring-[#b0e0ef] 
                 transition duration-300 ease-in-out 
                 hover:border-[#90d7ef] focus:border-[#8ec9dd]"
                            aria-label={`OTP digit ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-white via-[#bbeeff] to-white text-base sm:text-xl text-black font-semibold 
             px-4 py-2 sm:py-3 rounded-2xl shadow-md 
             hover:bg-[#cae3eb] border border-black 
             focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                >
                    {loading ? 'Verifying...' : 'Verify'}
                </button>
                <div className="mt-6 text-center">
                    <button
                        onClick={handleResendOtp}
                        disabled={countdown > 0 || loading}
                        className={`text-sm font-semibold text-black hover:text-gray-500  transition ${countdown > 0 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {countdown > 0 ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
                    </button>
                </div>
            </div>
        </div>
    );
}
