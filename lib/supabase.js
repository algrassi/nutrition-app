// lib/supabase.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

export const supabase = createClient(
  'https://wsxcmqsnlojadxasdmct.supabase.co',  // Project URL
  'eyJxxx...'                     // anon key
)