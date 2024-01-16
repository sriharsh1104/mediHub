import React, { useState } from "react";
import { IdleTimerProvider } from "react-idle-timer";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Swal from "sweetalert2";
// import { logoutUser } from "../../../Redux/Slices/user.slice";
import Sidebar from "../Sidebar/Sidebar";
import sm_logo from "../../../Assets/Images/logo.svg";
import mob_logo from "../../../Assets/Images/Icons/mob_logo.png";
import ButtonCustom from "../Button/ButtonCustom";
import wallet from "../../../Assets/Images/wallet.svg"
import "./AuthLayout.scss";
import Select from "../Select/Select";
import user from "../../../Assets/Images/user_img.png"

const AuthLayout = ({ heading }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const handleSidebar = () => setActive(!active);
  const onIdle = () => {
    localStorage.clear();
    Swal.fire({
      icon: "info",
      title: "Session Expired",
      text: "Your session is expired, You have to login again to continue",
      showCancelButton: false,
      confirmButtonText: "Ok",
    }).then(() => {
      // dispatch(logoutUser());
    });
  };
  // const defaultValue = [
  //   { defaultValue: "Marshall Mathers" },
  // ]

  const options = [
    { value: 'My Profile', label: 'My Profile' },
    { value: 'Logout', label: 'Logout' },
  ]
  // const defaultValue = {<> <p>Marshal Mathers</p></>}


  return (
    <IdleTimerProvider timeout={1000 * 60 * 15} crossTab={true} onIdle={onIdle}>
      <div className={`auth_layout ${active ? "expanded_sidebar" : ""}`}>
        <Sidebar handleSidebar={handleSidebar} />
        <div className="auth_layout_inner">
          <header className="auth_layout_inner_header">
            {active && (
              <div
                onClick={handleSidebar}
                className={`${active ? "active" : ""
                  } sidebar_backdrop d-lg-none`}
              />
            )}

            <div className="auth_layout_inner_header_logo d-lg-none">
              <img src={sm_logo} alt="logo" className="desk_log" />
              <img src={mob_logo} alt="mob_logo" className="mob_log" />
            </div>
            <h2>{heading}</h2>
            <div className="auth_layout_inner_user">
              <span><img src={user} alt="user_img" /></span>
              <Select options={options} defaultValue={{ value: 'Marshal Mathers', label: 'Marshal Mathers' }}
              />
            </div>
            <button
              className={`toggle_btn d-lg-none ${active ? "active" : ""}`}
              onClick={handleSidebar}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </header>
          <Outlet />
        </div>
      </div>
    </IdleTimerProvider>
  );
};

export default AuthLayout;
