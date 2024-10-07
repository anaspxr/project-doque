import React from "react";

export default function ChatFeature() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-white">
      {/* Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="/images/heroMessage.png"
          alt="Group Chat Feature"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-4xl font-bold text-black mb-6">
          Group Chat & Discussion
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Collaborate seamlessly with your team through our group chat feature.
          Discuss tasks, share updates, and stay connected with ease.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Keep your conversations organized, and ensure nothing gets missed
          while working on your tasks together.
        </p>
        <p className="text-lg text-gray-700">
          Experience a new level of collaboration in task management with our
          intuitive group chat system.
        </p>
      </div>
    </section>
  );
}
