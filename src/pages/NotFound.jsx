import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NotFound = () => {
  const { user } = useAuth();
  useEffect(() => console.log(user), []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Page Not Found</h1>
          <p className="py-6">
            Seems like you are navigating towards wrong direction. Requested
            page is not available, you should go back to the main site.
          </p>
          <Link to="/" className="btn btn-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
