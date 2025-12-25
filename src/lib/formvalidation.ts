import * as Yup from "yup";

// Define the contact form values type
interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Define the enrollment form values type
interface EnrollmentFormValues {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

// Yup validation schema for contact form
export const contactForm = Yup.object<ContactFormValues>({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().matches(/^[+]?[\d\s-()]+$/, "Invalid phone number"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

// Yup validation schema for enrollment form
export const enrollmentForm = Yup.object<EnrollmentFormValues>({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().matches(/^[+]?[\d\s-()]+$/, "Invalid phone number"),
  course: Yup.string().required("Please select a course"),
  message: Yup.string().min(5, "Message must be at least 5 characters"),
});
