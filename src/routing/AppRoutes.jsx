import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";

const AppRoutes = () => {
  const routerList = createBrowserRouter([
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/home",
      element: (
        <div className="font-default">
          <h1>Vite + React</h1>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      ),
    },
  ]);
  return (
    <div className="container">
      <RouterProvider router={routerList} />
    </div>
  );
};

export default AppRoutes;
