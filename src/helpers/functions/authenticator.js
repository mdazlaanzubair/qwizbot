import { supabase } from "./supaConfig";

// this file that contain all the function of supabase

// 1. FUNCTION - Signup
export const supaRegister = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
};

// 2. FUNCTION - Regular Login
export const supaLogin = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};

// 3. FUNCTION - Login with Provider
export const supaLoginProvider = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  return { data, error };
};

// 4. FUNCTION - Logout
export const supaLogout = async () => {
  const { error } = await supabase.auth.signOut();

  return error;
};

// 5. FUNCTION - Get data of logged in user
export const supaGetUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return data.user;
};

// 6. FUNCTION - Listening to auth events (if logged-in or out)
export const supaCheckUser = async () => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      return session.user;
    } else {
      return null;
    }
  });
};
