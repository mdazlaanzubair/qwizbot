import React from "react";
import * as FontAwesome from "react-icons/fa";
import { toast } from "react-toastify";
import { supaLoginProvider } from "../../helpers/functions/authenticator";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const SocialBtn = ({ social }) => {
  // invoking navigation function
  const navigate = useNavigate();

  // dynamic social icon
  const icon = React.createElement(FontAwesome[social.icon]);

  // redirect user if already logged-in
  const { setUser } = useAuth();

  // social login function
  const simpleLogin = async (provider) => {
    // calling logging in user
    const { data, error } = await supaLoginProvider(provider);

    // on successful login
    if (!error) {
      // setting user in global context state
      setUser(data);

      // troastifying alerts
      toast.success("You're successfully logged in!");
    } else {
      // troastifying error (if any)
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <button
      type="button"
      className="btn btn-block shadow-md hover:shadow-xl hover:shadow-neutral normal-case flex flex-row rounded-md"
      onClick={() => simpleLogin(social.slug)}
    >
      <span className="icon mr-2 text-xl">{icon}</span>
      Login with {social.title}
    </button>
  );
};

export default SocialBtn;
