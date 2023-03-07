import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../helpers/functions/supaConfig";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // user state variable
  const [user, setUser] = useState(null);

  // checking the auth state when the component loads i.e. app starts
  // Listening to auth events (if logged-in or out)
  useEffect(() => {
    // Listening to auth events from supabase
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    // function to clear-out supabase subscription when component unmount
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
