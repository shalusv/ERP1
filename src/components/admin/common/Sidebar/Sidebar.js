// src/components/admin/common/Sidebar/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import logo from "../../../../assets/images/images-site/logo.png"; // Correct path
import logoSmall from "../../../../assets/images/images-site/logo-small.png"; // Correct path

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
      <div className="logo">
        <img src={isCollapsed ? logoSmall : logo} alt="Logo" />
      </div>
      <nav className="nav">
        <NavLink to="users" className="nav-link">
          <FontAwesomeIcon icon={faUser} />
          <span className="link-text">Users</span>
        </NavLink>
        <NavLink to="employees" className="nav-link">
          <FontAwesomeIcon icon={faUsers} />
          <span className="link-text">Employees</span>
        </NavLink>
        <NavLink to="purchases" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="link-text">Purchases</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
