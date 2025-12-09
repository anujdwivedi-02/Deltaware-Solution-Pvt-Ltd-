"use client";

import { useFormik } from "formik";
import { Send } from "lucide-react";
import AnimateOnView from "@/components/ui/AnimateOnView";
import Button from "@/components/ui/Button";
import { contactForm } from "@/lib/formvalidation";
import { formFields, contactInfo, whyChooseUs } from "@/lib/constants";

// Define the form values type
interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactUs() {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactForm,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log("Form submitted:", values);
      alert("Thank you for your message! We'll get back to you soon.");
      resetForm();
      setSubmitting(false);
    },
  });
  return (
    <div className="min-h-screen bg-quantum pt-28 pb-16">
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
                Get In <span className="text-cyber-teal">Touch</span>
              </h1>
            </AnimateOnView>

            <AnimateOnView animationType="fade" delay={0.3}>
              <p className="text-xl text-mist max-w-2xl mx-auto font-poppins font-medium">
                Have questions or ready to start your next project? Our team is
                here to help you transform your ideas into reality.
              </p>
            </AnimateOnView>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnView delay={0.1}>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {formFields.map((field, index) => (
                      <div
                        key={index}
                        className={
                          field.gridCols === "full"
                            ? "md:col-span-2"
                            : "md:col-span-1"
                        }
                      >
                        <label
                          htmlFor={field.name}
                          className="block text-slate-300 mb-2 font-medium"
                        >
                          {field.label}
                        </label>

                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            value={
                              formik.values[field.name as keyof FormValues]
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            rows={field.rows}
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

                        {formik.touched[field.name as keyof FormValues] &&
                          formik.errors[field.name as keyof FormValues] && (
                            <p className="mt-1 text-sm text-red-400">
                              {formik.errors[field.name as keyof FormValues]}
                            </p>
                          )}
                      </div>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={
                      formik.isSubmitting || !formik.isValid || !formik.dirty
                    }
                    className="disabled:opacity-50 disabled:cursor-not-allowed w-full bg-gradient-accent text-pure-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-teal/50"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </AnimateOnView>

            {/* Contact Information & Why Choose Us */}
            <div className="space-y-8">
              <AnimateOnView delay={0.2}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-full ${info.bgColor} border ${info.borderColor}`}
                          >
                            <Icon className={`w-6 h-6 ${info.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-slate-300 hover:text-cyan-400 transition-colors"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-slate-300">{info.content}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimateOnView>

              {/* Why Choose Us Section */}
              <AnimateOnView delay={0.3}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Why Choose Us?
                  </h2>

                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </section>
      <AnimateOnView
        animationType="slide-up"
        delay={0.3}
        className="max-w-7xl mx-auto max-h-[410px] overflow-hidden sm:p-0 p-2"
      >
        <div className="aspect-video">
          <iframe
            className="w-full h-[400px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.803873681905!2d80.33901617554618!3d25.47822362026047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ccf0021770815%3A0x3175f81a7a21b86c!2sDeltaware%20solution%20Private%20limited!5e0!3m2!1sen!2sin!4v1749805373716!5m2!1sen!2sin"
            title="DeltaWare Solution - Your Digital Transformation Partner"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </AnimateOnView>
    </div>
  );
}
