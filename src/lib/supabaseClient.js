import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://uofrohflgntuqethymiw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZnJvaGZsZ250dXFldGh5bWl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1MTkyMDQsImV4cCI6MjAwMjA5NTIwNH0.Yx6HEZlalNLoHXXhoDH1rIiRt6znI7IBONTa5djpPdg')