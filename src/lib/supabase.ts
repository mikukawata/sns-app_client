import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!; //t3 env
export const supabase = createClient(supabaseUrl, supabaseKey);
