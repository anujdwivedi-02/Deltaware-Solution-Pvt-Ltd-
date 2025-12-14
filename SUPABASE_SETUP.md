# Supabase Setup Guide

This guide will help you set up Supabase for the contact and enrollment forms.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com/) and sign up or log in
2. Create a new project
3. Note down your Project URL and anon key from the project settings

## 2. Set Up Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 3. Create Database Tables

In the Supabase SQL editor, run the following queries to create the required tables:

### Contact Forms Table

```sql
CREATE TABLE contact_forms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_contact_forms_email ON contact_forms(email);
CREATE INDEX idx_contact_forms_created_at ON contact_forms(created_at);
```

### Enrollment Forms Table

```sql
CREATE TABLE enrollment_forms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  course VARCHAR(100) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_enrollment_forms_email ON enrollment_forms(email);
CREATE INDEX idx_enrollment_forms_course ON enrollment_forms(course);
CREATE INDEX idx_enrollment_forms_created_at ON enrollment_forms(created_at);
```

## 4. Configure Row Level Security (RLS)

To protect the data, enable RLS on both tables:

```sql
-- Enable RLS for contact forms
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

-- Enable RLS for enrollment forms
ALTER TABLE enrollment_forms ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts from anyone (but no reads)
CREATE POLICY "Anyone can insert contact forms" ON contact_forms
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can insert enrollment forms" ON enrollment_forms
FOR INSERT WITH CHECK (true);

-- Grant necessary permissions
GRANT INSERT ON contact_forms TO anon;
GRANT INSERT ON enrollment_forms TO anon;
GRANT INSERT ON contact_forms TO authenticated;
GRANT INSERT ON enrollment_forms TO authenticated;
```

## 5. Troubleshooting RLS Issues

If you encounter the error "new row violates row-level security policy", try these Solution:

### Solution 1: Complete RLS Reset

```sql
-- 1. Disable RLS temporarily
ALTER TABLE contact_forms DISABLE ROW LEVEL SECURITY;
ALTER TABLE enrollment_forms DISABLE ROW LEVEL SECURITY;

-- 2. Drop all existing policies
DROP POLICY IF EXISTS "Anyone can insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Anyone can insert enrollment forms" ON enrollment_forms;
DROP POLICY IF EXISTS "Allow insert for all" ON contact_forms;
DROP POLICY IF EXISTS "Allow insert for all" ON enrollment_forms;
DROP POLICY IF EXISTS "Insert policy" ON contact_forms;
DROP POLICY IF EXISTS "Insert policy" ON enrollment_forms;

-- 3. Re-enable RLS
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollment_forms ENABLE ROW LEVEL SECURITY;

-- 4. Create new permissive policies
CREATE POLICY "Allow insert for all users" ON contact_forms
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow insert for all users" ON enrollment_forms
FOR INSERT WITH CHECK (true);

-- 5. Grant permissions to roles
GRANT ALL ON contact_forms TO anon;
GRANT ALL ON enrollment_forms TO anon;
GRANT ALL ON contact_forms TO authenticated;
GRANT ALL ON enrollment_forms TO authenticated;
```

### Solution 2: Diagnostic Commands

Run these to check your current setup:

```sql
-- Check if RLS is enabled
SELECT tablename, relrowsecurity
FROM pg_class c
JOIN pg_namespace n ON c.relnamespace = n.oid
WHERE n.nspname = 'public'
AND tablename IN ('contact_forms', 'enrollment_forms');

-- Check existing policies
SELECT * FROM pg_policy WHERE polrelid IN (
  SELECT oid FROM pg_class WHERE relname IN ('contact_forms', 'enrollment_forms')
);
```

### Solution 3: Temporary Disable RLS (Testing Only)

```sql
-- Completely disable RLS for both tables (NOT for production)
ALTER TABLE contact_forms DISABLE ROW LEVEL SECURITY;
ALTER TABLE enrollment_forms DISABLE ROW LEVEL SECURITY;
```

### Solution 4: Complete Permissions Reset (For "permission denied" errors)

If you're getting "permission denied for table" errors, run this complete reset:

```sql
-- 1. COMPLETELY DISABLE RLS
ALTER TABLE contact_forms DISABLE ROW LEVEL SECURITY;
ALTER TABLE enrollment_forms DISABLE ROW LEVEL SECURITY;

-- 2. DROP ALL POLICIES
DROP POLICY IF EXISTS "public_insert_contact" ON contact_forms;
DROP POLICY IF EXISTS "public_insert_enrollment" ON enrollment_forms;
DROP POLICY IF EXISTS "no_select_contact" ON contact_forms;
DROP POLICY IF EXISTS "no_select_enrollment" ON enrollment_forms;
DROP POLICY IF EXISTS "Anyone can insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Anyone can insert enrollment forms" ON enrollment_forms;
DROP POLICY IF EXISTS "Admin can read contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Admin can read enrollment forms" ON enrollment_forms;
DROP POLICY IF EXISTS "Public can insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Public can insert enrollment forms" ON enrollment_forms;
DROP POLICY IF EXISTS "Public insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Public insert enrollment forms" ON enrollment_forms;
DROP POLICY IF EXISTS "Authenticated read contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Authenticated read enrollment forms" ON enrollment_forms;
DROP POLICY IF EXISTS "Allow insert for all" ON contact_forms;
DROP POLICY IF EXISTS "Allow insert for all" ON enrollment_forms;
DROP POLICY IF EXISTS "Admin only read contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Admin only read enrollment forms" ON enrollment_forms;

-- 3. GRANT ALL PERMISSIONS TO EVERYONE (TEMPORARY FIX)
GRANT ALL ON contact_forms TO anon;
GRANT ALL ON contact_forms TO authenticated;
GRANT ALL ON enrollment_forms TO anon;
GRANT ALL ON enrollment_forms TO authenticated;

-- 4. SET OWNER TO postgres (if needed)
ALTER TABLE contact_forms OWNER TO postgres;
ALTER TABLE enrollment_forms OWNER TO postgres;
```

## 6. Update Supabase Authentication Settings

1. Go to Authentication > Settings in your Supabase dashboard
2. Make sure "Enable email signup" is turned on
3. You can disable other authentication providers if not needed

## 7. Test the Implementation

After setting up the environment variables and database tables, you can test the forms:

1. Start your Next.js development server: `npm run dev`
2. Navigate to `/contact` and submit the form
3. Navigate to `/enroll-now` and submit the form
4. Check your Supabase table data to confirm entries are being saved

## Troubleshooting

If you encounter issues:

1. Check that your environment variables are correctly set
2. Verify that your Supabase project URL and anon key are correct
3. Ensure that the database tables were created correctly
4. Check the browser console for any JavaScript errors
5. Check the Supabase logs for any database errors

## Security Notes

- The current setup allows anyone to insert data but prevents reading data through the API
- For production use, consider implementing additional security measures
- Regularly rotate your Supabase keys
- Monitor your Supabase usage and set up alerts for unusual activity
