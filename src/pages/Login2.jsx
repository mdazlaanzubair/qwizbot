import {
  DiscordLoginButton,
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  SlackLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import { supaLoginProvider } from "../helpers/functions/authenticator";

const Signup = () => {
  return (
    <div className="hero min-h-screen bg-base-200 text-base-content">
      <div className="hero-content text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="content">
            <h1 className="text-5xl font-bold mb-5 leading-snug">
              Ready to Explore{" "}
              <span className="text-primary underline underline-offset-8 after:contents after:Hello">
                Qwizbot
              </span>{" "}
              ?
            </h1>
            <p className="py-3">
              Join and experience the full potential of this platform today!
            </p>
            <p className="pb-6">Login to access the Power of AI.</p>
          </div>
          <div className="divider">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
              />
            </svg>
          </div>
          <div className="content">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-">
              <GoogleLoginButton
                onClick={() => supaLoginProvider("google")}
                iconSize={15}
                style={{ fontSize: "10px" }}
              />
              <LinkedInLoginButton
                onClick={() => alert("Hello")}
                iconSize={15}
                style={{ fontSize: "10px" }}
              />
              <SlackLoginButton
                onClick={() => alert("Hello")}
                iconSize={15}
                style={{ fontSize: "10px" }}
              />
              <TwitterLoginButton
                onClick={() => alert("Hello")}
                iconSize={15}
                style={{ fontSize: "10px" }}
              />
              <DiscordLoginButton
                onClick={() => supaLoginProvider("discord")}
                iconSize={15}
                style={{ fontSize: "10px" }}
              />
              <GithubLoginButton
                onClick={() => supaLoginProvider("github")}
                iconSize={15}
                style={{ fontSize: "10px" }}
              />
              <FacebookLoginButton
                onClick={() => alert("Hello")}
                iconSize={15}
                style={{ fontSize: "9px" }}
              />
              <InstagramLoginButton
                onClick={() => alert("Hello")}
                iconSize={15}
                style={{ fontSize: "9px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
