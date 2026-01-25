// import { createClient } from "@supabase/supabase-js";

// const SUPABASE_URL = process.env.VITE_SUPABASE_URL as string;
// const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY as string;

// // console.log(SUPABASE_URL);
// // console.log(SUPABASE_ANON_KEY);

// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
);
