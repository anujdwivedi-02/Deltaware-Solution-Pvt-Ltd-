import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
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

// Extend the NodeJS ProcessEnv interface to include our custom environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    NEXT_PUBLIC_EMAIL_HOST: string;
    NEXT_PUBLIC_EMAIL_PORT: string;
    NEXT_PUBLIC_EMAIL_USER: string;
    NEXT_PUBLIC_EMAIL_PASSWORD: string;
    NEXT_PUBLIC_CERTIFICATION_URL: string;
  }
}
