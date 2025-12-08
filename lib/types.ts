import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}
