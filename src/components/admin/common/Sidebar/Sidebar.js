// src/components/admin/common/Sidebar/Sidebar.js
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faUsers,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import logo from "../../../../assets/images/images-site/logo.png"; // Correct path
import logoSmall from "../../../../assets/images/images-site/logo-small.png"; // Correct path

const Sidebar = ({ isCollapsed }) => {
  const location = useLocation(); // Get current location/path

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
      <div className="logo">
        <img src={isCollapsed ? logoSmall : logo} alt="Logo" />
      </div>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${
              isActive || location.pathname === "/" ? "nav-link-active" : ""
            }`
          }
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="link-text">Home</span>
        </NavLink>
        <NavLink
          to="users"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faUser} />
          <span className="link-text">Users</span>
        </NavLink>
        <NavLink
          to="employees"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faUsers} />
          <span className="link-text">Employees</span>
        </NavLink>
        <NavLink
          to="purchases"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="link-text">Purchases</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
