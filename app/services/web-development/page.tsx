"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { Code, Smartphone, Database, Globe, Layers, Zap } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function WebDevelopmentService() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Web Applications",
      description:
        "Tailored web Solution designed to meet your specific business requirements and user needs.",
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

  const process = [
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge>WEB DEVELOPMENT Solution</Badge>
            </motion.div>
            <motion.h1
              className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Highlight className="bg-ai-gradient text-gradient">
                Web Development Services
              </Highlight>
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Build scalable, modern applications with cutting-edge technologies
              and best practices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-quantum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Transforming Ideas Into Digital Reality
              </motion.h2>
              <motion.p
                className="text-lg text-mist font-poppins mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Our web development services combine technical expertise with
                creative design to deliver exceptional digital experiences. We
                build everything from simple landing pages to complex enterprise
                applications.
              </motion.p>
              <motion.p
                className="text-lg text-mist font-poppins"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                With a focus on performance, scalability, and user experience,
                our development team creates Solution that drive business growth
                and engage your audience effectively.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden border cyber-border"
            >
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/webdev.jpg"
                  alt="Web Development Services"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-quantum-navy to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-ai-violet/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our{" "}
              <span className="bg-ai-gradient text-gradient">
                Web Development
              </span>{" "}
              Services
            </motion.h2>
            <motion.p
              className="text-lg text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive development Solution to bring your vision to life
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <motion.div
                  className="inline-flex p-3 rounded-xl bg-gradient-to-br from-ai-violet to-neural-blue mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-white"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {feature.icon}
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-mist font-poppins"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our Development{" "}
                <span className="bg-ai-gradient text-gradient">Process</span>
              </motion.h2>
              <motion.p
                className="text-lg text-mist max-w-2xl mx-auto font-poppins"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                A systematic approach to delivering exceptional web Solution
              </motion.p>
            </motion.div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-ai-violet to-neural-blue flex items-center justify-center mr-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      className="text-pure-white font-orbitron font-bold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.step}
                    </motion.span>
                  </motion.div>
                  <motion.div>
                    <motion.h3
                      className="text-xl font-orbitron font-bold text-pure-white mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-mist font-poppins"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                href={"/contact"}
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
