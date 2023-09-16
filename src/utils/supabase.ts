import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseServer = createClient(supabaseUrl!, supabaseSecretKey!, {
  auth: {
    persistSession: false,
  }
});

export default supabaseServer;