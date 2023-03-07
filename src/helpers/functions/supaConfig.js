import { createClient } from "@supabase/supabase-js";

const projectURL = import.meta.env.VITE_SUPA_PROJECT_URL;
const projectKey = import.meta.env.VITE_SUPA_PUBLIC_KEY;

export const supabase = createClient(projectURL, projectKey);
