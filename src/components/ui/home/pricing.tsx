"use client";

export default function Pricing() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900">Our Pricing Plans</h2>
                <p className="text-gray-600 text-lg mt-4">
                    Choose the best plan that fits your project needs.
                </p>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {/* Free Plan */}
                    <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-lg border border-white border-opacity-20">
                        <h3 className="text-2xl font-bold">Free Plan</h3>
                        <p className="mt-4 text-gray-600">
                            Perfect for individuals and small projects just getting started.
                        </p>
                        <ul className="mt-4 text-left text-gray-700">
                            <li>- 5 Projects</li>
                            <li>- 10 Tasks per Project</li>
                            <li>- Basic Support</li>
                        </ul>
                        <p className="mt-6 text-xl font-semibold text-gray-500">Free</p>
                        <button className="mt-4 h-12 px-6 text-gray-700 font-bold bg-gradient-to-r from-[#FA6775] to-[#F0ECDB] rounded-lg shadow-lg transition duration-500 ease-in-out hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3c4fe0] focus:ring-opacity-50">
                            Get Started
                        </button>
                    </div>

                    {/* Basic Plan */}
                    <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-lg border border-white border-opacity-20">
                        <h3 className="text-2xl font-bold">Basic Plan</h3>
                        <p className="mt-4 text-gray-600">
                            Great for small teams or personal projects with a bit more complexity.
                        </p>
                        <ul className="mt-4 text-left text-gray-700">
                            <li>- 10 Projects</li>
                            <li>- 25 Tasks per Project</li>
                            <li>- Email Support</li>
                        </ul>
                        <p className="mt-6 text-xl font-semibold text-gray-500">₹9/month</p>
                        <button className="mt-4 h-12 px-6 text-gray-700 font-bold bg-gradient-to-r from-[#FA6775] to-[#F0ECDB] rounded-lg shadow-lg transition duration-500 ease-in-out hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3c4fe0] focus:ring-opacity-50">
                            Choose Plan
                        </button>
                    </div>

                    {/* Standard Plan */}
                    <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-lg border border-white border-opacity-20">
                        <h3 className="text-2xl font-bold">Standard Plan</h3>
                        <p className="mt-4 text-gray-600">
                            Best for teams and small companies looking for enhanced features.
                        </p>
                        <ul className="mt-4 text-left text-gray-700">
                            <li>- 50 Projects</li>
                            <li>- Unlimited Tasks</li>
                            <li>- Priority Support</li>
                        </ul>
                        <p className="mt-6 text-xl font-semibold text-gray-500">₹29/month</p>
                        <button className="mt-4 h-12 px-6 text-gray-700 font-bold bg-gradient-to-r from-[#FA6775] to-[#F0ECDB] rounded-lg shadow-lg transition duration-500 ease-in-out hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3c4fe0] focus:ring-opacity-50">
                            Choose Plan
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-lg border border-white border-opacity-20">
                        <h3 className="text-2xl font-bold">Premium Plan</h3>
                        <p className="mt-4 text-gray-600">
                            Ideal for enterprises that require full-featured task management.
                        </p>
                        <ul className="mt-4 text-left text-gray-700">
                            <li>- Unlimited Projects</li>
                            <li>- Unlimited Tasks</li>
                            <li>- 24/7 Support</li>
                        </ul>
                        <p className="mt-6 text-xl font-semibold text-gray-500">₹99/month</p>
                        <button className="mt-4 h-12 px-6 text-gray-700 font-bold bg-gradient-to-r from-[#FA6775] to-[#F0ECDB] rounded-lg shadow-lg transition duration-500 ease-in-out hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3c4fe0] focus:ring-opacity-50">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
