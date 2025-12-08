import {
  FileText,
  Calendar,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Badge from "../ui/badge";
import Button from "../ui/Button";

export default function HowToApply() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Fill Application Form",
      description:
        "Complete our simple online application form with your personal and educational details.",
      gradient: "from-cyber-teal to-neural-blue",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Consultation",
      description:
        "Book a free consultation session with our career advisors to discuss your goals.",
      gradient: "from-ai-violet to-magenta",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discussion & Planning",
      description:
        "We'll assess your background and create a personalized learning roadmap for you.",
      gradient: "from-neural-blue to-ai-violet",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Enrollment Confirmation",
      description:
        "Once confirmed, you'll get instant access to course materials and community.",
      gradient: "from-magenta to-cyber-teal",
    },
  ];

  return (
    <section
      id="how-to-apply"
      className="sm:py-10 py-6 bg-carbon relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ai-violet/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-teal/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="my-4">
            <Badge>HOW TO APPLY</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-pure-white">
            Simple Steps to{" "}
            <span className="bg-ai-gradient text-gradient">
              Begin Your Journey
            </span>
          </h2>
          <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
            Getting started with our programs is easy and straightforward.
            Follow these simple steps to join our community.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-quantum-navy border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center text-quantum-navy font-bold font-orbitron">
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{step.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-orbitron font-bold text-pure-white mb-3 group-hover:text-cyber-teal transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-mist font-poppins">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up">
          <Button
            onClick={() =>
              window.open("https://forms.gle/example-form", "_blank")
            }
            size="lg"
            className="bg-ai-gradient text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50 text-lg px-8 py-4"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-mist mt-4 font-poppins">
            Have questions?{" "}
            <a href="#contact" className="text-cyber-teal hover:underline">
              Contact us
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
