"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { BookOpen, Laptop, Users, Clock, Target, Code } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { motion } from "framer-motion";

export default function TechnicalTrainingService() {
  const courses = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Ethical Hacking Bootcamp",
      description:
        "Comprehensive cybersecurity training covering penetration testing, vulnerability assessment, and defensive techniques.",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Full Stack Web Development",
      description:
        "Complete training in modern web technologies including React, Node.js, databases, and cloud deployment.",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "AI/ML & Data Science",
      description:
        "Hands-on training in machine learning, data analysis, and artificial intelligence with real-world projects.",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Cloud Computing & DevOps",
      description:
        "Master cloud platforms, containerization, and CI/CD pipelines for modern application deployment.",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Data Structures & Algorithms",
      description:
        "Fundamental computer science concepts essential for coding interviews and efficient software development.",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile applications using React Native and Flutter frameworks.",
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with real-world experience",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Certification",
      description:
        "Earn recognized certifications to boost your career prospects",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description:
        "Choose from weekday, weekend, or evening batches to fit your schedule",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Hands-On Projects",
      description: "Work on real-world projects to build a strong portfolio",
    },
  ];
  const approach = [
    {
      step: "01",
      title: "Foundational Learning",
      description:
        "Start with core concepts and fundamentals to build a strong knowledge base.",
    },
    {
      step: "02",
      title: "Hands-On Practice",
      description:
        "Apply what you learn through practical exercises and real-world projects.",
    },
    {
      step: "03",
      title: "Mentor Guidance",
      description:
        "Receive personalized feedback and guidance from industry experts.",
    },
    {
      step: "04",
      title: "Portfolio Development",
      description:
        "Build a professional portfolio showcasing your skills to potential employers.",
    },
    {
      step: "05",
      title: "Interview Preparation",
      description:
        "Prepare for job interviews with mock sessions and resume building.",
    },
    {
      step: "06",
      title: "Career Support",
      description:
        "Access job placement assistance and ongoing career guidance.",
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
              <Badge>TECHNICAL TRAINING PROGRAMS</Badge>
            </motion.div>
            <motion.h1
              className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Highlight className="bg-ai-gradient text-gradient">
                Technical Training Programs
              </Highlight>
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Master in-demand tech skills with our comprehensive training
              programs led by industry experts.
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
                Accelerate Your Tech Career
              </motion.h2>
              <motion.p
                className="text-lg text-mist font-poppins mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Our technical training programs are designed to equip you with
                the skills needed to excel in today's competitive technology
                landscape. Whether you're a beginner or looking to upskill, our
                comprehensive curriculum covers the latest industry trends and
                technologies.
              </motion.p>
              <motion.p
                className="text-lg text-mist font-poppins"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                With hands-on projects, real-world case studies, and mentorship
                from industry experts, you'll gain practical experience that
                translates directly to job success.
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
                  src="/technical-training.jpg"
                  alt="Technical Training Programs"
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

      {/* Courses Section */}
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
                Training Programs
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive courses designed to build in-demand technical skills
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
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
                  className="inline-flex p-3 rounded-xl bg-gradient-to-br from-ai-violet to-neon-magenta mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-white"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {course.icon}
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {course.title}
                </motion.h3>
                <motion.p
                  className="text-mist font-poppins"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {course.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-quantum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
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
              Why Choose Our{" "}
              <span className="bg-ai-gradient text-gradient">
                Training Programs
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              What sets our technical training apart from the competition
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.3)",
                }}
              >
                <motion.div
                  className="inline-flex p-2 rounded-lg bg-gradient-to-br from-cyber-teal to-neural-blue mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-white"
                    whileHover={{ scale: 1.2 }}
                  >
                    {benefit.icon}
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-lg font-orbitron font-bold text-pure-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  className="text-mist font-poppins text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach Section */}
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
                Our Training{" "}
                <span className="bg-ai-gradient text-gradient">Approach</span>
              </motion.h2>
              <motion.p
                className="text-lg text-mist max-w-2xl mx-auto font-poppins"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                A proven methodology for effective learning and skill
                development
              </motion.p>
            </motion.div>

            <div className="space-y-8">
              {approach.map((item, index) => (
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
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-ai-violet to-neon-magenta flex items-center justify-center mr-6"
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
                href={"/contact-us"}
              >
                <Button
                  size="lg"
                  className="bg-gradient-accent text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50"
                >
                  Get Started Now
                </Button>
              </a>
            </AnimateOnView>
          </div>
        </div>
      </section>
    </div>
  );
}
