import { createClient } from "@supabase/supabase-js";

// Ensure environment variables are defined
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) {
  throw new Error("Missing VITE_SUPABASE_URL environment variable");
}

if (!SUPABASE_ANON_KEY) {
  throw new Error("Missing VITE_SUPABASE_ANON_KEY environment variable");
}

// Create Supabase client
const isPlaceholderUrl =
  SUPABASE_URL &&
  (SUPABASE_URL.includes("ymsrtmibxjdinsyoqvip.supabase.co") ||
    SUPABASE_URL.includes("your-project-url"));
const isPlaceholderKey =
  SUPABASE_ANON_KEY &&
  (SUPABASE_ANON_KEY.includes("your-anon-key") ||
    SUPABASE_ANON_KEY.length < 20);

if (isPlaceholderUrl || isPlaceholderKey) {
  console.warn(
    "Supabase configuration appears to be using placeholder values. Please update your .env file with actual credentials from the Supabase dashboard.",
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
