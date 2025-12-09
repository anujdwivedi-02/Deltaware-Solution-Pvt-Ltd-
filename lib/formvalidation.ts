import * as Yup from "yup";

// Define the form values type
interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Yup validation schema
export const contactForm = Yup.object<FormValues>({
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
