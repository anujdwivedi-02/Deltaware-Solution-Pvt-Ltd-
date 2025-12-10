import { createClient } from "@supabase/supabase-js";

// Ensure environment variables are defined
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable");
}

if (!SUPABASE_ANON_KEY) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable");
}

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
