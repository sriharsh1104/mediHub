import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login";
import { ErrorBoundary } from "../src/component/comman/ErrorBoundary/Errorboundary";
import Register from "./component/Register/Register";
import Dashboard from "./component/Dasboard/Dashboard";
/**GET STATES FROM STORE */
const Application: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorBoundary />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Application;
