import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const brandData = {
    name: "DELTAWARE",
    description: (
      <>
        <span className="text-cyber font-bold">From Coding to Security</span>,
        Supporting You at Every Step.
      </>
    ),
    socialLinks: [
      { icon: Github, href: "#", label: "GitHub" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Twitter, href: "#", label: "Twitter" },
    ],
  };

  const linkSections = [
    {
      title: "Services",
      links: [
        { href: "/services/cybersecurity", label: "Cybersecurity" },
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/ai-ml", label: "AI & ML Solutions" },
        { href: "/services/technical-training", label: "Technical Training" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about-us", label: "About Us" },
        { href: "/contact-us", label: "Contact Us" },
        { href: "/careers", label: "Careers" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      content:
        "Kalu kuwan, Infront of natraj gali, Banda, Uttar Pradesh 210001",
      href: "https://www.google.com/maps/search/?api=1&query=Kalu+kuwan,+Infront+of+natraj+gali,+Banda,+Uttar+Pradesh+210001",
    },
    { icon: Phone, content: "+91 9250534906", href: "tel:+919250534906" },
    {
      icon: Mail,
      content: "info@deltawaresolution.com",
      href: "mailto:info@deltawaresolution.com",
    },
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ];
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-carbon border-t border-white/5 pt-16 pb-8 font-poppins">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="md:w-16 md:h-16 w-12 h-12 relative bg-gradient-to-br from-cyber to-violet rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_#00E6E6] transition-all">
                <Image
                  src="/logo.jpg"
                  alt="Deltaware Logo"
                  width={100}
                  height={100}
                  className="md:w-16 md:h-16 w-12 h-12 rounded-md object-cover"
                />
                <div className="h-full w-full absolute inset-0"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-fira-code font-heading font-bold text-white leading-none">
                  DELTAWARE
                </span>
                <span className="text-[12px] font-fira-code text-mist tracking-widest">
                  SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-mist text-xl leading-relaxed">
              {brandData.description}
            </p>
          </div>

          {linkSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-white font-heading font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm text-mist">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-cyber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">
              Reach Out
            </h4>
            <ul className="space-y-4 text-sm text-mist">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 hover:underline hover:text-cyber transition-colors"
                    >
                      <Icon className="text-cyber w-4 h-4 flex-shrink-0" />
                      <span>{item.content}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-graphite font-fira-code">
          <p>
            &copy; {new Date().getFullYear()} Deltaware Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-4 sm:my-0 mt-3">
            {socialLinks.map((social, index) => {
              // const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-quantum-navy border cyber-border hover:border-cyber-teal hover:bg-cyber-teal/10 transition-all duration-300 text-mist hover:text-cyber-teal"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-mist">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
