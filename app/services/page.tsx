"use client";

import {
  Users,
  UserCheck,
  UserCircle,
  UserPlus,
  Shield,
  Code,
  Brain,
  ArrowDown,
} from "lucide-react";
import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Button from "@/components/ui/Button";
import { ServiceCard } from "@/components/HomePage/Services";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import AnimateOnView from "@/components/ui/AnimateOnView";

export default function ServicesPage() {
  const targetAudience = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "E-Commerce Companies",
      description:
        "Secure your online transactions and customer data with our specialized cybersecurity and web development solutions.",
      details: [
        "Payment Gateway Security",
        "Customer Data Protection",
        "Fraud Detection Systems",
        "Scalable Web Infrastructure",
        "PCI DSS Compliance",
      ],
      gradient: "from-cyber-teal to-neural-blue",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Healthcare Startups",
      description:
        "Protect patient data and comply with healthcare regulations through our HIPAA-compliant solutions.",
      details: [
        "HIPAA Compliance Solutions",
        "Patient Data Encryption",
        "Telemedicine Security",
        "Medical Device Security",
        "Health Data Analytics",
      ],
      gradient: "from-ai-violet to-magenta",
    },
    {
      icon: <UserCircle className="w-8 h-8" />,
      title: "Students",
      description:
        "Launch your tech career with our comprehensive training programs and internship opportunities.",
      details: [
        "Hands-on Project Experience",
        "Industry Mentorship",
        "Certification Programs",
        "Job Placement Assistance",
        "Career Guidance",
      ],
      gradient: "from-neural-blue to-ai-violet",
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "SMEs & Enterprises",
      description:
        "Scalable technology solutions designed to meet the unique needs of small to large businesses.",
      details: [
        "Custom Software Development",
        "Cloud Migration Services",
        "Cybersecurity Assessments",
        "Digital Transformation",
        "24/7 Support",
      ],
      gradient: "from-magenta to-cyber-teal",
    },
  ];

  return (
    <div className="min-h-screen bg-quantum sm:pt-32 pt-28 pb-12">
      <AnimateOnView animationType="slide-up" delay={0.1}>
        <section
          id="services-hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden sm:pb-10 pb-6 bg-gradient-to-br from-quantum-navy via-carbon to-quantum-navy"
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/5 via-transparent to-ai-violet/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-violet/10 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-teal/10 rounded-full blur-[150px] animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neural-blue/5 rounded-full blur-[200px]"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="space-y-8 animate-fade-up">
                <Badge>OUR TECHNOLOGY SERVICES</Badge>

                <h1 className="sm:text-7xl text-5xl font-orbitron font-extrabold leading-tight text-pure-white">
                  <Highlight className="bg-ai-gradient text-gradient">
                    End-to-End
                  </Highlight>{" "}
                  Digital Solutions
                </h1>

                <p className="text-xl text-mist max-w-3xl mx-auto font-poppins font-medium">
                  Comprehensive technology services designed to secure, build,
                  and scale your digital presence across all industries.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
                  <div className="p-6 rounded-2xl bg-carbon/40 border cyber-border backdrop-blur-sm hover:border-cyber-teal transition-all duration-300 group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyber-teal to-neural-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-pure-white mb-2">
                      Security First
                    </h3>
                    <p className="text-mist font-poppins">
                      Enterprise-grade protection for your digital assets and
                      customer data
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-carbon/40 border cyber-border backdrop-blur-sm hover:border-ai-violet transition-all duration-300 group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-ai-violet to-magenta mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-pure-white mb-2">
                      Modern Development
                    </h3>
                    <p className="text-mist font-poppins">
                      Scalable applications built with cutting-edge technologies
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-carbon/40 border cyber-border backdrop-blur-sm hover:border-neural-blue transition-all duration-300 group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-neural-blue to-cyber-teal mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-pure-white mb-2">
                      AI Powered
                    </h3>
                    <p className="text-mist font-poppins">
                      Data-driven insights and intelligent automation solutions
                    </p>
                  </div>
                </div>

                <div className="pt-12">
                  <Button
                    onClick={() => (window.location.href = "#services")}
                    size="lg"
                    className="bg-ai-gradient text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50 text-lg px-8 py-3"
                  >
                    Explore Services
                    <ArrowDown className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnView>
      <AnimateOnView animationType="slide-up" delay={0.2}>
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
                <span className="bg-ai-gradient text-gradient">
                  Tech Solutions
                </span>
              </h2>
              <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
                From cybersecurity to AI development, we provide end-to-end
                technology services to secure, build, and scale your digital
                presence.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, index) => (
                <Link href={`/services/${service.id}`} key={index}>
                  <ServiceCard {...service} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnView>

      {/* Who Can Use Our Services Section */}
      <AnimateOnView animationType="slide-up" delay={0.3}>
        <section
          id="who-can-use"
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
                <Badge>WHO CAN USE OUR SERVICES</Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-pure-white">
                Designed for{" "}
                <span className="bg-ai-gradient text-gradient">
                  Your Industry
                </span>
              </h2>
              <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
                Our services are tailored to meet the specific needs of various
                industries and user groups, ensuring maximum impact and value.
              </p>
            </div>

            {/* Audience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-quantum-navy rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${audience.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 relative z-20`}
                  >
                    <div className="text-white">{audience.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors relative z-20">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-mist font-poppins relative z-20">
                    {audience.description}
                  </p>

                  {/* Details Slide-up Panel */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full bg-quantum-navy/20 backdrop-blur-md group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-b-2xl z-20">
                    <h4 className="text-cyber-teal font-orbitron font-bold text-sm mb-2">
                      Suitable For:
                    </h4>
                    <ul className="space-y-1">
                      {audience.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-xs text-mist font-poppins flex items-start"
                        >
                          <span className="text-cyber-teal mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnView>
    </div>
  );
}
