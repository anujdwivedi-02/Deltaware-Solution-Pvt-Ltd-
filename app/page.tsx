"use client";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/Services";
import CTABanner from "@/components/HomePage/CTASection";
import WhoCanJoin from "@/components/HomePage/WhoCanJoin";
import HowToApply from "@/components/HomePage/HowToApply";

export default function Home() {
  return (
    <div className="min-h-screen bg-quantum sm:pt-32 pt-28 pb-8">
      <HeroSection />
      <ServicesSection />
      <WhoCanJoin />
      <HowToApply />
      <CTABanner />
    </div>
  );
}
