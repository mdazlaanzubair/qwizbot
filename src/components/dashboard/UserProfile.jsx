import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { supaLogout } from "../../helpers/functions/authenticator";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="card bg-base-100 shadow mb-5">
      <div className="card-body items-center">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center mr-3">
            <div className="avatar mr-4">
              <div className="w-12 rounded-full">
                <img
                  src={user?.user_metadata?.avatar_url}
                  alt="user profile picture"
                />
              </div>
            </div>
            <h1>{user?.user_metadata?.full_name}</h1>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm btn-circle btn-ghost m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg bg-base-300 rounded-box w-auto text-sm"
            >
              <li>
                <Link to="/dashboard">{user?.user_metadata?.full_name}</Link>
              </li>
              <li>
                <Link to="/dashboard">{user?.user_metadata?.email} </Link>
              </li>
              <li>
                <Link to="/" onClick={() => supaLogout()}>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
