"use client";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/Services";
import CTABanner from "@/components/HomePage/CTASection";
import WhoCanJoin from "@/components/HomePage/WhoCanJoin";
import HowToApply from "@/components/HomePage/HowToApply";
import AnimateOnView from "@/components/ui/AnimateOnView";

export default function Home() {
  return (
    <div className="min-h-screen bg-quantum sm:pt-32 pt-28">
      <HeroSection />
      <AnimateOnView animationType="slide-up" delay={0.1}>
        <ServicesSection />
      </AnimateOnView>
      <AnimateOnView animationType="slide-up" delay={0.2}>
        <WhoCanJoin />
      </AnimateOnView>
      <AnimateOnView animationType="slide-up" delay={0.3}>
        <HowToApply />
      </AnimateOnView>
      <AnimateOnView animationType="slide-up" delay={0.4}>
        <CTABanner />
      </AnimateOnView>
    </div>
  );
}
