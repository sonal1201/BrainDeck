import Bgpattern from "@/components/bg-pattern";
import CtxSection from "@/components/home/CtxSection";
import DemoScetion from "@/components/home/DemoScetion";
import HeroSection from "@/components/home/HeroSection";
import HowItWorkSection from "@/components/home/HowItWorkSection";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <Bgpattern />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col gap-24">
        <HeroSection />
        <DemoScetion />
        <HowItWorkSection />
        <PricingSection />
        <CtxSection />
      </div>
    </div>
  );
}
