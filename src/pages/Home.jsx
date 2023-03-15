import { Link } from "react-router-dom";
import Animator from "../components/home/Animator";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="hero min-h-screen bg-base-200 rounded-box">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
        <div className="w-60 lg:w-full">
          <Animator />
        </div>
        <div className="max-w-md ppl-0 lg:pl-10">
          <h1 className="text-lg lg:text-3xl font-bold">
            Are you tired of sifting through pages of text to find the
            information you need?
          </h1>
          <p className="py-6 text-sm font-light lg:text-base">
            Look no further! This AI-powered software simplifies the process by
            finding answers and summarizing text quickly and efficiently.
          </p>
          <p className="pb-6 text-sm font-light lg:text-base">
            Take your productivity to the next level with{" "}
            <span className="text-primary font-bold">Qwizbot!</span>
          </p>

          {user ? (
            <Link to="/dashboard" className="btn btn-sm lg:btn-md btn-neutral">
              Go to Dashboard
            </Link>
          ) : (
            <Link to="/login" className="btn btn-sm lg:btn-md btn-primary">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
