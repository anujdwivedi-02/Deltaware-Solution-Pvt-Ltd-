"use client";

import { useState, useEffect } from "react";

import { useFormik } from "formik";
import { Send } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import { enrollmentForm } from "@/lib/formvalidation";
import { ENROLL_NOW_COURSES } from "@/lib/constants";
import { insertEnrollmentForm } from "@/lib/databaseService";

// Define the form values type
interface FormValues {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export default function EnrollNow() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-close success/error messages after 5 seconds
  useEffect(() => {
    if (submitSuccess || submitError) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitSuccess, submitError]);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
    validationSchema: enrollmentForm,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setIsSubmitting(true);
      setSubmitError("");
      setSubmitSuccess(false);

      try {
        const result = await insertEnrollmentForm({
          name: values.name,
          email: values.email,
          phone: values.phone,
          course: values.course,
          message: values.message,
        });

        if (result.success) {
          setSubmitSuccess(true);
          resetForm();
        } else {
          // Show more detailed error message
          const errorMessage =
            result.error || "Failed to submit enrollment. Please try again.";
          setSubmitError(errorMessage);
          console.error("Form submission error:", errorMessage);
        }
      } catch (error: any) {
        const errorMessage =
          error.message || "An unexpected error occurred. Please try again.";
        setSubmitError(errorMessage);
        console.error("Unexpected error:", error);
      } finally {
        setIsSubmitting(false);
        setSubmitting(false);
      }
    },
  });

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
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
      label: "Phone",
      type: "tel",
      placeholder: "+91 9876543210",
      gridCols: "half",
    },
    {
      name: "course",
      label: "Select Course",
      type: "select",
      placeholder: "Select a course",
      gridCols: "full",
      options: ENROLL_NOW_COURSES.map((service) => ({
        value: service.id,
        label: service.title,
      })),
    },
    {
      name: "message",
      label: "Additional Information",
      type: "textarea",
      placeholder: "Any specific requirements or questions...",
      rows: 5,
      gridCols: "full",
    },
  ];

  const benefits = [
    {
      id: 1,
      title: "Expert-Led Training",
      description:
        "Learn from industry professionals with real-world experience.",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      textColor: "text-mist",
      gradientFrom: "from-cyan-400",
      gradientTo: "to-cyan-600",
    },
    {
      id: 2,
      title: "Hands-On Projects",
      description: "Work on real projects to build a strong portfolio.",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      textColor: "text-mist",
      gradientFrom: "from-purple-400",
      gradientTo: "to-purple-600",
    },
    {
      id: 3,
      title: "Job Placement Assistance",
      description: "Get support finding roles after completing your course.",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-mist",
      gradientFrom: "from-blue-400",
      gradientTo: "to-blue-600",
    },
    {
      id: 4,
      title: "Certification",
      description: "Earn recognized certifications to boost your career.",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      textColor: "text-mist",
      gradientFrom: "from-green-400",
      gradientTo: "to-green-600",
    },
  ];

  const enrollmentSteps = [
    {
      id: 1,
      title: "Submit Enrollment",
      description:
        "Fill out our simple form and our team will contact you within 24 hours.",
      icon: "📝",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      id: 2,
      title: "Course Planning",
      description:
        "We'll schedule a consultation to customize your learning path.",
      icon: "📅",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      id: 3,
      title: "Start Learning",
      description:
        "Begin your journey with access to our comprehensive course materials.",
      icon: "🚀",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % enrollmentSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [enrollmentSteps.length]);

  return (
    <div className="min-h-screen bg-quantum pt-28 pb-6">
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
                Enroll <span className="text-cyber-teal">Now</span>
              </h1>
            </AnimateOnView>

            <AnimateOnView animationType="fade" delay={0.3}>
              <p className="text-xl text-mist max-w-2xl mx-auto font-poppins font-medium">
                Take the next step in your tech career. Join our comprehensive
                training programs and unlock your potential.
              </p>
            </AnimateOnView>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimateOnView delay={0.1}>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Submit Enrollment
                </h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-500/30 rounded-md text-green-300 animate-fadeIn">
                    Thank you for your enrollment! We'll get back to you soon.
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-500/30 rounded-md text-red-300 animate-fadeIn">
                    {submitError}
                  </div>
                )}

                <form onSubmit={formik.handleSubmit} className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-3">
                    {formFields.map((field) => (
                      <div
                        key={field.name}
                        className={
                          field.gridCols === "full"
                            ? "md:col-span-2"
                            : "md:col-span-1"
                        }
                      >
                        <div className="mb-1 flex items-center gap-2 w-full justify-between">
                          <label
                            htmlFor={field.name}
                            className="block text-slate-300 font-medium"
                          >
                            {field.label}
                          </label>
                          {formik.touched[field.name as keyof FormValues] &&
                            formik.errors[field.name as keyof FormValues] && (
                              <p className="text-sm text-red-400 font-poppins tracking-tighter">
                                {formik.errors[field.name as keyof FormValues]}
                              </p>
                            )}
                        </div>

                        {field.type === "select" ? (
                          <select
                            id={field.name}
                            name={field.name}
                            value={
                              formik.values[field.name as keyof FormValues]
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full px-4 py-3 bg-slate-950 border ${
                              formik.touched[field.name as keyof FormValues] &&
                              formik.errors[field.name as keyof FormValues]
                                ? "border-red-500"
                                : "border-white/10"
                            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none`}
                          >
                            <option value="" disabled>
                              {field.placeholder}
                            </option>
                            {field.options?.map((option) => (
                              <option
                                key={option.value}
                                value={option.value}
                                className="bg-slate-900"
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        ) : field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            value={
                              formik.values[field.name as keyof FormValues]
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            rows={field.rows || 3}
                            className={`w-full px-4 py-3 bg-slate-950 border ${
                              formik.touched[field.name as keyof FormValues] &&
                              formik.errors[field.name as keyof FormValues]
                                ? "border-red-500"
                                : "border-white/10"
                            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none`}
                            placeholder={field.placeholder}
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={
                              formik.values[field.name as keyof FormValues]
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full px-4 py-3 bg-slate-950 border ${
                              formik.touched[field.name as keyof FormValues] &&
                              formik.errors[field.name as keyof FormValues]
                                ? "border-red-500"
                                : "border-white/10"
                            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={
                      isSubmitting ||
                      formik.isSubmitting ||
                      !formik.isValid ||
                      !formik.dirty
                    }
                    className="disabled:opacity-50 disabled:cursor-not-allowed w-full bg-gradient-accent text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </AnimateOnView>

            <div className="space-y-6">
              <AnimateOnView delay={0.2}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-white mb-5">
                    Why Enroll With Us?
                  </h2>

                  <div className="space-y-4">
                    {benefits.map((benefit) => (
                      <div key={benefit.id} className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-full ${benefit.bgColor} border ${benefit.borderColor}`}
                        >
                          <div
                            className={`w-6 h-6 ${benefit.textColor} bg-gradient-to-br ${benefit.gradientFrom} ${benefit.gradientTo} rounded-full flex items-center justify-center`}
                          >
                            {benefit.id}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-slate-300">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView delay={0.3}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    What Happens Next?
                  </h2>

                  <div className="transition-opacity duration-500 ease-in-out">
                    <div className="p-4 rounded-lg bg-slate-950/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl mt-1">
                          {enrollmentSteps[currentStep].icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">
                            {enrollmentSteps[currentStep].title}
                          </h3>
                          <p className="text-slate-300">
                            {enrollmentSteps[currentStep].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
