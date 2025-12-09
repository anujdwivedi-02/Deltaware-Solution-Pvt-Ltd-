"use client";

import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import AnimateOnView from "../ui/AnimateOnView";
import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";

interface ServiceCardProps {
  id?: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export function ServiceCard({
  id,
  icon,
  title,
  description,
  features,
  gradient,
}: ServiceCardProps) {
  return (
    <div className="group relative h-full sm:p-8 p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber transition-all duration-300 hover:scale-105 card-glow-hover overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>

      <div className="relative z-10 space-y-2 flex flex-col justify-between h-full">
        <div className="relative w-full h-32 sm:h-40 aspect-video rounded-xl bg-gradient-to-br from-carbon  to-quantum border cyber-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Image
            width={500}
            height={500}
            src={icon}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-opacity duration-300"></div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-poppins font-bold text-pure-white group-hover:text-cyber-teal transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-mist leading-relaxed font-inter group-hover:text-pure-white transition-colors">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex font-fira-code items-start space-x-2 text-sm text-soft-graphite group-hover:text-cyber-teal transition-colors"
            >
              <span className="text-cyber">▸</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          variant="ghost"
          className="w-full cursor-pointer text-cyber-teal border border-cyber-teal/30 hover:bg-cyber-teal hover:text-quantum-navy transition-all duration-300 group/btn"
        >
          Know More
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-teal/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="sm:py-10 py-6 bg-quantum-navy relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ai-violet/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-teal/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnView
          className="text-center mb-16"
          animationType="slide-up"
          delay={0.1}
        >
          <div className="my-4">
            <Badge>OUR SERVICES</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-pure-white">
            Comprehensive{" "}
            <span className="bg-ai-gradient text-gradient">Tech Solutions</span>
          </h2>
          <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
            From cybersecurity to AI development, we provide end-to-end
            technology services to secure, build, and scale your digital
            presence.
          </p>
        </AnimateOnView>

        {/* Services Grid - Show only 3 services on homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((service, index) => (
            <AnimateOnView
              key={index}
              animationType="slide-up"
              delay={0.1 * (index + 1)}
            >
              <Link href={`/services/${service.id}`}>
                <ServiceCard {...service} />
              </Link>
            </AnimateOnView>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center flex items-center justify-center w-full mt-16 mb-8">
          <Link href="/services" className="cursor-pointer">
            <button className="cursor-pointer flex items-center gap-2 bg-ai-gradient text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50 text-lg px-8 py-3">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
