import { supabase } from "./supabaseClient";

// Define TypeScript interfaces for our data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface EnrollmentFormData {
  name: string;
  email: string;
  phone?: string;
  course: string;
  message?: string;
}

/**
 * Insert contact form data into Supabase
 * @param formData - The contact form data to insert
 * @returns Object containing success status and either data or error
 */
export async function insertContactForm(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        error: "Missing required fields: name, email, and message are required",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Invalid email format",
      };
    }

    // Validate phone format if provided
    if (formData.phone) {
      const phoneRegex = /^[+]?[\d\s-()]+$/;
      if (!phoneRegex.test(formData.phone)) {
        return {
          success: false,
          error: "Invalid phone number format",
        };
      }
    }

    // Validate name length
    if (formData.name.length < 2) {
      return {
        success: false,
        error: "Name must be at least 2 characters long",
      };
    }

    // Validate message length
    if (formData.message.length < 10) {
      return {
        success: false,
        error: "Message must be at least 10 characters long",
      };
    }

    // Prepare data for insertion
    const dataToInsert = {
      name: formData.name.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone ? formData.phone.trim() : null,
      message: formData.message.trim(),
      created_at: new Date(),
    };

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("contact_forms")
      .insert([dataToInsert])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        error: `${error.message} (Code: ${error.code})`,
      };
    }

    return {
      success: true,
      data: data,
    };
  } catch (error: any) {
    console.error("Unexpected error in insertContactForm:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
    };
  }
}

/**
 * Insert enrollment form data into Supabase
 * @param formData - The enrollment form data to insert
 * @returns Object containing success status and either data or error
 */
export async function insertEnrollmentForm(formData: EnrollmentFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.course) {
      return {
        success: false,
        error: "Missing required fields: name, email, and course are required",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Invalid email format",
      };
    }

    // Validate phone format if provided
    if (formData.phone) {
      const phoneRegex = /^[+]?[\d\s-()]+$/;
      if (!phoneRegex.test(formData.phone)) {
        return {
          success: false,
          error: "Invalid phone number format",
        };
      }
    }

    // Validate name length
    if (formData.name.length < 2) {
      return {
        success: false,
        error: "Name must be at least 2 characters long",
      };
    }

    // Validate course selection
    if (!formData.course) {
      return {
        success: false,
        error: "Please select a course",
      };
    }

    // Validate message length if provided
    if (formData.message && formData.message.length > 1000) {
      return {
        success: false,
        error: "Message must be less than 1000 characters",
      };
    }

    // Prepare data for insertion
    const dataToInsert = {
      name: formData.name.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone ? formData.phone.trim() : null,
      course: formData.course.trim(),
      message: formData.message ? formData.message.trim() : null,
      created_at: new Date(),
    };

    console.log("Attempting to insert enrollment form data:", dataToInsert);

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("enrollment_forms")
      .insert([dataToInsert])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        error: `${error.message} (Code: ${error.code})`,
      };
    }

    console.log("Successfully inserted enrollment form data:", data);

    return {
      success: true,
      data: data,
    };
  } catch (error: any) {
    console.error("Unexpected error in insertEnrollmentForm:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
    };
  }
}
