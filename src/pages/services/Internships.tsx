

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";

import {
  Users,
  Briefcase,
  Award,
  TrendingUp,
  Handshake,
  GraduationCap,
} from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function InternshipsService() {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Real-World Project Experience",
      description:
        "Work on actual client projects to gain hands-on experience and build a professional portfolio.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industry Mentorship",
      description:
        "Receive guidance from experienced professionals who provide valuable insights and career advice.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Skill Development",
      description:
        "Develop both technical and soft skills essential for success in the workplace.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification",
      description:
        "Earn recognized certificates that validate your skills and enhance your resume.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description:
        "Gain exposure to industry practices and build a network for future career opportunities.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Job Placement Assistance",
      description:
        "Access to our network of hiring partners and dedicated placement support services.",
    },
  ];

  const programs = [
    {
      title: "Cybersecurity Internship",
      duration: "3-6 months",
      description:
        "Gain hands-on experience in penetration testing, vulnerability assessment, and security auditing.",
    },
    {
      title: "Web Development Internship",
      duration: "3-6 months",
      description:
        "Work on real projects using modern frameworks like React, Node.js, and cloud technologies.",
    },
    {
      title: "AI/ML Internship",
      duration: "4-6 months",
      description:
        "Apply machine learning algorithms to solve real-world problems with mentor guidance.",
    },
    {
      title: "Cloud Computing Internship",
      duration: "3-6 months",
      description:
        "Learn to deploy and manage applications on AWS, Azure, or Google Cloud platforms.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Application & Screening",
      description:
        "Submit your application and go through our initial screening process.",
    },
    {
      step: "02",
      title: "Technical Assessment",
      description:
        "Complete a skills assessment to determine the best program fit.",
    },
    {
      step: "03",
      title: "Interview",
      description: "Meet with our team to discuss your goals and expectations.",
    },
    {
      step: "04",
      title: "Program Assignment",
      description: "Get matched with a suitable internship program and mentor.",
    },
    {
      step: "05",
      title: "Hands-On Training",
      description:
        "Begin working on real projects with guidance from your mentor.",
    },
    {
      step: "06",
      title: "Placement Support",
      description:
        "Receive assistance with job applications and interview preparation.",
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
              <Badge>INTERNSHIPS & JOB ASSISTANCE</Badge>
            </motion.div>
            <motion.h1
              className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Internships {""}
              <Highlight className="bg-ai-gradient text-gradient">
                & Job Assistance
              </Highlight>
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Launch your tech career with hands-on experience and dedicated
              placement support.
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
                Bridging Education and Industry
              </motion.h2>
              <motion.p
                className="text-lg text-mist font-poppins mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Our internship program is designed to provide students and fresh
                graduates with valuable industry experience while working on
                real projects. We connect talented individuals with
                opportunities to grow their skills and launch successful careers
                in technology.
              </motion.p>
              <motion.p
                className="text-lg text-mist font-poppins"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                With our comprehensive support system, including mentorship,
                skill development, and job placement assistance, interns gain
                the confidence and experience needed to excel in the competitive
                tech job market.
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
                <img
                  src="/internships.jpg"
                  alt="Internships & Job Assistance"
                 
                 
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
              Internship{" "}
              <span className="bg-ai-gradient text-gradient">
                Program Features
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive support to ensure your success in the program and
              beyond
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
                  className="inline-flex p-3 rounded-xl bg-gradient-to-br from-neon-magenta to-cyber-teal mb-4 group-hover:scale-110 transition-transform duration-300"
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

      {/* Programs Section */}
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
              Available{" "}
              <span className="bg-ai-gradient text-gradient">
                Internship Programs
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Specialized tracks to match your interests and career goals
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
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
                  className="flex justify-between items-start mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.h3
                    className="text-xl font-orbitron font-bold text-pure-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {program.title}
                  </motion.h3>
                  <motion.span
                    className="text-cyber-teal font-poppins text-sm bg-carbon/50 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {program.duration}
                  </motion.span>
                </motion.div>
                <motion.p
                  className="text-mist font-poppins"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {program.description}
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
                Internship{" "}
                <span className="bg-ai-gradient text-gradient">Process</span>
              </motion.h2>
              <motion.p
                className="text-lg text-mist max-w-2xl mx-auto font-poppins"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                A streamlined approach to launching your tech career
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
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-neon-magenta to-cyber-teal flex items-center justify-center mr-6"
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
