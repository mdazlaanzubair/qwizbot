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
        <div className="max-w-md">
          <h1 className="text-3xl lg:text-5xl font-bold">Box Office News!</h1>
          <p className="py-6 text-sm font-light lg:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
