// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Users from "./pages/admin/Users/Users";
import Employees from "./pages/admin/Employees/Employees";
import Purchases from "./pages/admin/Purchases/Purchases";

const App = () => (
  <Routes>
    <Route path="/" element={<Dashboard />}>
      <Route path="users" element={<Users />} />
      <Route path="employees" element={<Employees />} />
      <Route path="purchases" element={<Purchases />} />
    </Route>
  </Routes>
);

export default App;
