"use client";

import Badge from "@/components/ui/badge";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Cloud,
  Brain,
  Shield,
  Code,
  Users,
  Award,
  TrendingUp,
  Briefcase,
  X,
} from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import CTABanner from "@/components/HomePage/CTASection";

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const openModal = (opportunity: any) => {
    setSelectedOpportunity(opportunity);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedOpportunity(null);
  };

  const careerOpportunities = [
    {
      title: "Cloud Computing Courses",
      description:
        "At Deltaware Solution, we believe that the future of IT is in the cloud. With businesses and organizations migrating to cloud-based solutions, cloud computing skills are in high demand. Whether you're a beginner looking to enter the field or an experienced professional seeking to enhance your skills, our comprehensive cloud computing courses are designed to meet your needs.",
      icon: <Cloud className="w-8 h-8" />,
      courses: [
        "Cloud Computing Fundamentals",
        "AWS Certified Solutions Architect – Associate",
        "Google Cloud Platform (GCP) Essentials",
        "Cloud Security Fundamentals",
      ],
      gradient: "from-cyber-teal to-neural-blue",
      detailedContent: {
        overview:
          "The cloud computing industry is experiencing unprecedented growth, with organizations of all sizes adopting cloud technologies to reduce costs, improve scalability, and enhance agility. This shift has created a massive demand for skilled cloud professionals who can design, deploy, and manage cloud infrastructure and services.",
        curriculum: [
          "Understanding Cloud Concepts and Deployment Models",
          "Cloud Service Models: IaaS, PaaS, SaaS",
          "Major Cloud Platforms: AWS, Azure, Google Cloud",
          "Virtualization and Containerization Technologies",
          "Cloud Networking and Security Fundamentals",
          "Identity and Access Management (IAM)",
          "Cloud Storage Solutions and Database Services",
          "Serverless Computing and Microservices",
          "Monitoring, Logging, and Performance Optimization",
          "Disaster Recovery and Business Continuity Planning",
          "Cost Management and Resource Optimization",
          "Compliance and Governance in the Cloud",
        ],
        careerPaths: [
          "Cloud Solutions Architect",
          "Cloud Engineer",
          "DevOps Engineer",
          "Cloud Security Specialist",
          "Cloud Consultant",
          "Site Reliability Engineer",
        ],
        marketInsights:
          "According to industry reports, cloud computing jobs are projected to grow by 25% annually through 2028. The average salary for cloud professionals ranges from $95,000 to $180,000 depending on specialization and experience. Major employers include Amazon, Microsoft, Google, IBM, and countless enterprises undergoing digital transformation.",
      },
    },
    {
      title: "AI & ML Courses",
      description:
        "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries and shaping the future. At DeltawareSolution, we offer cutting-edge AI and Machine Learning Training to help you stay ahead of the curve and unlock exciting career opportunities.",
      icon: <Brain className="w-8 h-8" />,
      courses: [
        "Introduction to Artificial Intelligence & Machine Learning",
        "Data Science & Machine Learning",
        "Deep Learning & Neural Networks",
        "Natural Language Processing (NLP)",
      ],
      gradient: "from-ai-violet to-magenta",
      detailedContent: {
        overview:
          "The AI and ML field is rapidly evolving, with new breakthroughs happening regularly. From natural language processing to computer vision, from recommendation systems to autonomous vehicles, AI and ML are revolutionizing how we live and work. Organizations across industries are investing heavily in AI initiatives, creating a huge demand for skilled professionals who can develop and implement AI solutions.",
        curriculum: [
          "Mathematics for Machine Learning: Linear Algebra, Calculus, Statistics",
          "Programming Languages: Python, R for Data Science",
          "Data Preprocessing and Feature Engineering",
          "Supervised Learning: Regression, Classification Algorithms",
          "Unsupervised Learning: Clustering, Dimensionality Reduction",
          "Deep Learning: Neural Networks, CNN, RNN, Transformers",
          "Natural Language Processing and Computer Vision",
          "Reinforcement Learning and Generative Models",
          "Model Evaluation, Validation, and Selection",
          "Big Data Technologies: Spark, Hadoop Integration",
          "MLOps: Model Deployment, Monitoring, and Maintenance",
          "Ethics and Responsible AI Development",
        ],
        careerPaths: [
          "Machine Learning Engineer",
          "Data Scientist",
          "AI Research Scientist",
          "NLP Engineer",
          "Computer Vision Engineer",
          "AI Product Manager",
        ],
        marketInsights:
          "The AI/ML job market is booming with a 74% annual growth rate. Professionals in this field earn an average of $120,000 to $250,000 annually. Top hiring companies include Google, Meta, Microsoft, Tesla, NVIDIA, and numerous startups focusing on AI-driven solutions.",
      },
    },
    {
      title: "Cybersecurity Courses",
      description:
        "In today's digital landscape, cybersecurity is more critical than ever. At DeltawareSolution, we offer world-class Cybersecurity Training designed to arm you with the knowledge and skills needed to defend against increasingly sophisticated cyber threats.",
      icon: <Shield className="w-8 h-8" />,
      courses: [
        "Introduction to Cybersecurity",
        "Network Security",
        "Ethical Hacking & Penetration Testing",
        "Advanced Cybersecurity & Threat Hunting",
      ],
      gradient: "from-neural-blue to-ai-violet",
      detailedContent: {
        overview:
          "With cyberattacks becoming more frequent and complex, organizations are prioritizing cybersecurity like never before. From protecting sensitive customer data to ensuring business continuity, cybersecurity professionals play a vital role in safeguarding digital assets. This growing importance has created abundant career opportunities for skilled cybersecurity experts across industries.",
        curriculum: [
          "Fundamentals of Cybersecurity and Risk Management",
          "Network Security Protocols and Architecture",
          "Cryptography and Encryption Techniques",
          "Identity and Access Management Systems",
          "Security Operations Center (SOC) Operations",
          "Incident Response and Digital Forensics",
          "Ethical Hacking and Penetration Testing Methodologies",
          "Vulnerability Assessment and Management",
          "Cloud Security and Container Security",
          "Threat Intelligence and Advanced Persistent Threats",
          "Compliance Frameworks: GDPR, HIPAA, PCI-DSS",
          "Security Awareness Training and Governance",
        ],
        careerPaths: [
          "Information Security Analyst",
          "Security Engineer",
          "Penetration Tester",
          "Security Consultant",
          "Chief Information Security Officer (CISO)",
          "Forensic Computer Analyst",
        ],
        marketInsights:
          "Cybersecurity employment is projected to grow 35% through 2031, much faster than average. The average salary ranges from $100,000 to $200,000 depending on specialization. Key employers include government agencies, financial institutions, healthcare organizations, and cybersecurity firms like CrowdStrike, Palo Alto Networks, and FireEye.",
      },
    },
    {
      title: "Web Development Courses",
      description:
        "At DeltawareSolution, we provide hands-on, industry-leading training in Web Development designed to equip you with the skills you need to succeed in the digital world. Whether you're a beginner looking to learn the basics or an experienced developer aiming to enhance your skills, our comprehensive web development programs offer something for everyone.",
      icon: <Code className="w-8 h-8" />,
      courses: [
        "Front-End Development",
        "Back-End Development",
        "Full Stack Development",
        "Web Development Bootcamp",
      ],
      gradient: "from-magenta to-cyber-teal",
      detailedContent: {
        overview:
          "The web development landscape is constantly evolving, with new frameworks, libraries, and tools emerging regularly. Modern web applications are expected to be fast, responsive, secure, and accessible across devices. This demand has created numerous opportunities for skilled web developers who can build engaging user experiences and robust backend systems.",
        curriculum: [
          "HTML5, CSS3, and Responsive Design Principles",
          "JavaScript ES6+ and Modern Programming Concepts",
          "Frontend Frameworks: React, Vue.js, Angular",
          "State Management and Component Architecture",
          "Backend Development with Node.js, Python, or Java",
          "Database Design and Management: SQL and NoSQL",
          "RESTful APIs and GraphQL Implementation",
          "Authentication and Authorization Systems",
          "Version Control with Git and GitHub Workflows",
          "Testing Strategies: Unit, Integration, and End-to-End Testing",
          "Deployment and DevOps Practices: Docker, CI/CD",
          "Performance Optimization and SEO Best Practices",
        ],
        careerPaths: [
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
          "DevOps Engineer",
          "UI/UX Developer",
          "Web Application Architect",
        ],
        marketInsights:
          "Web development continues to be in high demand with steady 15% annual job growth. Salaries range from $80,000 to $160,000 depending on specialization. Major employers include tech giants like Google, Amazon, Microsoft, as well as startups and digital agencies worldwide.",
      },
    },
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "High Demand Skills",
      description:
        "Learn technologies that are in high demand in the job market",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Certifications",
      description:
        "Earn recognized certifications to boost your career prospects",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with real-world experience",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Accelerate your career with in-demand technical skills",
    },
  ];

  return (
    <div className="min-h-screen bg-quantum sm:pt-32 pt-28 pb-12">
      {/* Hero Section */}
      <section
        id="careers-hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden sm:pb-10 pb-6 bg-gradient-to-br from-quantum-navy via-carbon to-quantum-navy"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/5 via-transparent to-ai-violet/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-violet/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-teal/10 rounded-full blur-[150px] animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neural-blue/5 rounded-full blur-[200px]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-8 animate-fade-up">
              <Badge>CAREER OPPORTUNITIES</Badge>

              <h1 className="sm:text-7xl text-5xl font-orbitron font-extrabold leading-tight text-pure-white">
                Shape Your Future in{" "}
                <Highlight className="bg-ai-gradient text-gradient">
                  Technology
                </Highlight>
              </h1>

              <p className="text-xl text-mist max-w-3xl mx-auto font-poppins font-medium">
                Don't miss out on the opportunity to become a skilled person.
                Sign up for one of our courses today and start your journey
                toward a rewarding career in technology.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
                <div className="p-6 rounded-2xl bg-carbon/40 border cyber-border backdrop-blur-sm hover:border-cyber-teal transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyber-teal to-neural-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-pure-white mb-2">
                    High-Demand Skills
                  </h3>
                  <p className="text-mist font-poppins">
                    Learn technologies that companies are actively hiring for
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-carbon/40 border cyber-border backdrop-blur-sm hover:border-ai-violet transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-ai-violet to-magenta mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-pure-white mb-2">
                    Recognized Certifications
                  </h3>
                  <p className="text-mist font-poppins">
                    Earn industry-recognized credentials to advance your career
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-carbon/40 border cyber-border backdrop-blur-sm hover:border-neural-blue transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-neural-blue to-cyber-teal mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-pure-white mb-2">
                    Career Growth
                  </h3>
                  <p className="text-mist font-poppins">
                    Unlock higher salaries and advancement opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <AnimateOnView animationType="fade" delay={0.1}>
        <section className="sm:py-16 py-12 bg-quantum-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-ai-violet/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-teal/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <div className="my-4">
                <Badge>LEARNING PATHS</Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-pure-white">
                Career-Focused{" "}
                <span className="bg-ai-gradient text-gradient">
                  Training Programs
                </span>
              </h2>
              <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
                Comprehensive courses designed to build in-demand technical
                skills and accelerate your career growth
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {careerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group relative p-8 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 hover:scale-[1.02] card-glow-hover animate-fade-up overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-quantum-navy rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${opportunity.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 relative z-20`}
                  >
                    <div className="text-white">{opportunity.icon}</div>
                  </div>

                  <h3 className="text-2xl font-orbitron font-bold text-pure-white mb-4 group-hover:text-cyber-teal transition-colors relative z-20">
                    {opportunity.title}
                  </h3>

                  <p className="text-mist font-poppins mb-6 relative z-20">
                    {opportunity.description}
                    <span
                      className="text-cyber-teal cursor-pointer hover:underline ml-2"
                      onClick={() => openModal(opportunity)}
                    >
                      Read More
                    </span>
                  </p>

                  <div className="space-y-3 relative z-20">
                    <h4 className="text-cyber-teal font-orbitron font-bold text-sm">
                      COURSE OFFERINGS:
                    </h4>
                    <ul className="space-y-2">
                      {opportunity.courses.map((course, courseIndex) => (
                        <li
                          key={courseIndex}
                          className="text-sm text-mist font-poppins flex items-start"
                        >
                          <span className="text-cyber-teal mr-2 mt-1">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnView>

      {/* Benefits Section */}
      <AnimateOnView animationType="fade" delay={0.2}>
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-pure-white mb-4">
                Why Choose Our Career{" "}
                <span className="bg-ai-gradient text-gradient">
                  Development Programs
                </span>
              </h2>
              <p className="text-lg text-mist max-w-3xl mx-auto font-poppins">
                What sets our career-focused training apart and helps you
                achieve your goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-carbon border cyber-border hover:border-cyber-teal transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-cyber-teal to-neural-blue mb-4">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-orbitron font-bold text-pure-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-mist font-poppins text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnView>

      {/* CTA Section */}
      <AnimateOnView animationType="fade" delay={0.3}>
        <CTABanner />
      </AnimateOnView>

      {/* Modal */}
      {modalOpen && selectedOpportunity && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-quantum-navy border cyber-border rounded-2xl p-8 animate-fade-up">
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-4 p-2 rounded-full bg-carbon hover:bg-cyber-teal/20 transition-colors"
            >
              <X className="w-6 h-6 text-mist hover:text-pure-white" />
            </button>

            <div className="mb-8">
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${selectedOpportunity.gradient} mb-6`}
              >
                <div className="text-white">{selectedOpportunity.icon}</div>
              </div>

              <h2 className="text-3xl font-orbitron font-bold text-pure-white mb-4">
                {selectedOpportunity.title}
              </h2>

              <p className="text-mist font-poppins mb-6">
                {selectedOpportunity.detailedContent.overview}
              </p>
            </div>

            <AnimateOnView animationType="fade" delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-cyber-teal mb-4">
                    Curriculum Overview
                  </h3>
                  <ul className="space-y-3">
                    {selectedOpportunity.detailedContent.curriculum.map(
                      (item: string, index: number) => (
                        <motion.li
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          key={index}
                          className="text-mist font-poppins flex items-start"
                        >
                          <span className="text-cyber-teal mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold text-cyber-teal mb-4">
                    Career Paths
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {selectedOpportunity.detailedContent.careerPaths.map(
                      (path: string, index: number) => (
                        <motion.li
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          key={index}
                          className="text-mist font-poppins flex items-start"
                        >
                          <span className="text-cyber-teal mr-2 mt-1">•</span>
                          <span>{path}</span>
                        </motion.li>
                      )
                    )}
                  </ul>

                  <h3 className="text-xl font-orbitron font-bold text-cyber-teal mb-4">
                    Market Insights
                  </h3>
                  <p className="text-mist font-poppins">
                    {selectedOpportunity.detailedContent.marketInsights}
                  </p>
                </div>
              </div>
            </AnimateOnView>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              <h3 className="text-xl font-orbitron font-bold text-pure-white mb-4">
                Available Courses
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedOpportunity.courses.map(
                  (course: string, index: number) => (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      key={index}
                      className="p-4 rounded-lg bg-carbon border cyber-border hover:border-cyber-teal transition-colors"
                    >
                      <p className="text-mist font-poppins">{course}</p>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
