import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import { BookOpen, Award, Users } from "lucide-react";

export default function Certification() {
  const benefits = [
    {
      title: "Industry Recognized",
      description: "Certifications accepted by top tech companies worldwide",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Career Advancement",
      description: "Boost your resume and earning potential",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Hands-On Projects",
      description: "Real-world applications to showcase your skills",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Lifetime Access",
      description: "Access course materials and updates forever",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-quantum pt-28 pb-6">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-quantum-navy">
          <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
          <div className="absolute inset-0 cyber-grid z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[100px] z-0"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnView animationType="fade" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-poppins font-extrabold leading-tight text-pure-white mb-6">
                Professional{" "}
                <span className="text-cyber-teal">Certifications</span>
              </h1>
            </AnimateOnView>

            <AnimateOnView animationType="fade" delay={0.3}>
              <p className="text-xl text-mist max-w-2xl mx-auto font-poppins font-medium">
                Validate your skills with industry-recognized certifications
                that accelerate your tech career.
              </p>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimateOnView animationType="fade" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Certifications?
              </h2>
              <p className="text-lg text-mist font-poppins">
                Our certifications are designed to validate real-world skills
                that employers demand.
              </p>
            </AnimateOnView>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimateOnView key={index} delay={0.1 * index}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-cyber-teal transition-all duration-300">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-cyber-teal to-neural-blue mb-4">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-mist">{benefit.description}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

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
                href={import.meta.env.VITE_CERTIFICATION_URL}
              >
                <Button
                  size="lg"
                  className="bg-gradient-accent text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50"
                >
                  Get Certified Today
                </Button>
              </a>
            </AnimateOnView>
          </div>
        </div>
      </section>
    </div>
  );
}
