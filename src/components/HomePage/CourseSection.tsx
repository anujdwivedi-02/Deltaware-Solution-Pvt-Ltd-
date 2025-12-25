import { Clock, Users, Award, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import AnimatedButton from "../ui/AnimatedButton";
import Badge from "../ui/badge";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  mode: string;
  students: string;
}

function CourseCard({
  image,
  title,
  description,
  duration,
  level,
  mode,
  students,
}: CourseCardProps) {
  return (
    <div className="group relative rounded-xl bg-carbon-grey border cyber-border overflow-hidden hover:border-cyber-teal transition-all duration-300 hover:scale-105 card-glow-hover">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-grey to-transparent"></div>

        {/* Level Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ai-gradient text-pure-white text-xs font-orbitron font-semibold">
          {level}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-poppins font-bold text-pure-white group-hover:text-cyber-teal transition-colors">
          {title}
        </h3>

        <p className="text-sm text-mist line-clamp-2">{description}</p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-soft-graphite">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-cyber" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-ai-violet" />
            <span>{students}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-neural-blue" />
            <span>{mode}</span>
          </div>
        </div>

        {/* CTA Button */}
        <AnimatedButton
          textName="Enroll Now"
          type="button"
          margin={"mt-4 w-full"}
        />
      </div>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyber-teal via-transparent to-ai-violet opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}

export default function CoursesSection() {
  const courses = [
    {
      image: "/ethical-hack-boot.jpg",
      title: "Ethical Hacking Bootcamp",
      description:
        "Master cybersecurity fundamentals, penetration testing, and ethical hacking techniques to become a certified security professional.",
      duration: "12 Weeks",
      level: "Intermediate",
      mode: "Online/Offline",
      students: "500+ Enrolled",
    },
    {
      image: "/software-development.jpg",
      title: "Full Stack Web Development",
      description:
        "Learn modern web technologies including React, Node.js, databases, and deployment to build production-ready applications.",
      duration: "16 Weeks",
      level: "Beginner to Advanced",
      mode: "Online/Offline",
      students: "800+ Enrolled",
    },
    {
      image: "/ai-ml-data.jpg",
      title: "AI/ML & Data Science",
      description:
        "Dive into machine learning, deep learning, and data science with hands-on projects using Python, TensorFlow, and more.",
      duration: "20 Weeks",
      level: "Intermediate",
      mode: "Online",
      students: "600+ Enrolled",
    },
    {
      image: "/ds-banner.jpg",
      title: "Data Structures & Algorithms",
      description:
        "Master DSA fundamentals and problem-solving techniques to ace technical interviews at top tech companies.",
      duration: "10 Weeks",
      level: "Beginner to Advanced",
      mode: "Online",
      students: "1000+ Enrolled",
    },
  ];

  return (
    <section
      id="training"
      className="sm:py-10 py-6 bg-carbon-grey relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="my-4">
            <Badge>TRAINING PROGRAMS</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-pure-white">
            Featured{" "}
            <span className="bg-ai-gradient text-gradient">Courses</span>
          </h2>
          <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
            Industry-relevant training programs designed to transform you into a
            skilled tech professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyber-teal text-cyber-teal hover:bg-cyber-teal hover:text-quantum-navy transition-all duration-300"
          >
            View All Courses
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
