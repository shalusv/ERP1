// src/components/admin/common/Header/Header.js
import React from "react";
import "./Header.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <button className="collapse-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>Dashboard</h1>
    </header>
  );
};

export default Header;
