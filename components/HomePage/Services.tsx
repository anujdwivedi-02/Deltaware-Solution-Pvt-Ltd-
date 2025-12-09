"use client";

import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/badge";
import Image from "next/image";
import Link from "next/link";

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
            <li
              key={index}
              className="flex font-fira-code items-start space-x-2 text-sm text-soft-graphite group-hover:text-cyber-teal transition-colors"
            >
              <span className="text-cyber">▸</span>
              <span>{feature}</span>
            </li>
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
  const services = [
    {
      id: "cybersecurity",
      icon: "/cybersecurity.jpg",
      title: "Cybersecurity & Ethical Hacking",
      description:
        "Protect your digital assets with our comprehensive cybersecurity solutions and ethical hacking services.",
      features: [
        "Vulnerability Assessment & Penetration Testing",
        "Security Audits & Compliance",
        "Incident Response & Forensics",
        "Security Architecture Design",
      ],
      gradient: "from-cyber to-neural-blue",
    },
    {
      id: "web-development",
      icon: "/webdev.jpg",
      title: "Web Development Training",
      description:
        "Build scalable, modern applications with cutting-edge technologies and best practices.",
      features: [
        "Custom Web & Mobile Applications",
        "Cloud-Native Solutions",
        "API Development & Integration",
        "Enterprise Software Solutions",
      ],
      gradient: "from-ai-violet to-neural-blue",
    },
    {
      id: "ai-ml",
      icon: "/ai-ml.jpg",
      title: "AI/ML & Data Science Services",
      description:
        "Leverage artificial intelligence and machine learning to transform your business with data-driven insights.",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics & Forecasting",
      ],
      gradient: "from-neural-blue to-ai-violet",
    },
    {
      id: "cloud-computing",
      icon: "/cloud-computing.jpg",
      title: "Cloud Computing Services",
      description:
        "Harness the power of the cloud with our expert services and solutions.",
      features: [
        "Cloud Migration & Strategy",
        "DevOps & Continuous Integration",
        "Cloud Security & Compliance",
        "Cloud-Native Application Development",
      ],
      gradient: "from-neon-magenta to-cyber-teal",
    },
    {
      id: "technical-training",
      icon: "/technical-training.jpg",
      title: "Technical Training Programs",
      description:
        "Master in-demand tech skills with our comprehensive training programs led by industry experts.",
      features: [
        "Ethical Hacking Bootcamp",
        "Full Stack Web Development",
        "AI/ML & Data Science",
        "Data Structures & Algorithms",
      ],
      gradient: "from-ai-violet to-neon-magenta",
    },
    {
      id: "internships",
      icon: "/internships.jpg",
      title: "Internships & Job Assistance",
      description:
        "Launch your tech career with hands-on experience and dedicated placement support.",
      features: [
        "Real-World Project Experience",
        "Industry Mentorship",
        "Resume Building & Interview Prep",
        "Job Placement Assistance",
      ],
      gradient: "from-neon-magenta to-cyber-teal",
    },
  ];

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
        <div className="text-center mb-16 animate-fade-up">
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
        </div>

        {/* Services Grid - Show only 3 services on homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/services/${service.id}`}>
                <ServiceCard {...service} />
              </Link>
            </div>
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
