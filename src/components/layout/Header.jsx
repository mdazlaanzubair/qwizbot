import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import servicesList from "../../helpers/constant/services";
import AppLogo from "../../assets/full_logo.png";
import { supaLogout } from "../../helpers/functions/authenticator";

const Header = () => {
  const { user, setUser } = useAuth();

  // logout function
  const logout = async () => {
    const { error } = await supaLogout();

    // on successful login
    if (!error) {
      // setting user in global context state
      setUser(null);

      // troastifying alerts
      toast.success("You're successfully logged out!");

      // navigate user to the home
      navigate("/");
    } else {
      // troastifying error (if any)
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="navbar bg-base-200 text-base-content rounded-box mb-5">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost">
          <img className="w-12 lg:w-24" src={AppLogo} alt="Qwizbot Logo" />
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
              className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52 bg-neutral text-neutral-content"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link to={service.url}>{service.title}</Link>
                </li>
              ))}
              <li>
                <a onClick={() => logout()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-xs md:btn-sm lg:btn-md lg:btn-primary normal-case"
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
