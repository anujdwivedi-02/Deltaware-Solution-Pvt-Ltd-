"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { Code, Smartphone, Database, Globe, Layers, Zap } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";

export default function WebDevelopmentService() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Web Applications",
      description:
        "Tailored web solutions designed to meet your specific business requirements and user needs.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Mobile-first designs that provide optimal viewing experiences across all devices and screen sizes.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Development & Integration",
      description:
        "Seamless integration with third-party services and development of robust APIs for your applications.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Modern Frameworks",
      description:
        "Development using cutting-edge technologies like React, Next.js, Node.js, and more.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Fast-loading, efficient applications optimized for speed and user experience.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Quality Assurance",
      description:
        "Clean, maintainable code following best practices and industry standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-quantum sm:pt-32 pt-28 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-quantum-navy">
          <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[100px] z-0"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge>WEB DEVELOPMENT SOLUTIONS</Badge>
            <h1 className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white">
              <Highlight className="bg-ai-gradient text-gradient">
                Web Development Services
              </Highlight>
            </h1>
            <p className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins">
              Build scalable, modern applications with cutting-edge technologies
              and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-quantum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-6">
                Transforming Ideas Into Digital Reality
              </h2>
              <p className="text-lg text-mist font-poppins mb-6">
                Our web development services combine technical expertise with
                creative design to deliver exceptional digital experiences. We
                build everything from simple landing pages to complex enterprise
                applications.
              </p>
              <p className="text-lg text-mist font-poppins">
                With a focus on performance, scalability, and user experience,
                our development team creates solutions that drive business
                growth and engage your audience effectively.
              </p>
            </div>
            <div className="animate-fade-up">
              <div className="relative rounded-2xl overflow-hidden border cyber-border">
                <Image
                  src="/webdev.jpg"
                  alt="Web Development Services"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-quantum-navy to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-ai-violet/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
              Our{" "}
              <span className="bg-ai-gradient text-gradient">
                Web Development
              </span>{" "}
              Services
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Comprehensive development solutions to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-ai-violet to-neural-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors">
                  {feature.title}
                </h3>
                <p className="text-mist font-poppins">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
                Our Development{" "}
                <span className="bg-ai-gradient text-gradient">Process</span>
              </h2>
              <p className="text-lg text-mist max-w-2xl mx-auto font-poppins">
                A systematic approach to delivering exceptional web solutions
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description:
                    "Understanding your requirements, goals, and target audience to create a roadmap for success.",
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description:
                    "Creating wireframes and mockups to visualize the user interface and experience.",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "Building the application with clean, efficient code following best practices.",
                },
                {
                  step: "04",
                  title: "Testing & QA",
                  description:
                    "Thorough testing across devices and browsers to ensure flawless functionality.",
                },
                {
                  step: "05",
                  title: "Deployment",
                  description:
                    "Launching your application to production environments with proper configurations.",
                },
                {
                  step: "06",
                  title: "Maintenance & Support",
                  description:
                    "Ongoing support, updates, and improvements to keep your application running smoothly.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-ai-violet to-neural-blue flex items-center justify-center mr-6">
                    <span className="text-pure-white font-orbitron font-bold">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-pure-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-mist font-poppins">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-quantum-navy to-carbon border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <AnimateOnView animationType="fade" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl text-mist max-w-2xl mx-auto mb-8">
                Join thousands of professionals who have transformed their
                careers with our certifications.
              </p>
              <a
                referrerPolicy="no-referrer-when-downgrade"
                target="_blank"
                href={"/contact-us"}
              >
                <Button
                  size="lg"
                  className="bg-gradient-accent text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50"
                >
                  Start Your Project
                </Button>
              </a>
            </AnimateOnView>
          </div>
        </div>
      </section>
    </div>
  );
}
