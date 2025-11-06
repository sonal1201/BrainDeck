import {
  BrainCircuit,
  FileOutput,
  FileText,
  MoveRightIcon,
} from "lucide-react";
import React, { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={52} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Drag or drop your PDF document or click to upload",
  },
  {
    icon: <BrainCircuit size={52} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly.",
  },
  {
    icon: <FileOutput size={52} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Receive a clear, concise summary of your document.",
  },
];

const HowItWorkSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-100/30 z-20">
      <div className="py-8 lg:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-xl uppercase mb-2 text-blue-500">
            How it works
          </h2>
          <h3 className="text-lg font-semibold text-gray-500 max-w-2xl mx-auto">
            Transform any PDF into an easy-to-digest summary in three simple
            steps.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div className="relative flex items-stretch">
              <StepItem key={idx} {...step} />
              {idx < steps.length - 1 && (
                <div className="hidden absolute md:block top-1/2 -right-10 transform -translate-y-1/2 z-10">
                  <MoveRightIcon
                    size={32}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;

function StepItem({ icon, label, description }: Step) {
  return (
    <div className="relative shadow-md p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 transform transition-all duration-300  cursor-pointer">
      <div className="flex flex-col gap-4 h-full text-center items-center">
        <div className="text-blue-500">{icon}</div>
        <h4 className="text-lg font-semibold text-gray-800">{label}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
