import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import { Home, Login,Signup } from "../pages";

function Route() {
  const route = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "*",
      element: <div>Page topilmadi!</div>,
    },
  ]);
  return <RouterProvider router={route} />;
}

export default Route;
