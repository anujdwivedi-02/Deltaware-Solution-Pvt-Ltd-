import { motion } from "framer-motion";
import AnimateOnView from "@/components/ui/AnimateOnView";
import { Shield, Lock, Eye, FileText } from "lucide-react";

// Data structure for privacy policy content
const privacyPolicyData = {
  title: "Privacy Policy",
  lastUpdated: "December 13, 2025",
  sections: [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Eye className="w-8 h-8 text-cyber-teal" />,
      content: [
        "We collect information you provide directly to us when you use our services, create an account, subscribe to our newsletter, or contact us for support. This may include:",
        "We also automatically collect certain information when you visit our website, including device information, browser type, IP address, and browsing behavior to improve our services and user experience.",
      ],
      listItems: [
        "Personal identification information (name, email address, phone number)",
        "Professional information (job title, company, industry)",
        "Payment information (processed securely through our payment partners)",
        "Communication preferences and marketing consent",
      ],
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <Lock className="w-8 h-8 text-cyber-teal" />,
      content: [
        "We use the collected information for various purposes:",
        "We only process your personal data when we have a valid legal basis for doing so, such as contractual necessity, legitimate interests, or your explicit consent.",
      ],
      listItems: [
        "To provide, maintain, and improve our services",
        "To personalize your experience and customize content",
        "To process transactions and send transactional notifications",
        "To communicate with you about products, services, and updates",
        "To comply with legal obligations and protect our rights",
        "To detect, prevent, and address technical issues or security threats",
      ],
    },
    {
      id: "data-protection",
      title: "Data Protection and Security",
      content: [
        "We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure server infrastructure, and regular security assessments.",
        "While we strive to protect your personal information, please note that no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but commit to implementing commercially acceptable means to protect your data.",
      ],
    },
    {
      id: "information-sharing",
      title: "Sharing Your Information",
      content: [
        "We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.",
        "We may disclose your personal information in the following situations:",
      ],
      listItems: [
        "With your consent or at your direction",
        "To comply with legal obligations or respond to lawful requests",
        "To protect our rights, privacy, safety, or property",
        "In connection with a merger, sale, or acquisition of our company",
      ],
    },
    {
      id: "user-rights",
      title: "Your Rights and Choices",
      content: [
        "Depending on your location, you may have certain rights regarding your personal information, including:",
        "To exercise these rights, please contact us using the information provided below. We will respond to your request in accordance with applicable laws.",
      ],
      listItems: [
        "The right to access, update, or delete your personal information",
        "The right to object to or restrict processing of your data",
        "The right to data portability",
        "The right to withdraw consent where processing is based on consent",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. Cookies are small data files stored on your device that help us remember your preferences and understand how visitors interact with our site.",
        "You can control cookie preferences through your browser settings. Note that disabling cookies may affect your experience on our website.",
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: [
        "Our website may contain links to third-party websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
        "We recommend reviewing the privacy policies of any third-party sites you visit to understand how they collect and use your information.",
      ],
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content: [
        "Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information promptly.",
      ],
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      content: [
        'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
        "We advise you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      content: [
        "If you have any questions about this Privacy Policy, please contact us:",
      ],
      listItems: [
        "By email: info@deltawaresolution.com",
        "By visiting our contact page: deltawaresolution.com/contact",
        "By mail: Kalu kuwan, Infront of natraj gali, Banda, Uttar Pradesh 210001, India",
      ],
    },
  ],
};

export default function PrivacyPolicy() {
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
              <Shield className="w-5 h-5 text-cyber-teal" />
              <span className="text-cyber-teal font-poppins text-sm">
                Privacy Policy
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 sm:text-5xl text-4xl font-poppins font-extrabold leading-tight text-pure-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Privacy{" "}
              <span className="bg-ai-gradient text-gradient">Policy</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-mist max-w-3xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </motion.p>

            <motion.div
              className="mt-8 inline-flex items-center gap-2 text-mist font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <FileText className="w-5 h-5 text-cyber-teal" />
              <span>Last Updated: {privacyPolicyData.lastUpdated}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-4 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {privacyPolicyData.sections.map((section, index) => (
              <AnimateOnView
                key={section.id}
                animationType="slide-up"
                delay={index * 0.1}
                className="mb-12"
              >
                <div className="mb-12">
                  <h2 className="text-xl sm:text-3xl font-poppins font-bold text-pure-white mb-6 flex items-center gap-3">
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
