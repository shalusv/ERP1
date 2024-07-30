// src/pages/admin/Employees/Employees.js
import React from "react";
import "../CommonStyles.css";
import "./Employees.css";

const Employees = () => {
  const employees = [
    { id: 1, name: "Alice Johnson", department: "HR" },
    { id: 2, name: "Bob Williams", department: "Finance" },
    // Add more employees as needed
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Employees</h1>
        <button className="add-btn">Add New</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
