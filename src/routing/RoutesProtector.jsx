import { Outlet, Navigate } from "react-router-dom";

const RoutesProtector = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RoutesProtector;
