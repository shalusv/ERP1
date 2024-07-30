// src/pages/admin/Purchases/Purchases.js
import React from "react";
import "../CommonStyles.css";
import "./Purchases.css";

const Purchases = () => {
  const purchases = [
    { id: 1, item: "Laptop", amount: "$1200" },
    { id: 2, item: "Phone", amount: "$800" },
    // Add more purchases as needed
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Purchases</h1>
        <button className="add-btn">Add New</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{purchase.item}</td>
              <td>{purchase.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Purchases;
