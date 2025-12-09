import { Clock, Mail, MapPin, Phone, Users } from "lucide-react";
import { NavItem, Service, Stat, Testimonial } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  // { label: "Courses", path: "/courses" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Careers", path: "/careers" },
  { label: "Certification", path: "/certification" },
];

export const STATS: Stat[] = [
  { label: "Clients Served", value: "150", suffix: "+" },
  { label: "Students Trained", value: "2500", suffix: "+" },
  { label: "Projects Delivered", value: "300", suffix: "+" },
  { label: "Placement Rate", value: "95", suffix: "%" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Cybersecurity Analyst",
    text: "Deltaware's training didn't just teach me theory; they threw me into real-world scenarios. I got hired within a month of graduating.",
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "CTO, NextGen Tech",
    text: "We hired Deltaware for a complete security audit. Their report was incredibly detailed, and their remediation support was world-class.",
  },
  {
    id: "3",
    name: "Priya Patel",
    role: "Fullstack Developer",
    text: "The internship program bridged the gap between my college degree and what the industry actually needs. Highly recommended.",
  },
];

export const SERVICES = [
  {
    id: "cybersecurity",
    icon: "/cybersecurity.jpg",
    title: "Cybersecurity & Ethical Hacking",
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions and ethical hacking services.",
    features: [
      "Vulnerability Assessment & Penetration Testing",
      "Security Audits & Compliance",
      "Incident Response & Forensics",
      "Security Architecture Design",
    ],
    gradient: "from-cyber to-neural-blue",
  },
  {
    id: "web-development",
    icon: "/webdev.jpg",
    title: "Web Development Training",
    description:
      "Build scalable, modern applications with cutting-edge technologies and best practices.",
    features: [
      "Custom Web & Mobile Applications",
      "Cloud-Native Solutions",
      "API Development & Integration",
      "Enterprise Software Solutions",
    ],
    gradient: "from-ai-violet to-neural-blue",
  },
  {
    id: "ai-ml",
    icon: "/ai-ml.jpg",
    title: "AI/ML & Data Science Services",
    description:
      "Leverage artificial intelligence and machine learning to transform your business with data-driven insights.",
    features: [
      "Machine Learning Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics & Forecasting",
    ],
    gradient: "from-neural-blue to-ai-violet",
  },
  {
    id: "cloud-computing",
    icon: "/cloud-computing.jpg",
    title: "Cloud Computing Services",
    description:
      "Harness the power of the cloud with our expert services and solutions.",
    features: [
      "Cloud Migration & Strategy",
      "DevOps & Continuous Integration",
      "Cloud Security & Compliance",
      "Cloud-Native Application Development",
    ],
    gradient: "from-neon-magenta to-cyber-teal",
  },
  {
    id: "technical-training",
    icon: "/technical-training.jpg",
    title: "Technical Training Programs",
    description:
      "Master in-demand tech skills with our comprehensive training programs led by industry experts.",
    features: [
      "Ethical Hacking Bootcamp",
      "Full Stack Web Development",
      "AI/ML & Data Science",
      "Data Structures & Algorithms",
    ],
    gradient: "from-ai-violet to-neon-magenta",
  },
  {
    id: "internships",
    icon: "/internships.jpg",
    title: "Internships & Job Assistance",
    description:
      "Launch your tech career with hands-on experience and dedicated placement support.",
    features: [
      "Real-World Project Experience",
      "Industry Mentorship",
      "Resume Building & Interview Prep",
      "Job Placement Assistance",
    ],
    gradient: "from-neon-magenta to-cyber-teal",
  },
];

export const formFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your name",
    gridCols: "full",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "your@email.com",
    gridCols: "half",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+91 9876543210",
    gridCols: "half",
  },
  {
    name: "message",
    label: "Your Message",
    type: "textarea",
    placeholder: "Tell us about your project or inquiry...",
    rows: 5,
    gridCols: "full",
  },
];

export const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "Kalu kuwan, Infront of natraj gali, Banda, Uttar Pradesh 210001",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+91 9250534906",
    link: "tel:+919250534906",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@deltawaresolution.com",
    link: "mailto:info@deltawaresolution.com",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
];

export const whyChooseUs = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your needs",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals dedicated to your success",
  },
];
