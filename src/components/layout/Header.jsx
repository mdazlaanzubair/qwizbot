import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { supaLogout } from "../../helpers/functions/authenticator";

const Header = () => {
  const { user } = useAuth();

  return (
    <div className="navbar bg-neutral text-neutral-content rounded-box mb-5">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Qwizbot
        </Link>
      </div>
      <div className="flex-none gap-2 mx-4">
        {user ? (
          <div className="dropdown dropdown-end items">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.user_metadata?.avatar_url} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a onClick={() => supaLogout()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary normal-case">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
