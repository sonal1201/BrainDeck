import Bgpattern from "@/components/bg-pattern";
import DemoScetion from "@/components/home/DemoScetion";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background pattern */}
      <Bgpattern />

      {/* Foreground content */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <HeroSection />
        <DemoScetion/>
      </div>
    </div>
  );
}
