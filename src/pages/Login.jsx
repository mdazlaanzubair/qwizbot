import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SocialBtn from "../components/login/SocialBtn";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  // invoking navigation function
  const navigate = useNavigate();

  // redirect user if already logged-in
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  // supabase login providers
  const providers = [
    {
      title: "Google",
      slug: "google",
      icon: "FaGoogle",
    },
    {
      title: "Linkedin",
      slug: "linkedin",
      icon: "FaLinkedinIn",
    },
    {
      title: "Github",
      slug: "github",
      icon: "FaGithubAlt",
    },
    {
      title: "Twitter",
      slug: "twitter",
      icon: "FaTwitter",
    },
    {
      title: "Discord",
      slug: "discord",
      icon: "FaDiscord",
    },
    {
      title: "Facebook",
      slug: "facebook",
      icon: "FaFacebookF",
    },
  ];

  return (
    <div className="hero min-h-screen bg-base-200 text-base-content rounded-box">
      <div className="hero-content text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="content w-full">
            <h1 className="text-5xl font-bold leading-snug">
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
            <a href="#social_login" className="w-20 h-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                />
              </svg>
            </a>
          </div>
          <div id="social_login" className="content mt-5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* social login providers for supabase */}
              {providers.map((social, index) => (
                <SocialBtn key={index} social={social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
