"use client";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
        <p className="text-gray-600 text-lg mt-4">
          See how DOQUE has transformed the way people manage tasks.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/30 backdrop-blur-md shadow-lg rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <p className="text-lg text-gray-700">
              "DOQUE has completely changed the way I organize my projects. It's
              simple and effective."
            </p>
            <p className="mt-4 font-semibold">- Jane Doe, Project Manager</p>
          </div>
          <div className="p-6 bg-white/30 backdrop-blur-md shadow-lg rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <p className="text-lg text-gray-700">
              "I love how easy it is to collaborate with my team using DOQUE."
            </p>
            <p className="mt-4 font-semibold">- John Smith, Developer</p>
          </div>
          <div className="p-6 bg-white/30 backdrop-blur-md shadow-lg rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <p className="text-lg text-gray-700">
              "The task tracking feature helps me stay on top of all my
              responsibilities."
            </p>
            <p className="mt-4 font-semibold">- Sarah Lee, Freelancer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
