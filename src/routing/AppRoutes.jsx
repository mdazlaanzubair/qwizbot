import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const routerList = createBrowserRouter([
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: (
        <div className="App font-default">
          <h1>Vite + React</h1>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      ),
    },
  ]);
  return <RouterProvider router={routerList} />;
};

export default AppRoutes;
