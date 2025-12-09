import React from "react";
import AboutSection from "@/components/HomePage/AboutUs";

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-12">
      <div className="container mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-violet/20 to-cyber/20 rounded-3xl p-8 md:p-16 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber via-magenta to-violet"></div>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-mist max-w-3xl mx-auto font-poppins mb-8">
            "We are a future-focused technology company committed to innovation,
            security, and skill development."
          </p>

          {/* Services Section */}
          <div className="mt-10 max-w-4xl mx-auto text-left">
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-6 text-center">
              At Deltaware Solution Pvt Ltd, we provide services:
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-3 h-3 rounded-full bg-cyber mt-3"></div>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-white mb-2">
                    Cybersecurity Expertise
                  </h3>
                  <p className="text-mist font-poppins">
                    Advanced penetration testing, vulnerability assessments, and
                    bug hunting to secure digital assets.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-3 h-3 rounded-full bg-violet mt-3"></div>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-white mb-2">
                    Web Application Security
                  </h3>
                  <p className="text-mist font-poppins">
                    Protecting web platforms from cyber threats with proactive
                    security measures.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-3 h-3 rounded-full bg-neural mt-3"></div>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-white mb-2">
                    Web Development
                  </h3>
                  <p className="text-mist font-poppins">
                    Crafting high-performance websites and applications tailored
                    to business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />
    </div>
  );
};

export default About;
