#!/bin/zsh

# pass project ID as a parameter
npx supabase gen types typescript --project-id $1 --schema public > src/types/supabase.type.ts
