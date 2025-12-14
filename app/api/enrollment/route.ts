export const dynamic = "force-static";
import { NextResponse } from "next/server";
import { insertEnrollmentForm } from "@/lib/databaseService";
import { sendAdminEmail, sendUserConfirmationEmail } from "@/lib/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Received enrollment form submission:", body);

    // Validate required fields
    if (!body.name || !body.email || !body.course) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, and course are required",
        },
        { status: 400 }
      );
    }

    // Insert data into Supabase
    const result = await insertEnrollmentForm({
      name: body.name,
      email: body.email,
      phone: body.phone,
      course: body.course,
      message: body.message,
    });

    if (result.success) {
      console.log("Successfully processed enrollment form submission");

      // Send emails asynchronously (don't wait for them to complete)
      sendAdminEmail(body, "enrollment")
        .then((res) => {
          if (!res.success) {
            console.error("Failed to send admin email:", res.error);
          }
        })
        .catch((error) => {
          console.error("Error sending admin email:", error);
        });

      sendUserConfirmationEmail(body, "enrollment")
        .then((res) => {
          if (!res.success) {
            console.error("Failed to send user confirmation email:", res.error);
          }
        })
        .catch((error) => {
          console.error("Error sending user confirmation email:", error);
        });

      return NextResponse.json(
        { success: true, data: result.data },
        { status: 201 }
      );
    } else {
      console.error(
        "Failed to process enrollment form submission:",
        result.error
      );
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error: any) {
    console.error("API Error in enrollment form submission:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
