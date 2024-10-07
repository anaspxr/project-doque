"use client";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "📅",
    title: "Calendar View",
    description:
      "Stay on top of your schedule with day, week, and month views.",
  },
  {
    icon: "🛠️",
    title: "Task Tools",
    description: "Use powerful tools to assign and manage tasks easily.",
  },
  {
    icon: "💬",
    title: "Group Messaging",
    description:
      "Communicate with your team in real-time using our group messaging feature.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "Track progress and monitor performance with detailed reports.",
  },
  {
    icon: "⚡",
    title: "Quick Setup",
    description: "Sign up in seconds and start managing tasks immediately.",
  },
];

const Feature: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Features</h2>
        <p className="text-gray-600 text-lg mt-4">
          Discover what makes DOQUE the best tool for managing your projects and
          tasks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white/30 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
