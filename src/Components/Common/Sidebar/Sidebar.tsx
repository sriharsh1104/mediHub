import { Link, NavLink } from "react-router-dom";
import {
  DashboardIcon,
  SettingsIcon,
  TransactionIcon,
  LaptopIcon,
  AuditIcon,
  BalanceIcon,
  VotingIcon,
} from "../../../Assets/Images/Icons/SvgIcons";
import logo from "../../../Assets/Images/oraora.png";
import "./Sidebar.scss";

const Sidebar = ({ handleSidebar }: { handleSidebar?: () => void }) => {
  const NavLinks = [
    {
      icon: <DashboardIcon />,
      label: "Dashboard",
      to: "/auth/dashboard",
    },
    {
      // icon: <AuditIcon />,
      label: "Audit Request",
      to: "/auth/post",
    },
    {
      // icon: <BalanceIcon />,
      label: "Employ Manager",
      to: "/auth/employManager",
    },

    {
      icon: <SettingsIcon />,
      label: "Settings",
      to: "/auth/setting",
    },
    {
      // icon: <VotingIcon />,
      label: "Profile",
      to: "/auth/profile",
    },
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar_inner">
        <div className="sidebar_inner_header">
          <Link to="/admin/dashboard">
            <img src={logo} height={777} width={988} alt="logo" />
          </Link>
        </div>
        {NavLinks.map((item) => (
          <li key={item.label}>
            <NavLink to={item.to} className="nav_link" onClick={handleSidebar}>
              <span className="nav_link_icon">{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
