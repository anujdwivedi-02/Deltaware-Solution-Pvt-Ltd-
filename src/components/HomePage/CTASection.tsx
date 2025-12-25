import { Phone } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/badge";

export default function CTABanner() {
  return (
    <section className="sm:py-10 py-6  relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/cta-banner.jpg"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-quantum-navy via-quantum-navy/95 to-quantum-navy/90"></div>
      </div>

      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-teal/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-ai-violet/20 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="mb-4">
            <Badge>JOIN THE REVOLUTION</Badge>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold leading-tight text-pure-white">
            Join Deltaware —{" "}
            <span className="bg-ai-gradient text-gradient">
              Build, Secure & Grow
            </span>
          </h2>

          <p className="text-xl text-mist max-w-2xl mx-auto font-poppins">
            Whether you're looking to upskill, launch your tech career, or
            transform your business with cutting-edge Solution, we're here to
            make it happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "tel:+919250534906")}
              className="cursor-pointer border-2 border-cyber-teal text-cyber-teal hover:bg-cyber-teal hover:text-quantum-navy transition-all duration-300 text-lg px-4 py-2 group rounded-xl"
            >
              <Phone className="mr-2 w-5 h-5" />
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
