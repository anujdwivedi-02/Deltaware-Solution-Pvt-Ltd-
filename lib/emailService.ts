import nodemailer from "nodemailer";
import { ContactFormData, EnrollmentFormData } from "./databaseService";

// Create transporter using environment variables
const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || "587"),
    secure: process.env.NEXT_PUBLIC_EMAIL_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // optional, but avoids cert issues
    },
  });

  return transporter;
};

// Email template for contact form
const getContactEmailTemplate = (data: ContactFormData) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0ea5e9; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f8f9fa; padding: 30px; border-radius: 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0ea5e9; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <p>${data.name}</p>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <p>${data.email}</p>
      </div>
      ${
        data.phone
          ? `<div class="field">
        <span class="label">Phone:</span>
        <p>${data.phone}</p>
      </div>`
          : ""
      }
      <div class="field">
        <span class="label">Message:</span>
        <p>${data.message}</p>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from the Deltaware Solution website contact form.</p>
    </div>
  </div>
</body>
</html>
`;
};

// Email template for enrollment form
const getEnrollmentEmailTemplate = (data: EnrollmentFormData) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enrollment Form Submission</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #8b5cf6; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f8f9fa; padding: 30px; border-radius: 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #8b5cf6; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Enrollment Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <p>${data.name}</p>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <p>${data.email}</p>
      </div>
      ${
        data.phone
          ? `<div class="field">
        <span class="label">Phone:</span>
        <p>${data.phone}</p>
      </div>`
          : ""
      }
      <div class="field">
        <span class="label">Course:</span>
        <p>${data.course}</p>
      </div>
      ${
        data.message
          ? `<div class="field">
        <span class="label">Message:</span>
        <p>${data.message}</p>
      </div>`
          : ""
      }
    </div>
    <div class="footer">
      <p>This email was sent from the Deltaware Solution website enrollment form.</p>
    </div>
  </div>
</body>
</html>
`;
};

// Email template for confirmation to user
const getUserConfirmationTemplate = (
  data: ContactFormData | EnrollmentFormData,
  formType: "contact" | "enrollment"
) => {
  const title = formType === "contact" ? "Contact Form" : "Enrollment Form";
  const description =
    formType === "contact"
      ? "Thank you for contacting us. We have received your message and will get back to you shortly."
      : "Thank you for your interest in our courses. We have received your enrollment request and will get back to you shortly.";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Submission</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #10b981; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f8f9fa; padding: 30px; border-radius: 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #10b981; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You!</h1>
    </div>
    <div class="content">
      <p>Hello ${data.name},</p>
      <p>${description}</p>
      
      <div class="field">
        <span class="label">Your Details:</span>
        <p>Name: ${data.name}<br>
        Email: ${data.email}<br>
        ${data.phone ? `Phone: ${data.phone}<br>` : ""}</p>
      </div>
      
      ${
        formType === "enrollment"
          ? `
      <div class="field">
        <span class="label">Course Interested:</span>
        <p>${(data as EnrollmentFormData).course}</p>
      </div>
      `
          : ""
      }
      
      <p>We appreciate your interest in Deltaware Solution.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Deltaware Solution. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
};

// Send email to admin
export const sendAdminEmail = async (
  data: ContactFormData | EnrollmentFormData,
  formType: "contact" | "enrollment"
) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
      to: process.env.NEXT_PUBLIC_EMAIL_USER, // Sending to admin
      subject:
        formType === "contact"
          ? `New Contact Form Submission from ${data.name}`
          : `New Enrollment Form Submission for ${data.name}`,
      html:
        formType === "contact"
          ? getContactEmailTemplate(data as ContactFormData)
          : getEnrollmentEmailTemplate(data as EnrollmentFormData),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Admin email sent successfully:", result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("Error sending admin email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

// Send confirmation email to user
export const sendUserConfirmationEmail = async (
  data: ContactFormData | EnrollmentFormData,
  formType: "contact" | "enrollment"
) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
      to: data.email, // Sending to user
      subject:
        formType === "contact"
          ? "Thank you for contacting Deltaware Solution"
          : "Thank you for your enrollment interest",
      html: getUserConfirmationTemplate(data, formType),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("User confirmation email sent successfully:", result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("Error sending user confirmation email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
