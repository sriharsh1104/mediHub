import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login";
import { ErrorBoundary } from "../src/component/comman/ErrorBoundary/Errorboundary";
import Register from "./component/Register/Register";
import Dashboard from "./component/Dasboard/Dashboard";
import Sidebar from "./component/SideBar/sideBar";
import EmployManage from "./component/Employmangement/EmployMange";
import Category from "./component/Category/Category";
import Profile from "./component/Profile/Profile";
import DashboardEmploy from "./component/DasboardForAdmin/DashboardEmploy";
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
      path: "/dashboardEmploy",
      element: <DashboardEmploy />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/",
      element: <Sidebar />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/employmanage",
          element: <EmployManage />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "/category",
          element: <Category />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "/profile",
          element: <Profile />,
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Application;
