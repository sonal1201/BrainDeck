import Bgpattern from "@/components/bg-pattern";
import DemoScetion from "@/components/home/DemoScetion";
import HeroSection from "@/components/home/HeroSection";
import HowItWorkSection from "@/components/home/HowItWorkSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background pattern */}
      <Bgpattern />

      {/* Foreground content */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <HeroSection />
        <DemoScetion/>
      </div>
      <HowItWorkSection/>
    </div>
  );
}
