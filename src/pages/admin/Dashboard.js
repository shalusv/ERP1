// src/pages/admin/Dashboard.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/admin/common/Sidebar/Sidebar";
import Header from "../../components/admin/common/Header/Header";
import Footer from "../../components/admin/common/Footer/Footer";
import Users from "./Users";
import Employees from "./Employees";
import Purchases from "./Purchases";
import "./Dashboard.css";

const Dashboard = () => {
  // Initial state based on screen size
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(
    window.innerWidth <= 768
  );

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      // Collapse the sidebar on small screens
      setIsSidebarCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`dashboard ${isSidebarCollapsed ? "collapsed" : "expanded"}`}
    >
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="main-content">
        <Header onToggleSidebar={handleToggleSidebar} />
        <div className="content">
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="employees" element={<Employees />} />
            <Route path="purchases" element={<Purchases />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
