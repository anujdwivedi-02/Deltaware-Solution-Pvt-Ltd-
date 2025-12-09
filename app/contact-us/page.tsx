"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import Footer from "@/components/Layouts/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-quantum pt-28 pb-16">
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
                Get In <span className="text-cyber-teal">Touch</span>
              </h1>
            </AnimateOnView>
            
            <AnimateOnView animationType="fade" delay={0.3}>
              <p className="text-xl text-mist max-w-2xl mx-auto font-poppins font-medium">
                Have questions or ready to start your next project? Our team is here to help you transform your ideas into reality.
              </p>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnView animationType="slide-up" delay={0.1}>
              <div className="bg-carbon/50 border border-white/10 rounded-lg p-8 glassmorphism">
                <h2 className="text-3xl font-poppins font-bold text-white mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-mist mb-2 font-poppins">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-quantum-navy border border-white/10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-cyber-teal focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-mist mb-2 font-poppins">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-quantum-navy border border-white/10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-cyber-teal focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-mist mb-2 font-poppins">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-quantum-navy border border-white/10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-cyber-teal focus:border-transparent transition-all"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-mist mb-2 font-poppins">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-quantum-navy border border-white/10 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-cyber-teal focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-accent text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </AnimateOnView>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <AnimateOnView animationType="slide-up" delay={0.2}>
                <div className="bg-carbon/50 border border-white/10 rounded-lg p-8 glassmorphism">
                  <h2 className="text-3xl font-poppins font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-cyber-teal/10 border border-cyber-teal/30">
                        <MapPin className="w-6 h-6 text-cyber-teal" />
                      </div>
                      <div>
                        <h3 className="text-lg font-poppins font-semibold text-white mb-1">Our Location</h3>
                        <p className="text-mist">
                          Kalu kuwan, Infront of natraj gali, Banda, Uttar Pradesh 210001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-ai-violet/10 border border-ai-violet/30">
                        <Phone className="w-6 h-6 text-ai-violet" />
                      </div>
                      <div>
                        <h3 className="text-lg font-poppins font-semibold text-white mb-1">Phone Number</h3>
                        <a href="tel:+919250534906" className="text-mist hover:text-cyber-teal transition-colors">
                          +91 9250534906
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-neural-blue/10 border border-neural-blue/30">
                        <Mail className="w-6 h-6 text-neural-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-poppins font-semibold text-white mb-1">Email Address</h3>
                        <a href="mailto:info@deltawaresolution.com" className="text-mist hover:text-cyber-teal transition-colors">
                          info@deltawaresolution.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
              
              {/* Map Section */}
              <AnimateOnView animationType="slide-up" delay={0.3}>
                <div className="bg-carbon/50 border border-white/10 rounded-lg overflow-hidden glassmorphism">
                  <h2 className="text-3xl font-poppins font-bold text-white p-8 pb-4">Find Us</h2>
                  <div className="aspect-video bg-gradient-to-br from-cyber-teal/10 to-ai-violet/10 m-4 rounded-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="w-12 h-12 text-cyber-teal mx-auto mb-4" />
                      <h3 className="text-xl font-poppins font-semibold text-white mb-2">Interactive Map</h3>
                      <p className="text-mist mb-4">Location: Kalu kuwan, Banda, Uttar Pradesh</p>
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Kalu+kuwan,+Infront+of+natraj+gali,+Banda,+Uttar+Pradesh+210001', '_blank')}
                      >
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}