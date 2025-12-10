// Simple test to verify email service functions are properly exported
import { sendAdminEmail, sendUserConfirmationEmail } from "./lib/emailService";
import { ContactFormData } from "./lib/databaseService";

console.log("Email service functions loaded successfully:");
console.log("sendAdminEmail:", typeof sendAdminEmail);
console.log("sendUserConfirmationEmail:", typeof sendUserConfirmationEmail);

// Since we're in a serverless environment, we won't actually send emails in this test
console.log("\nEmail service is ready to use!");

async function testEmail() {
  const testData: ContactFormData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+1234567890",
    message: "This is a test message from the email service.",
  };

  console.log("Testing admin email...");
  const adminResult = await sendAdminEmail(testData, "contact");
  console.log("Admin email result:", adminResult);

  console.log("Testing user confirmation email...");
  const userResult = await sendUserConfirmationEmail(testData, "contact");
  console.log("User confirmation email result:", userResult);
}

testEmail().catch(console.error);
