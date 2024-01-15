import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import sm_logo from "../Assests/Images/Icons/logo.svg";
import "./AuthLayout.scss";
import Sidebar from "../component/SideBar/sideBar";
import CommanHeader from "../component/commanHeader/CommanHeader";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const location = useLocation();

  let alterPaths = [
    {
      path: "/admin/dashboard-listing",
      alterPath: "Dashboard",
    },
    {
      path: "/admin/my-profilepage",
      alterPath: "My Profile",
    },
    {
      path: "/admin/pending-audits",
      alterPath: "My Profile",
    },
  ];

  return (
    <div className="auth_layout">
      <div className="no_internet_connection"></div>

      <Sidebar />
      <div className="auth_layout_inner">
        <header className="auth_layout_inner_header">
          {!active && (
            <div
              className={`${active ? "active" : ""} sidebar_backdrop d-xl-none`}
            />
          )}
          <div className="auth_layout_inner_header_logo">
            <img src={sm_logo} alt="logo" className="desk_log" />
          </div>
          <CommanHeader />
          <h4 className={`text-dark ms-4 mt-3 text-capitalize`}>ORA ORA</h4>
          <div className="auth_layout_inner_user"></div>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
