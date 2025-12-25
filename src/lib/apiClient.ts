/**
 * API Client for handling form submissions
 *
 * This client communicates with the external Express API server.
 * The API URL is configured via the VITE_API_URL environment variable.
 */

// API base URL - defaults to localhost:3001 for development
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Submit contact form data to the API
 * @param formData - The contact form data to submit
 * @returns Promise resolving to API response
 */
export async function submitContactForm(
  formData: any
): Promise<ApiResponse<any>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Failed to submit contact form",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error: any) {
    console.error("API Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
    };
  }
}

/**
 * Submit enrollment form data to the API
 * @param formData - The enrollment form data to submit
 * @returns Promise resolving to API response
 */
export async function submitEnrollmentForm(
  formData: any
): Promise<ApiResponse<any>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/enrollment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Failed to submit enrollment form",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error: any) {
    console.error("API Error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
    };
  }
}
