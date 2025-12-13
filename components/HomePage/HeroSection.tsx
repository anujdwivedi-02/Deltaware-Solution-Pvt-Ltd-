"use client";
import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/badge";
import { Highlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";
import { NumberTicker } from "../ui/NumberTicker";
const statsData = [
  {
    title: "Happy Clients",
    value: 500,
    icon: "Happy",
    color: "text-cyber-teal",
    prefix: "+",
  },
  {
    title: "Students Trained",
    value: 2000,
    icon: "Graduate",
    color: "text-ai-violet",
    prefix: "+",
  },
  {
    title: "Projects Delivered",
    value: 1000,
    icon: "Project",
    color: "text-neural-blue",
    prefix: "+",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden sm:pb-10 pb-6"
    >
      <div className="absolute inset-0 bg-quantum-navy">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
        <div className="absolute inset-0 cyber-grid z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[100px] z-0"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-violet rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neural-blue rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyber-teal rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid sm:pt-8 pt-0 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <Badge>Tech That Transforms.</Badge>

            <h1 className="sm:text-6xl text-4xl font-poppins font-extrabold leading-tight text-pure-white">
              Where Technology,{" "}
              <Highlight className="bg-ai-gradient text-gradient">
                Meets Intelligence
              </Highlight>
            </h1>

            <p className="text-lg text-mist max-w-2xl font-poppins font-medium">
              Empowering businesses and individuals through cutting-edge
              cybersecurity, innovative development, AI-driven Solution, and
              comprehensive technical training.
            </p>

            <div className="block text-start">
              <Button
                onClick={() => (window.location.href = "#services")}
                size="lg"
                className="bg-ai-gradient text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50 text-lg px-8 py-3"
              >
                Explore Services
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              {statsData.map((stateItem, index) => {
                return (
                  <div key={index} className="space-y-1">
                    <p
                      className={`text-3xl font-poppins font-bold ${stateItem.color}`}
                    >
                      <NumberTicker
                        value={stateItem.value}
                        className={stateItem.color}
                      />
                      {stateItem.prefix}
                    </p>
                    <p className="text-sm text-mist">{stateItem.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex relative flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-xl aspect-square">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-cyber/20 rounded-full blur-3xl animate-pulse-glow"></div>

              {/* Main Image */}
              <Image
                src="/hero-bg1.jpg"
                alt="Cyber Intelligence Sphere"
                width={500}
                height={500}
                className="relative z-10 w-full h-full object-cover animate-float drop-shadow-2xl rounded-sm"
              />
              <div className="absolute inset-0 z-15"></div>

              {/* Orbiting Elements */}
              <div className="absolute top-1/1 right-0 w-16 h-16 bg-ai-gradient rounded-full blur-sm animate-pulse"></div>
              <div className="absolute bottom-1/1 left-0 w-12 h-12 bg-accent-gradient rounded-full blur-sm animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
