export const dynamic = "force-static";

import { NextResponse } from "next/server";
import { insertContactForm } from "@/lib/databaseService";
import { sendAdminEmail, sendUserConfirmationEmail } from "@/lib/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, and message are required",
        },
        { status: 400 }
      );
    }

    // Insert data into Supabase
    const result = await insertContactForm({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    });

    if (result.success) {
      // Send emails asynchronously (don't wait for them to complete)
      sendAdminEmail(body, "contact")
        .then((res) => {
          if (!res.success) {
            console.error("Failed to send admin email:", res.error);
          }
        })
        .catch((error) => {
          console.error("Error sending admin email:", error);
        });

      sendUserConfirmationEmail(body, "contact")
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
      console.error("Failed to process contact form submission:", result.error);
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error: any) {
    console.error("API Error in contact form submission:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
