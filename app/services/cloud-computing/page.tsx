"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { Cloud, Server, Shield, Zap, GitBranch, Database } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";

export default function CloudComputingService() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration & Strategy",
      description:
        "Seamless migration of your infrastructure and applications to cloud platforms with minimal downtime.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description:
        "Automated provisioning and management of cloud resources using Terraform, CloudFormation, and other tools.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security & Compliance",
      description:
        "Robust security implementations and compliance adherence across all major cloud platforms.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Optimization of cloud resources for cost-efficiency and maximum performance.",
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps & CI/CD",
      description:
        "Implementation of continuous integration and deployment pipelines for faster, more reliable releases.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud-Native Application Development",
      description:
        "Building and deploying applications specifically designed to leverage cloud capabilities.",
    },
  ];

  const platforms = [
    { name: "Amazon Web Services", icon: "/aws-logo.png" },
    { name: "Microsoft Azure", icon: "/Azure-Logo.webp" },
    { name: "Google Cloud Platform", icon: "/google-cloud.webp" },
    { name: "Kubernetes", icon: "/kubernetes.webp" },
    { name: "Docker", icon: "/docker.webp" },
    { name: "Terraform", icon: "/terraform.webp" },
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
            <Badge>CLOUD COMPUTING SOLUTIONS</Badge>
            <h1 className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white">
              Cloud{" "}
              <Highlight className="bg-ai-gradient text-gradient">
                Computing Services
              </Highlight>
            </h1>
            <p className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins">
              Harness the power of the cloud with our expert services and
              solutions.
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
                Scaling Your Business with Cloud Power
              </h2>
              <p className="text-lg text-mist font-poppins mb-6">
                Our cloud computing services enable businesses to leverage the
                flexibility, scalability, and cost-effectiveness of cloud
                platforms. From migration to optimization, we provide end-to-end
                solutions across all major cloud providers.
              </p>
              <p className="text-lg text-mist font-poppins">
                Whether you're moving to the cloud for the first time or
                optimizing existing deployments, our certified cloud architects
                design and implement solutions that align with your business
                objectives and technical requirements.
              </p>
            </div>
            <div className="animate-fade-up">
              <div className="relative rounded-2xl overflow-hidden border cyber-border">
                <Image
                  src="/cloud-computing.jpg"
                  alt="Cloud Computing Services"
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
                Cloud Computing
              </span>{" "}
              Services
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Comprehensive cloud solutions to accelerate your digital
              transformation
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

      {/* Platforms Section */}
      <section className="py-16 bg-quantum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
              Supported{" "}
              <span className="bg-ai-gradient text-gradient">Platforms</span>
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Expertise across all major cloud platforms and technologies
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-gray-200 border-2 rounded-xl w-32 h-20 mb-3 overflow-hidden">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-full h-20 object-contain overflow-hidden"
                  />
                  <div className="absolute inset-0 h-full w-full"></div>
                </div>
                <span className="text-mist font-poppins font-medium text-center">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
                Key{" "}
                <span className="bg-ai-gradient text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-mist max-w-2xl mx-auto font-poppins">
                Why our cloud computing services drive business success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Scalability on demand to match business needs",
                "Reduced infrastructure costs and overhead",
                "Enhanced disaster recovery and business continuity",
                "Improved collaboration and remote work capabilities",
                "Access to cutting-edge technologies and innovations",
                "Faster time-to-market for new applications and services",
                "Automatic software updates and security patches",
                "Global reach and improved performance",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 rounded-xl bg-carbon/50 border cyber-border animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-2 h-2 rounded-full bg-cyber-teal"></div>
                  </div>
                  <p className="text-mist font-poppins">{benefit}</p>
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
