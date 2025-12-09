"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import {
  Users,
  Briefcase,
  Award,
  TrendingUp,
  Handshake,
  GraduationCap,
} from "lucide-react";

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
            <Badge>INTERNSHIPS & JOB ASSISTANCE</Badge>
            <h1 className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white">
              <Highlight className="bg-ai-gradient text-gradient">
                Internships & Job Assistance
              </Highlight>
            </h1>
            <p className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins">
              Launch your tech career with hands-on experience and dedicated
              placement support.
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
                Bridging Education and Industry
              </h2>
              <p className="text-lg text-mist font-poppins mb-6">
                Our internship program is designed to provide students and fresh
                graduates with valuable industry experience while working on
                real projects. We connect talented individuals with
                opportunities to grow their skills and launch successful careers
                in technology.
              </p>
              <p className="text-lg text-mist font-poppins">
                With our comprehensive support system, including mentorship,
                skill development, and job placement assistance, interns gain
                the confidence and experience needed to excel in the competitive
                tech job market.
              </p>
            </div>
            <div className="animate-fade-up">
              <div className="relative rounded-2xl overflow-hidden border cyber-border">
                <Image
                  src="/internships.jpg"
                  alt="Internships & Job Assistance"
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
              Internship{" "}
              <span className="bg-ai-gradient text-gradient">
                Program Features
              </span>
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Comprehensive support to ensure your success in the program and
              beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-neon-magenta to-cyber-teal mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Programs Section */}
      <section className="py-16 bg-quantum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
              Available{" "}
              <span className="bg-ai-gradient text-gradient">
                Internship Programs
              </span>
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Specialized tracks to match your interests and career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-orbitron font-bold text-pure-white">
                    {program.title}
                  </h3>
                  <span className="text-cyber-teal font-poppins text-sm bg-carbon/50 px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                <p className="text-mist font-poppins">{program.description}</p>
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
                Internship{" "}
                <span className="bg-ai-gradient text-gradient">Process</span>
              </h2>
              <p className="text-lg text-mist max-w-2xl mx-auto font-poppins">
                A streamlined approach to launching your tech career
              </p>
            </div>

            <div className="space-y-8">
              {[
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
                  description:
                    "Meet with our team to discuss your goals and expectations.",
                },
                {
                  step: "04",
                  title: "Program Assignment",
                  description:
                    "Get matched with a suitable internship program and mentor.",
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
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-neon-magenta to-cyber-teal flex items-center justify-center mr-6">
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
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-quantum-navy to-carbon border cyber-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
              Ready to Start Your Tech Career?
            </h2>
            <p className="text-lg text-mist max-w-2xl mx-auto font-poppins mb-8">
              Apply for our internship program today and take the first step
              toward a successful career in technology.
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-ai-gradient text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50 text-lg px-8 py-4 rounded-lg font-poppins font-bold">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
