"use client";
import CoursesSection from "@/components/HomePage/CourseSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesSection from "@/components/HomePage/Services";
import AboutSection from "@/components/HomePage/AboutUs";
import CTABanner from "@/components/HomePage/CTASection";
import WhoCanJoin from "@/components/HomePage/WhoCanJoin";
import HowToApply from "@/components/HomePage/HowToApply";

export default function Home() {
  return (
    <div className="min-h-screen bg-quantum sm:py-36 py-28">
      <HeroSection />
      <ServicesSection />
      {/* <CoursesSection /> */}
      <AboutSection />
      <WhoCanJoin />
      <HowToApply />
      <CTABanner />
    </div>
  );
}
