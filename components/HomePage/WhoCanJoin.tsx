import { Users, UserCheck, UserCircle, UserPlus } from "lucide-react";
import Badge from "../ui/badge";

export default function WhoCanJoin() {
  const targetAudience = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Students & Freshers",
      description:
        "Ideal for students pursuing technical degrees or recent graduates looking to kickstart their career in technology with hands-on experience.",
      gradient: "from-cyber-teal to-neural-blue",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Career Switchers",
      description:
        "Perfect for professionals from non-tech backgrounds who want to transition into high-demand technology roles with proper training.",
      gradient: "from-ai-violet to-magenta",
    },
    {
      icon: <UserCircle className="w-8 h-8" />,
      title: "Working Professionals",
      description:
        "Designed for current tech professionals seeking to upskill, advance their careers, or specialize in emerging technologies like AI/ML.",
      gradient: "from-neural-blue to-ai-violet",
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Entrepreneurs",
      description:
        "Great for business owners and entrepreneurs wanting to understand technology deeply to build tech products or lead tech teams.",
      gradient: "from-magenta to-cyber-teal",
    },
  ];

  return (
    <section
      id="who-can-join"
      className="sm:py-10 py-6 bg-quantum-navy relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ai-violet/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-teal/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="my-4">
            <Badge>WHO CAN JOIN</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-pure-white">
            For <span className="bg-ai-gradient text-gradient">Everyone</span>{" "}
            Passionate About Tech
          </h2>
          <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
            Our programs are designed to accommodate learners at all stages of
            their journey, from beginners to experienced professionals.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((audience, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${audience.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{audience.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors">
                {audience.title}
              </h3>
              <p className="text-sm text-mist font-poppins">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
