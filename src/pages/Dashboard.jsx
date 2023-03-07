import { useAuth } from "../contexts/AuthContext";
import { supaLogout } from "../helpers/functions/authenticator";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <button
        type="button"
        className="btn btn-block brn-primary"
        onClick={() => supaLogout()}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
