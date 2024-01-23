import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WithoutAuth } from "./Routes/Guard/NoGuard";
import { ErrorBoundary } from "./Components/Common/ErrorBoundary/Errorboundary";
import Loader from "./Components/Common/Loader";
import MainLayout from "./Components/Common/MainLayout/MainLayout";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Dashboard from "./Components/Pages/Admin/Dashboard/Dashboard";
import AuthLayout from "./Components/Common/AuthLayout/AuthLayout";
import AdminLogin from "./Components/Pages/Admin/Login/Login";
import Register from "./Components/Pages/Admin/Login/Register";
import OtpRegistration from "./Components/Pages/Admin/Login/OtpRegistration";
import DashboardListing from "./Components/Pages/Admin/Dashboard/DashboardListing/DashboardListing";
import Post from "./Components/Pages/Admin/Post/Post";
import Message from "./Components/Pages/Admin/Message/Message";
import Voting from "./Components/Pages/Admin/Voting/Voting";
import Setting from "./Components/Pages/Admin/Setting/Setting";
import EmployMange from "./Components/Pages/Admin/Balance/EmployeManger/EmployManger";
import ProfileBio from "./Components/Common/ProfileBio/ProfileBio";
import LoginSetUp from "./Components/Pages/Admin/LoginStepup/LoginSetUp";
import Role from "./Components/Pages/Admin/Role/Role";

const Application: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
    },

    {
      index: true,
      path: "/",
      element: <AdminLogin />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/setupPassword",
      element: <LoginSetUp />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/auth",
      element: <AuthLayout heading={undefined} />,
      // errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "employManager",
          element: <EmployMange />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "profile",
          element: <ProfileBio />,
        },
        {
          path: "role",
          element: <Role />,
        },
        // {
        //   path: "message",
        //   element: <Message />,
        // },
        {
          path: "setting",
          element: <Setting />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  );
};

export default Application;
