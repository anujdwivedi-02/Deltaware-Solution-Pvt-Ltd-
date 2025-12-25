import { Target, Eye, Award, Users } from "lucide-react";
import Badge from "../ui/badge";
import { Highlight } from "../ui/hero-highlight";
import AnimateOnView from "../ui/AnimateOnView";
import CTABanner from "./CTASection";

export default function AboutSection() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description:
        "To empower individuals and businesses with cutting-edge technology Solution and world-class training.",
      color: "from-cyber-teal to-neural-blue",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description:
        "To be the leading technology partner driving digital transformation and creating future-ready tech professionals.",
      color: "from-ai-violet to-neon-magenta",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Values",
      description:
        "Excellence, Innovation, Integrity, and Continuous Learning form the foundation of everything we do.",
      color: "from-neural-blue to-ai-violet",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Team",
      description:
        "Industry experts and passionate educators dedicated to your success with years of real-world experience.",
      color: "from-neon-magenta to-cyber-teal",
    },
  ];

  return (
    <section
      id="about"
      className="sm:pt-10 pt-6  bg-carbon-grey relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimateOnView
          className="space-y-8"
          animationType="slide-up"
          delay={0.1}
        >
          <div className="mb-6">
            <Badge>ABOUT DELTAWARE</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-pure-white">
            Building the{" "}
            <span className="bg-ai-gradient text-gradient">Future</span> of
            Technology
          </h2>

          <p className="text-lg text-mist leading-relaxed font-poppins text-justify">
            Welcome to{" "}
            <Highlight className="text-black">
              Deltaware Solution Pvt Ltd
            </Highlight>
            , a leading name in cybersecurity and web development. Founded by{" "}
            <Highlight className="text-black">Anuj Kumar Dwivedi</Highlight>, a
            seasoned cybersecurity expert with 4+ years of experience and
            co-founded by Ashutosh Dwivedi. Our company is committed to
            delivering cutting-edge cybersecurity Solution and web development
            services to businesses worldwide.
          </p>

          <p className="text-mist leading-relaxed font-poppins text-justify">
            Our mission is to fortify the digital landscape by providing
            top-tier security Solution and innovative web services. We believe
            in Integrity, Innovation and Excellence, ensuring that our clients
            receive the highest level of protection and functionality for their
            online presence. With a team of highly skilled professionals, we
            strive to stay ahead in the cybersecurity domain, helping
            organizations mitigate risks and strengthen their security posture.
          </p>
        </AnimateOnView>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {values.map((value, index) => (
            <AnimateOnView
              key={index}
              className="group p-6 rounded-2xl bg-quantum-navy border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover"
              animationType="slide-up"
              delay={0.1 * (index + 1)}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{value.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-mist font-poppins">
                {value.description}
              </p>
            </AnimateOnView>
          ))}
        </div>
      </div>
      <AnimateOnView className="mt-12" animationType="slide-up" delay={0.2}>
        <CTABanner />
      </AnimateOnView>
    </section>
  );
}
