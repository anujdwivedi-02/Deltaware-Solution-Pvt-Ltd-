import { NextResponse } from "next/server";
import { insertEnrollmentForm } from "@/lib/databaseService";

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
