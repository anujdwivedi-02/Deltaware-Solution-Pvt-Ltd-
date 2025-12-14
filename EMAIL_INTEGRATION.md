# Email Integration with Nodemailer

## Overview

This document explains how email functionality has been integrated into the Deltaware Solution website using Nodemailer.

## Implementation Details

### 1. Dependencies Added

- `nodemailer`: For sending emails
- `@types/nodemailer`: TypeScript definitions for nodemailer

### 2. Files Created/Modified

#### New Files:

1. `lib/emailService.ts` - Contains email sending functions and HTML templates
2. `lib/types.ts` - Updated with environment variable typings

#### Modified Files:

1. `app/api/contact/route.ts` - Added email notifications
2. `app/api/enrollment/route.ts` - Added email notifications

### 3. Features Implemented

#### Email Templates

- **Admin Notification Template**: HTML email sent to admin when forms are submitted
- **User Confirmation Template**: HTML email sent to users confirming their submission

#### Email Types

- **Contact Form Emails**: Both admin notification and user confirmation
- **Enrollment Form Emails**: Both admin notification and user confirmation

#### Styling

All emails follow the UI theme of the website with:

- Consistent color schemes (blue for contact, purple for enrollment, green for confirmations)
- Responsive HTML email templates
- Professional design matching the website aesthetic

## Environment Variables

The following environment variables are required in `.env`:

```
NEXT_PUBLIC_EMAIL_HOST=smtp.hostinger.com
NEXT_PUBLIC_EMAIL_PORT=465
NEXT_PUBLIC_EMAIL_USER=contact@deltawaresolution.com
NEXT_PUBLIC_EMAIL_PASSWORD=your_email_password
```

These are already configured in your `.env` file.

## How It Works

### Contact Form Flow

1. User submits contact form on `/contact` page
2. Data is saved to Supabase database
3. Admin receives notification email with form details
4. User receives confirmation email

### Enrollment Form Flow

1. User submits enrollment form on `/enroll-now` page
2. Data is saved to Supabase database
3. Admin receives notification email with form details
4. User receives confirmation email

## Testing the Integration

To test the email functionality:

1. Visit the contact page: `/contact`
2. Fill out and submit the contact form
3. Check the admin email (contact@deltawaresolution.com) for notification
4. Check the email you provided in the form for user confirmation

Repeat the process with the enrollment form on `/enroll-now`.

## Technical Notes

- Emails are sent asynchronously to avoid delaying form submission responses
- Error handling is implemented to log any email sending failures without breaking the form submission
- HTML templates are responsive and should render correctly on most email clients
- Environment variables are properly typed for TypeScript support

## Troubleshooting

If emails are not being sent:

1. Verify SMTP credentials in `.env` file
2. Check server logs for email-related errors
3. Ensure the SMTP server is accessible from your hosting environment
4. Verify that the email account has permission to send emails via SMTP
