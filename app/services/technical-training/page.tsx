"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { BookOpen, Laptop, Users, Clock, Target, Code } from "lucide-react";

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
            <Badge>TECHNICAL TRAINING PROGRAMS</Badge>
            <h1 className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white">
              <Highlight className="bg-ai-gradient text-gradient">
                Technical Training Programs
              </Highlight>
            </h1>
            <p className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins">
              Master in-demand tech skills with our comprehensive training
              programs led by industry experts.
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
                Accelerate Your Tech Career
              </h2>
              <p className="text-lg text-mist font-poppins mb-6">
                Our technical training programs are designed to equip you with
                the skills needed to excel in today's competitive technology
                landscape. Whether you're a beginner or looking to upskill, our
                comprehensive curriculum covers the latest industry trends and
                technologies.
              </p>
              <p className="text-lg text-mist font-poppins">
                With hands-on projects, real-world case studies, and mentorship
                from industry experts, you'll gain practical experience that
                translates directly to job success.
              </p>
            </div>
            <div className="animate-fade-up">
              <div className="relative rounded-2xl overflow-hidden border cyber-border">
                <Image
                  src="/technical-training.jpg"
                  alt="Technical Training Programs"
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

      {/* Courses Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-ai-violet/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
              Our{" "}
              <span className="bg-ai-gradient text-gradient">
                Training Programs
              </span>
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Comprehensive courses designed to build in-demand technical skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-ai-violet to-neon-magenta mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{course.icon}</div>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors">
                  {course.title}
                </h3>
                <p className="text-mist font-poppins">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-quantum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
              Why Choose Our{" "}
              <span className="bg-ai-gradient text-gradient">
                Training Programs
              </span>
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              What sets our technical training apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-cyber-teal to-neural-blue mb-4">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-orbitron font-bold text-pure-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-mist font-poppins text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
                Our Training{" "}
                <span className="bg-ai-gradient text-gradient">Approach</span>
              </h2>
              <p className="text-lg text-mist max-w-2xl mx-auto font-poppins">
                A proven methodology for effective learning and skill
                development
              </p>
            </div>

            <div className="space-y-8">
              {[
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
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-ai-violet to-neon-magenta flex items-center justify-center mr-6">
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
              Ready to Advance Your Tech Career?
            </h2>
            <p className="text-lg text-mist max-w-2xl mx-auto font-poppins mb-8">
              Enroll in our technical training programs today and gain the
              skills needed to succeed in the tech industry.
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-ai-gradient text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50 text-lg px-8 py-4 rounded-lg font-poppins font-bold">
                Enroll Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
