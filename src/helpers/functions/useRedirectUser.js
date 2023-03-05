import { useNavigate } from "react-router-dom";
import { supabase } from "./supaConfig";

// custom hook to redirect user based on authentication status
const useRedirectUser = () => {
  // invoking navigator
  const navigator = useNavigate();

  // redirect user based on authentication status
  supabase.auth.onAuthStateChange(async (event) =>
    event === "SIGNED_OUT" ? navigator("/") : navigator("/")
  );

  console.log("Redirected");
};

export default useRedirectUser;
