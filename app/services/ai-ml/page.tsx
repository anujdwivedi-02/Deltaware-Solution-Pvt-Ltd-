"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import {
  Brain,
  Cpu,
  BarChart,
  Network,
  TrendingUp,
  Database,
} from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";

export default function AIMLService() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Model Development",
      description:
        "Custom ML models designed and built to solve your specific business challenges and automate decision-making processes.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Natural Language Processing",
      description:
        "Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language translation applications.",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Predictive Analytics",
      description:
        "Forecasting future trends and behaviors using historical data to drive strategic business decisions.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Computer Vision Solutions",
      description:
        "Image and video analysis systems for object detection, recognition, and automated visual inspection.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Recommendation Systems",
      description:
        "Intelligent recommendation engines that personalize user experiences and increase engagement.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Pipeline Automation",
      description:
        "End-to-end data processing workflows that collect, clean, and prepare data for AI/ML applications.",
    },
  ];

  const applications = [
    {
      title: "Healthcare Diagnostics",
      description: "AI-powered medical imaging and diagnostic assistance",
    },
    {
      title: "Financial Fraud Detection",
      description: "Real-time anomaly detection for transaction monitoring",
    },
    {
      title: "Customer Service Chatbots",
      description: "Intelligent conversational agents for 24/7 support",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Predictive analytics for inventory and logistics management",
    },
    {
      title: "Marketing Personalization",
      description: "Targeted campaigns based on customer behavior analysis",
    },
    {
      title: "Autonomous Systems",
      description: "Self-driving vehicles and robotic process automation",
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
            <Badge>AI & MACHINE LEARNING SOLUTIONS</Badge>
            <h1 className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white">
              <Highlight className="bg-ai-gradient text-gradient">
                AI/ML & Data Science Services
              </Highlight>
            </h1>
            <p className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins">
              Leverage artificial intelligence and machine learning to transform
              your business with data-driven insights.
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
                Unlocking Business Potential with AI
              </h2>
              <p className="text-lg text-mist font-poppins mb-6">
                Our AI/ML services harness the power of data to create
                intelligent systems that learn, adapt, and drive business value.
                From predictive analytics to computer vision, we build solutions
                that transform how organizations operate.
              </p>
              <p className="text-lg text-mist font-poppins">
                With expertise in the latest machine learning frameworks and
                algorithms, our data scientists develop custom solutions that
                solve real-world problems and create competitive advantages.
              </p>
            </div>
            <div className="animate-fade-up">
              <div className="relative rounded-2xl overflow-hidden border cyber-border">
                <Image
                  src="/ai-ml.jpg"
                  alt="AI/ML Services"
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
              Our <span className="bg-ai-gradient text-gradient">AI/ML</span>{" "}
              Services
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Cutting-edge artificial intelligence solutions tailored to your
              business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-neural-blue to-ai-violet mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Applications Section */}
      <section className="py-16 bg-quantum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
              Real-World{" "}
              <span className="bg-ai-gradient text-gradient">Applications</span>
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Industries transforming through artificial intelligence and
              machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-orbitron font-bold text-pure-white mb-3">
                  {application.title}
                </h3>
                <p className="text-mist font-poppins">
                  {application.description}
                </p>
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
                Our AI Development{" "}
                <span className="bg-ai-gradient text-gradient">Process</span>
              </h2>
              <p className="text-lg text-mist max-w-2xl mx-auto font-poppins">
                A systematic approach to delivering intelligent solutions
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Problem Definition",
                  description:
                    "Identifying business challenges that can be solved with AI/ML approaches.",
                },
                {
                  step: "02",
                  title: "Data Collection & Preparation",
                  description:
                    "Gathering and cleaning relevant data to train machine learning models.",
                },
                {
                  step: "03",
                  title: "Model Development",
                  description:
                    "Building and training custom models using appropriate algorithms and frameworks.",
                },
                {
                  step: "04",
                  title: "Testing & Validation",
                  description:
                    "Evaluating model performance and refining for optimal results.",
                },
                {
                  step: "05",
                  title: "Deployment",
                  description:
                    "Integrating trained models into production environments and applications.",
                },
                {
                  step: "06",
                  title: "Monitoring & Optimization",
                  description:
                    "Continuously tracking performance and improving models over time.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-neural-blue to-ai-violet flex items-center justify-center mr-6">
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
