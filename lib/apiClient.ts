/**
 * API Client for handling form submissions
 */

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
    const response = await fetch("/api/contact", {
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
    const response = await fetch("/api/enrollment", {
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
