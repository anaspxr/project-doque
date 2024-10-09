"use client";

import React from "react";
import { PricingPlan } from "@/types/subscriptions";

export default function PlanButton({ plan }: { plan: PricingPlan }) {
  return (
    <button
      className={`mt-4 h-12 px-6 text-white font-bold rounded-lg shadow-lg transition duration-500 ease-in-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
      style={{
        background: `linear-gradient(to right, ${plan.colorFrom}, ${plan.colorTo})`,
        border: `1px solid ${plan.colorFrom}`,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = `linear-gradient(to right, ${plan.colorTo}, ${plan.colorFrom})`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = `linear-gradient(to right, ${plan.colorFrom}, ${plan.colorTo})`)
      }>
      {plan.price === "Free" ? "Get Started" : "Choose Plan"}
    </button>
  );
}
