import React from "react";
import {
  CheckCircleIcon,
  CogIcon,
  ClipboardListIcon,
  ClockIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import "aos/dist/aos.css";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Effortless Collaboration",
    description:
      "Seamlessly connect with your team, assign roles, and share updates in real-time, ensuring everyone stays on the same page.",
    icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
  },
  {
    id: 2,
    title: "Task Automation",
    description:
      "Automate routine tasks and reminders, reducing manual work and ensuring nothing slips through the cracks.",
    icon: <CogIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    id: 3,
    title: "Project Organization",
    description:
      "Keep your projects organized with customizable boards and lists that adapt to your workflow.",
    icon: <ClipboardListIcon className="h-6 w-6 text-orange-500" />,
  },
  {
    id: 4,
    title: "Task Prioritization",
    description:
      "Prioritize tasks based on deadlines, importance, and team dependencies to ensure smooth workflow.",
    icon: <ClockIcon className="h-6 w-6 text-red-500" />,
  },
  {
    id: 5,
    title: "Time Tracking",
    description:
      "Measure productivity by tracking the time spent on each task and project.",
    icon: <ChartBarIcon className="h-6 w-6 text-purple-500" />,
  },
  {
    id: 6,
    title: "Team Collaboration",
    description:
      "Collaborate efficiently with team members, share files, and communicate effortlessly within the platform.",
    icon: <UsersIcon className="h-6 w-6 text-teal-500" />,
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-gray-800">
          How <span className="font-bold">DOQUE</span> Helps You
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          Here&apos;s how our task management system makes your life easier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {servicesData.map((service: Service, index: number) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative p-6 transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex items-center mt-2">
                {service.icon}
                <h3 className="text-2xl font-bold ml-2">{service.title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
