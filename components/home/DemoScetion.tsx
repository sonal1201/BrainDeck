import { FileTextIcon } from "lucide-react";
import React from "react";

const DemoScetion = () => {
  return (
    <section className="relative">
      <div className="py-8 lg:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 "></div>
      <div className="flex flex-col text-center items-center">
        <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 border-gray-500/20 border-1 backdrop-blur-xs shadow-lg mb-1">
          <FileTextIcon className="text-blue-500" />
        </div>
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold max-w-2xl max-auto px-4 sm:px-6">
            See BrainDeck turn{" "}
            <span className="bg-linear-to-b from-blue-600 to-blue-400 bg-clip-text text-transparent">
              dense PDFs into clear,
            </span>{" "}
            readable summaries.
          </h3>
        </div>
        <div className="flex justify-center items-center   px-2 sm-px-4 lg:px-6">
            {/* Summary View */}
        </div>
      </div>
    </section>
  );
};

export default DemoScetion;
