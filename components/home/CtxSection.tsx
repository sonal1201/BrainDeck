import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CtxSection = () => {
  return (
    <section className="bg-blue-100/30 py-8">
      <div className="py-8 lg:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 items-center justify-center space-y-4 text-center">
          <div>
            <h2 className="bg-linear-to-b from-blue-600 to-blue-400 bg-clip-text text-transparent text-3xl font-bold">
              Ready to Save Hours of Reading Time?
            </h2>
            <p className="text-gray-500 text-lg">
              Transform lengthy documents into clear, actionable insight with
              our AI-powered summmerizer.
            </p>
          </div>
          <div>
            <div>
              <Button
                variant={"link"}
                className="min-[400px] cursor-pointer  hover:no-underline bg-linear-to-r from-blue-900 to-blue-400 hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-900 text-white w-40 py-5 hover:scale-105"
              >
                <Link
                  href={"/pricing"}
                  className="flex  items-center cursor-pointer font-bold
                  "
                >
                  Get Started{" "}
                  <ArrowRight className="ml-2  h-4 w-4 animate-pulse" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtxSection;
