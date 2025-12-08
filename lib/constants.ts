import {
  Shield,
  Code2,
  Brain,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";
import { NavItem, Service, Course, Project, Stat, Testimonial } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  // { label: "Courses", path: "/courses" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "/career" },
  { label: "Certification", path: "/certification" },
];

export const SERVICES: Service[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity & Ethical Hacking",
    description:
      "Strengthen your defenses with enterprise-grade cybersecurity solutions backed by ethical hacking expertise.",
    icon: Shield,
    path: "/services",
  },
  {
    id: "development",
    title: "Web/App Development",
    description:
      "We engineer intelligent, fast, and scalable digital products that accelerate business growth.",
    icon: Code2,
    path: "/services",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Data-driven intelligence solutions including predictive analytics, NLP, and computer vision.",
    icon: Brain,
    path: "/services",
  },
  {
    id: "training",
    title: "Technical Training",
    description:
      "Learn real skills through hands-on training, expert mentorship, and placement-driven programs.",
    icon: BookOpen,
    path: "/courses",
  },
  {
    id: "internship",
    title: "Internship & Job Assistance",
    description:
      "Turn your skills into a real career with guided internships and job assistance.",
    icon: GraduationCap,
    path: "/about",
  },
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
