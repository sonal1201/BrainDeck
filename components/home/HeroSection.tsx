import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Ghost, WandSparklesIcon } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="relative mx-auto flex flex-col z-0 items-center justify-center transition-all animate-in py-16 sm:py-20 lg:pb-28 lg:px-12 max-w-7xl">
        <Button variant={"outline"} className="rounded-full w-50 h-10">
          {" "}
          <WandSparklesIcon size={30} className="font-bold text-blue-500" />
          <p className="font-semibold">Powered By AI</p>
        </Button>

        <h1 className="font-bold py-6 text-center text-4xl">
          Turn Complex PDFs into Smart,{" "}
          <span className="relative inline-block">
            <span className="relative z-10 px-2">Readable</span>
            <span
              className="absolute inset-0 bg-blue-100 -rotate-1 rounded-lg transform "
              aria-hidden="true"
            ></span>
          </span>
          {" "}Summaries
        </h1>
        <h2 className="font-normal text-center  text-gray-600 lg:max-w-4xl ">
          Save hours of reading — BrainDeck extracts the key ideas and presents
          them beautifully in seconds.
        </h2>
        <Button
          className="text-white cursor-pointer group hover:no-underline bg-blue-500 text-base lg:mt-16  mt-6 sm:text-lg lg:text-xl rounded-full px-6 sm:px-7 lg:px-10 py-5  bg-linear-to-r from-blue-900 to-blue-400 hover:bg-linear-to-r hover:from-blue-400 hover:to-blue-900  shadow-lg transition-all duration-300"
          variant={"link"}
        >
          <Link href={"#pricing"} className="flex items-center gap-1">
            <span>Try BrainDeck Now</span>
            <ArrowRight className="w-5 h-5  mt-1 transform duration-300 group-hover:translate-x-1 group-hover:scale-110 animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
