"use client";

import { motion } from "framer-motion";
import AnimateOnView from "@/components/ui/AnimateOnView";
import {
  FileText,
  AlertTriangle,
  Shield,
  Users,
  CreditCard,
  Globe,
} from "lucide-react";

// Data structure for terms of service content
const termsOfServiceData = {
  title: "Terms of Service",
  lastUpdated: "December 13, 2025",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <AlertTriangle className="w-8 h-8 text-cyber-teal" />,
      content: [
        'These Terms of Service ("Terms") govern your access to and use of the services, websites, and applications provided by Deltaware Solution ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.',
        "If you do not agree to these Terms, you may not access or use our services. These Terms apply to all visitors, users, and others who access or use our services.",
      ],
    },
    {
      id: "services",
      title: "Description of Services",
      icon: <Users className="w-8 h-8 text-cyber-teal" />,
      content: [
        "Deltaware Solution provides technology training, certification programs, internship opportunities, and consulting services in areas including artificial intelligence, machine learning, cybersecurity, cloud computing, and web development.",
        "Our services are subject to change, update, or discontinuation at any time without notice. We reserve the right to modify, suspend, or discontinue any part of our services at our sole discretion.",
      ],
    },
    {
      id: "account",
      title: "Account Registration and Security",
      content: [
        "To access certain features of our services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.",
      ],
    },
    {
      id: "conduct",
      title: "User Conduct and Responsibilities",
      content: [
        "You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:",
        "We reserve the right to terminate your access to our services for any violation of these Terms or for any other reason at our sole discretion.",
      ],
      listItems: [
        "Violate any applicable laws or regulations",
        "Infringe upon the rights of others",
        "Transmit viruses or malicious code",
        "Interfere with the operation of our services",
        "Attempt to gain unauthorized access to our systems",
        "Use our services to transmit unsolicited commercial communications",
      ],
    },
    {
      id: "payment",
      title: "Payment Terms and Refunds",
      icon: <CreditCard className="w-8 h-8 text-cyber-teal" />,
      content: [
        "All fees for our services are stated in the applicable course or service description. You agree to pay all fees in accordance with the payment terms specified at the time of purchase.",
        "Payments are processed through secure third-party payment processors. We do not store your credit card information.",
        "Refund policies vary by service type. Generally, refunds are not available for completed courses or services. However, we may offer refunds or credits in our sole discretion for extenuating circumstances. All refund requests must be submitted in writing within 14 days of purchase.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      content: [
        "All content, materials, and intellectual property provided through our services are owned by Deltaware Solution or our licensors. This includes but is not limited to course materials, videos, documents, software, trademarks, logos, and graphics.",
        "You are granted a limited, non-exclusive, non-transferable license to access and use our services for your personal or internal business purposes in accordance with these Terms.",
        "You may not copy, reproduce, distribute, modify, or create derivative works of our content without our prior written consent.",
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties",
      content: [
        'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:',
        "We do not warrant that our services will be uninterrupted, error-free, or completely secure. Your use of our services is at your own risk.",
      ],
      listItems: [
        "Merchantability",
        "Non-infringement",
        "Accuracy of information",
        "Reliability of services",
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <Shield className="w-8 h-8 text-cyber-teal" />,
      content: [
        "To the fullest extent permitted by law, Deltaware Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.",
        "Our total liability for any claims arising out of or related to these Terms or our services shall not exceed the amount paid by you for the services giving rise to the claim.",
        "Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law and Jurisdiction",
      icon: <Globe className="w-8 h-8 text-cyber-teal" />,
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.",
        "Any dispute arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in [City, State/Country].",
      ],
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: [
        'We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page and updating the "Last Updated" date.',
        "Your continued use of our services after the effective date of revised Terms constitutes your acceptance of the changes. If you do not agree to the revised Terms, you must stop using our services.",
      ],
    },
    {
      id: "contact",
      title: "Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us:",
      ],
      listItems: [
        "By email: info@deltawaresolution.com",
        "By visiting our contact page: deltawaresolution.com/contact",
        "By mail: Kalu kuwan, Infront of natraj gali, Banda, Uttar Pradesh 210001, India",
      ],
    },
  ],
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-quantum sm:pt-32 pt-28 pb-4">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-quantum-navy">
          <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[100px] z-0"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-ai-violet/20 to-neural-blue/20 px-4 py-2 rounded-full border border-cyber-teal/30 mb-6"
            >
              <FileText className="w-5 h-5 text-cyber-teal" />
              <span className="text-cyber-teal font-poppins text-sm">
                Terms of Service
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Terms of{" "}
              <span className="bg-ai-gradient text-gradient">Service</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Please read these terms carefully before using our services. By
              accessing or using Deltaware Solution, you agree to be bound by
              these terms.
            </motion.p>

            <motion.div
              className="mt-8 inline-flex items-center gap-2 text-mist font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <FileText className="w-5 h-5 text-cyber-teal" />
              <span>Last Updated: {termsOfServiceData.lastUpdated}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-4 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {termsOfServiceData.sections.map((section, index) => (
              <AnimateOnView
                key={section.id}
                animationType="slide-up"
                delay={index * 0.1}
                className="mb-12"
              >
                <div className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-pure-white mb-6 flex items-center gap-3">
                    {section.icon && (
                      <span className="flex-shrink-0">{section.icon}</span>
                    )}
                    {section.title}
                  </h2>
                  <div className="space-y-6 text-mist font-poppins">
                    {section.content.map((paragraph, pIndex) => (
                      <motion.p
                        key={pIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * pIndex }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}

                    {section.listItems && (
                      <motion.ul
                        className="list-disc pl-6 space-y-3 ml-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {section.listItems.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * itemIndex }}
                            whileHover={{ x: 10, color: "#00e6e6" }}
                            className="transition-all duration-300 cursor-default"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
