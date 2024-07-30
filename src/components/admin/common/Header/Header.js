import React from "react";
import "./Header.css";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <button className="collapse-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>Dashboard</h1>
      <ProfileMenu />
    </header>
  );
};

export default Header;
