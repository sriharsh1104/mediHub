// Sidebar.js

import { Link, NavLink, useLocation } from "react-router-dom";
import { DashboardIcon } from "../../Assests/Images/Icons/SvgIcons";
import "./Sidebar.scss";


const Sidebar = ({ handleSidebar }: { handleSidebar?: () => void }) => {
  const NavLinks = [
    {
      icon: <DashboardIcon />,
      label: "Dashboard",
      to: "/dashboard",
      activePaths: [
        {
          id: 1,
          path: "/",
        },
      ],
    },
    {
      label: "Manage Employees",
      to: "/employmanage",
    },
    {
      label: "My Profile",
      to: "/profile",
    },
    {
      label: "Category",
      to: "/category",
    },
    // {
    //   label: "Logout",
    //   to: "/Logout",
    // },
  ];

  const location = useLocation();

  return (
    <aside className="sidebar bg-gray-800 text-white">
      <ul className="sidebar_inner">
        <div className="sidebar_inner_header">
        <Link to="/dashboard">
            {/* <img src={logo} alt="logo" /> */}
          </Link>
        </div>
        {NavLinks?.map((item, index: any) => (
          <li key={index}>
            <NavLink
              to={item?.to}
              className={`nav_link ${item?.activePaths?.filter(
                (item: any) => location?.pathname === item?.path
              ).length ? "active" : ""}`}
              onClick={handleSidebar}
            >
              {item?.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;