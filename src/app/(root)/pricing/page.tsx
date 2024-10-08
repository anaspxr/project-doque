import React from 'react'
import { BsStars } from "react-icons/bs";

export default function page() {
  return (
    <div className="h-screen flex justify-center items-center p-6 bg-gradient-to-b from-gray-100 via-pink-100 to-blue-200">
      <div className="w-full max-w-5xl p-12 rounded-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-medium text-gray-800">Plan & Pricing</h1>
        </div>
        <div className="flex justify-end items-center relative top-5 right-16">
          <h1 className="bg-violet-900 p-2 text-violet-300 rounded-3xl flex items-center gap-2">
            <BsStars /> Most Popular
          </h1>
        </div>

        <div className="flex bg-gray-50 bg-opacity-50 rounded-3xl gap-6">
          <div className="p-8 rounded-xl flex-1  text-start">
            <div className="text-4xl font-bold text-gray-800 mb-4">
              ₹9<span className="text-lg text-gray-500">/month</span>
            </div>
            <h2 className="font-extrabold text-xl mb-4">Basic Plan</h2>
            <p className="text-gray-600 mb-4">Great for small teams or personal projects with a bit more complexity.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>- 10 Projects</li>
              <li>- 25 Tasks per Project</li>
              <li>- Email Support</li>
            </ul>

            <button className="bg-violet-500 text-white py-2 px-6 rounded-lg">
              Choose Plan
            </button>
          </div>

          <div className="p-8 rounded-xl flex-1  text-start">
            <div className="text-4xl font-bold text-gray-800 mb-4">
              ₹29<span className="text-lg text-gray-500">/month</span>
            </div>
            <h2 className="font-extrabold text-xl mb-4">Standard Plan</h2>
            <p className="text-gray-600 mb-4">Best for teams and small companies looking for enhanced features.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>- 50 Projects</li>
              <li>- Unlimited Tasks</li>
              <li>- Priority Support</li>
            </ul>
            <button className="bg-violet-500 text-white py-2 px-6 rounded-lg">
              Choose Plan
            </button>
          </div>

          <div className="p-8 rounded-xl flex-1  text-start">
            <div className="text-4xl font-bold text-gray-800 mb-4">
              ₹99<span className="text-lg text-gray-500">/month</span>
            </div>
            <h2 className="font-extrabold text-xl mb-4">Premium Plan</h2>
            <p className="text-gray-600 mb-4">Ideal for enterprises that require full-featured task management.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>- Unlimited Projects</li>
              <li>- Unlimited Tasks</li>
              <li>- 24/7 Support</li>
            </ul>

            <button className="bg-violet-500 text-white py-2 px-6 rounded-lg">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
