// src/RecentlyAddedItems.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecentlyAddedItems = ({ items }) => {
  return (
    <div className="recently-added-items">
      <h2>Recently Added Items</h2>
      <ul>
        {items.slice(-5).map((item, index) => (
          <li key={index}>
            <Link to={`/item/${item.name}`}>{item.name}</Link> - <Link to={`/location/${item.location}`}>{item.location}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyAddedItems;