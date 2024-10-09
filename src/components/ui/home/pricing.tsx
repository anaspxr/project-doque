import React from "react";
import "aos/dist/aos.css";
import { PricingPlan } from "@/types/subscriptions";
import PlanButton from "./plan-button";

const pricingData: PricingPlan[] = [
  {
    title: "Free Plan",
    description:
      "Perfect for individuals and small projects just getting started.",
    features: ["5 Projects", "10 Tasks per Project", "Basic Support"],
    price: "Free",
    colorFrom: "#34D399",
    colorTo: "#10B981",
  },
  {
    title: "Basic Plan",
    description:
      "Great for small teams or personal projects with a bit more complexity.",
    features: ["10 Projects", "25 Tasks per Project", "Email Support"],
    price: "₹9/month",
    colorFrom: "#60A5FA",
    colorTo: "#3B82F6",
  },
  {
    title: "Standard Plan",
    description:
      "Best for teams and small companies looking for enhanced features.",
    features: ["50 Projects", "Unlimited Tasks", "Priority Support"],
    price: "₹29/month",
    colorFrom: "#FBBF24",
    colorTo: "#F59E0B",
  },
  {
    title: "Premium Plan",
    description:
      "Ideal for enterprises that require full-featured task management.",
    features: ["Unlimited Projects", "Unlimited Tasks", "24/7 Support"],
    price: "₹99/month",
    colorFrom: "#F472B6",
    colorTo: "#EC4899",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-gray-900">Our Pricing Plans</h2>
        <p className="text-gray-600 text-lg mt-4">
          Choose the best plan that fits your project needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {pricingData.map((plan, index) => (
            <div
              key={plan.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="shadow-lg rounded-lg overflow-hidden">
              <div
                className="p-6 text-white"
                style={{
                  background: `linear-gradient(to right, ${plan.colorFrom}, ${plan.colorTo})`,
                }}>
                <h3 className="text-2xl font-bold">{plan.title}</h3>
              </div>

              <div className="p-6 bg-white text-gray-700">
                <p className="mt-4">{plan.description}</p>
                <ul className="mt-4 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-gray-600">
                      - {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-2xl text-gray-600">{plan.price}</p>
                <PlanButton plan={plan} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
