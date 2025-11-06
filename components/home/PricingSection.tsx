import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

type PlanType = {
  id: string;
  name: string;
  description: string;
  price: number;
  items: string[];
  paymentLink: string;
  priceId: string;
};

const plans: PlanType[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Basic plan",
    price: 0.99,
    items: [
      "3 PDF summeries per day",
      "Standard processing speed",
      "Email Support",
    ],
    paymentLink: "/price",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Pro plan",
    price: 1.99,
    items: [
      "3 PDF summeries per day",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "",
    priceId: "",
  },
];

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
  priceId,
}: PlanType) => {
  return (
    <div className="relative w-full  max-w-lg">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 shadow-md lg:gap-8 rounded-xl border-[3px] border-blue-300 p-8",
          id === "pro" ? "border-3 border-blue-300" : "border-gray-200"
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg font-bold lg:text-xl capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-5xl tracking-tight font-extrabold">${price}</div>
          <div className="mt-2">
            <p className="text-sm uppercase font-semibold text-gray-500">USD</p>
            <p className="text-sm  font-semibold text-gray-500">/month</p>
          </div>
        </div>

        <div className="space-y-2.5  leading-relaxed text-base flex-1">
          {items.map((item, idx) => (
            <li className="flex items-center gap-2" key={idx}>
              <div className="p-1 rounded-full bg-gray-100">
                <Check size={18} className="text-blue-400" />
              </div>
              {item}
            </li>
          ))}
        </div>
        <div className="space-y-2 w-full flex-row  flex justify-center items-center gap-2 bg-linear-to-r from-blue-900 to-blue-400 hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-900 text-white border-2 py-2  font-bold rounded-2xl cursor-pointer">
          {" "}
          <Link href={paymentLink ?? "#"} className="flex gap-2 items-center">
            Buy Now <ArrowRight size={18} />
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section>
      <div className="py-8 lg:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-center mb-4 lg:mb-12 text-2xl font-bold text-blue-500 uppercase max-w-5xl mx-auto">Pricing</h2>
      </div>
      <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {plans.map((plan, id) => (
          <PricingCard key={id} {...plan} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default PricingSection;
