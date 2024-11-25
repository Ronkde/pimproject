// src/RecentlyAddedItems.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Styling.css"; // Import the CSS file

const RecentlyAddedItems = ({ items }) => {
  return (
    <div className="recently-added-items">
      <h2>Recently Added Items</h2>
      <div className="items-grid">
        {items.slice(-5).map((item, index) => (
          <div key={index} className="item-box">
            <Link to={`/item/${item.name}`}>{item.name}</Link> -{" "}
            <Link to={`/location/${item.location}`}>{item.location}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAddedItems;
