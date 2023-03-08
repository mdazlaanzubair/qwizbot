import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import RoutesProtector from "./RoutesProtector";

const AppRoutes = () => {
  // grabbing user (if any) for protected routes
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} exact />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="login" element={<h1>QnA</h1>} />
          <Route path="login" element={<h1>QnA</h1>} />
          <Route path="login" element={<h1>QnA</h1>} />
        </Route>
        {/* <Route element={<RoutesProtector user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
        <Route path="/home" element={<h1>Landing Page</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
