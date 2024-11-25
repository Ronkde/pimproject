// src/CustomLabelListView.jsx
import React from "react";
import { Link } from "react-router-dom";

const CustomLabelListView = ({ title, items }) => {
  return (
    <div className="list-view">
      <h2>{title}</h2>
      {items.length === 0 ? (
        <p>No {title.toLowerCase()} added yet</p>
      ) : (
        <div className="items-grid">
          {items.map((item, index) => (
            <div key={index} className="item-box">
              <Link to={`/custom-label/${item}`}>{item}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomLabelListView;
