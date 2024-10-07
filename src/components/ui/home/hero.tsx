"use client";

import { useEffect } from "react";
import { FaTasks } from "react-icons/fa";
import Feature from "./feature";
import Services from "./services";
import Pricing from "./pricing";
import Footer from "./footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatFeature from "./chatFeature";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Top Gradient Background */}
      <div className="top-0 left-0 w-full h-full bg-gradient-to-r from-white via-[#E0F7FF] to-white">
        {/* Navbar */}
        <header className="absolute top-0 left-0 w-full py-6 flex justify-between items-center px-10">
          <div className="flex items-center space-x-2">
            <FaTasks className="text-2xl text-black" />
            <h1 className="font-megrim text-black font-bold text-2xl">DOQUE</h1>
          </div>
          {/* Login Button */}
          <div className="flex justify-end px-5 py-2">
            <button className="relative h-12 px-6 text-lg font-semibold text-black bg-transparent rounded-lg overflow-hidden border border-x-4  hover:border-black transition duration-150 ease-in-out">
              <span className="relative z-10">Login</span>
            </button>
          </div>
        </header>

        {/* Main Hero Section */}
        <section className="relative text-center pt-32 pb-10 animate-fadeIn">
          <div className="relative z-10 m-16">
            <h1 className="text-9xl font-bold">
              DO
              <span className="relative inline-block">
                <span
                  className="absolute inset-0"
                  style={{
                    WebkitTextStroke: "2px black",
                    color: "transparent",
                  }}
                >
                  QUE
                </span>
                <span className="relative z-10 text-transparent bg-clip-text transition-all duration-300 ease-in-out hover:bg-gray-700">
                  QUE
                </span>
              </span>
            </h1>

            <p className="text-black text-3xl mt-12">
              Effortlessly Manage Your Projects and Tasks
            </p>

            <p className="text-black text-opacity-75 text-lg my-6 max-w-2xl mx-auto">
              Organize, collaborate, and track progress with our powerful yet
              simple task management tool.
            </p>

            {/* Button */}
            <button className="my-8 relative inline-flex items-center justify-center h-12 px-4 text-lg font-semibold text-[#36395A] bg-[#FCFCFD] rounded-lg border-0 shadow-lg transition-all duration-150 ease-in-out transform active:translate-y-0 hover:translate-y-[-2px] focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-[#D6D6E7] focus:ring-opacity-50 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset] active:shadow-[rgba(214,214,231,1)_0_3px_7px_inset]">
              Get Started Free
            </button>
          </div>

          {/* Image inside a box */}
          <section className="relative py-20">
            {/* Wrapper for Text and Image */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Left Side - Text */}
              <div
                data-aos="fade-right"
                className="md:w-1/3 md:order-1 order-2"
              >
                <h2 className="text-2xl text-black mb-4">
                  Empower Collaboration and Boost <br /> Productivity with{" "}
                  <span className="font-bold">DOQUE</span>
                </h2>
                <p className="text-black text-opacity-75 text-lg mt-4 max-w-2xl mx-auto">
                  Empower your collaboration and boost productivity with DOQUE's
                  intuitive task management platform. Whether leading a team or
                  managing personal projects, our solution adapts to your needs.
                  With real-time updates, smart notifications, and easy
                  prioritization, you’ll never miss a deadline. Streamline your
                  workflow and watch productivity soar with DOQUE
                </p>
              </div>

              {/* Right Side - Image */}
              <div
                data-aos="fade-left"
                className="md:w-1/2 md:order-2 order-1 transition-transform duration-500 ease-in-out transform hover:translate-x-2"
              >
                <div
                  className="w-[738px] h-[455px] bg-cover bg-center shadow-lg rounded-lg transition-transform duration-300 ease-in-out"
                  style={{
                    backgroundImage: `url('/images/heroImage.png')`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </section>
        </section>

        {/* Features Section */}
        <div data-aos="fade-up">
          <Feature />
        </div>

        <div data-aos="fade-up">
          <ChatFeature />
        </div>

        {/* Services Section */}
        <div data-aos="fade-up">
          <Services />
        </div>

        {/* Pricing Section */}
        <div data-aos="fade-up">
          <Pricing />
        </div>

        <Footer />
      </div>
    </div>
  );
}
