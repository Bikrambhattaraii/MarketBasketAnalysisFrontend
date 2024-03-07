import { Outlet, Navigate, NavLink } from "react-router-dom";
import "../styles/defaultlayout.css";
import { SlEnergy } from "react-icons/sl";
import { TbAnalyze } from "react-icons/tb";
import { protectedApi } from "../config/axios.js";
import { useEffect } from "react";
import {
  FaTachometerAlt,
  FaChartBar,
  FaSignOutAlt,
  FaUpload,
  FaRegGem,
} from "react-icons/fa";

import dummyProfile from "../assets/image/login.png";

const UserLayout = () => {
  // const token = localStorage.getItem("accessToken");
  // const navigate = useNavigate();
  // if (!token) {
  //   navigate("/guest/login");
  // }

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   axiosClient.post("/logout").then(() => {
  //     settingUser(null);
  //     settingToken(null);
  //     settingIsAdmin(true);
  //   });
  // };

  const handleLogout = () => {};
  const sideBarLinks = [
    {
      id: 1,
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      link: "/home/dashboard",
    },
    {
      id: 2,
      name: "Profile",
      icon: <FaChartBar />,
      link: "/home/profile",
    },
    {
      id: 3,
      name: "Energy",
      icon: <SlEnergy />,
      link: "/home/energy",
    },
    {
      id: 4,
      name: "Data upload",
      icon: <FaUpload />,
      link: "/home/upload",
    },
    {
      id: 4,
      name: "Analysis",
      icon: <TbAnalyze color="white" />,
      link: "/home/analyze",
    },
    {
      id: 5,
      name: "Result",
      icon: <FaRegGem />,
      link: "/home/result",
    },
  ];

  return (
    <>
      <>
        <div className="user_dashboard">
          <div className="user_sidebar">
            <h3>User Dashboard</h3>
            <ul>
              {sideBarLinks.map((element) => {
                return (
                  <li key={element.id}>
                    <NavLink
                      // key={element.id}
                      to={element.link}
                      className={({ isActive }) =>
                        isActive ? "active_navlink" : ""
                      }
                    >
                      {element.icon}
                      {element.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="user_dashboard_content">
            <div className="user_navbar">
              <div className="user_profile">
                <img src={dummyProfile} alt="Profile Picture" />
                <span>Hello Static User</span>
              </div>

              <div className="user_handle">
                <button onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>
            <div className="user_dashboard_main_content">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default UserLayout;
