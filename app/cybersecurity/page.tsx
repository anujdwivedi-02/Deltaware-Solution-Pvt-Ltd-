"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { Shield, Lock, Eye, Bug, Server, Key } from "lucide-react";

export default function CybersecurityService() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vulnerability Assessment & Penetration Testing",
      description: "Comprehensive security testing to identify and exploit vulnerabilities in your systems before malicious actors can."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security Audits & Compliance",
      description: "Ensure your systems meet industry standards and regulatory requirements with our thorough compliance audits."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Incident Response & Forensics",
      description: "Rapid response to security incidents with forensic analysis to understand the breach and prevent future occurrences."
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Bug Bounty Management",
      description: "Professional management of bug bounty programs to leverage ethical hackers for continuous security improvement."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Network Security Assessment",
      description: "Deep dive analysis of your network infrastructure to identify potential entry points and security gaps."
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Security Architecture Design",
      description: "Design and implementation of robust security architectures tailored to your organization's specific needs."
    }
  ];

  const benefits = [
    "Proactive threat identification and mitigation",
    "Reduced risk of data breaches and financial loss",
    "Enhanced customer trust and brand reputation",
    "Compliance with industry regulations",
    "Improved incident response capabilities",
    "Continuous security monitoring and improvement"
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
            <Badge>CYBERSECURITY SOLUTIONS</Badge>
            <h1 className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white">
              <Highlight className="bg-ai-gradient text-gradient">
                Cybersecurity & Ethical Hacking
              </Highlight>
            </h1>
            <p className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins">
              Protect your digital assets with our comprehensive cybersecurity solutions and ethical hacking services.
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
                Securing Your Digital Future
              </h2>
              <p className="text-lg text-mist font-poppins mb-6">
                In today's interconnected world, cybersecurity is not optional—it's essential. Our comprehensive cybersecurity services protect your organization from evolving threats while ensuring compliance with industry standards.
              </p>
              <p className="text-lg text-mist font-poppins">
                Our team of certified ethical hackers and cybersecurity experts employ cutting-edge techniques to identify vulnerabilities before malicious actors can exploit them. We provide end-to-end security solutions tailored to your specific business needs.
              </p>
            </div>
            <div className="animate-fade-up">
              <div className="relative rounded-2xl overflow-hidden border cyber-border">
                <Image
                  src="/cybersecurity.jpg"
                  alt="Cybersecurity Services"
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
              Our <span className="bg-ai-gradient text-gradient">Cybersecurity</span> Services
            </h2>
            <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
              Comprehensive security solutions to protect your digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyber to-neural-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors">
                  {feature.title}
                </h3>
                <p className="text-mist font-poppins">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-quantum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
                Key <span className="bg-ai-gradient text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-mist max-w-2xl mx-auto font-poppins">
                Why our cybersecurity services are the right choice for your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 rounded-xl bg-carbon/50 border cyber-border animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-2 h-2 rounded-full bg-cyber"></div>
                  </div>
                  <p className="text-mist font-poppins">{benefit}</p>
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-mist max-w-2xl mx-auto font-poppins mb-8">
              Contact us today for a comprehensive security assessment and discover how we can protect your digital assets.
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-ai-gradient text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50 text-lg px-8 py-4 rounded-lg font-poppins font-bold">
                Get Started Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}