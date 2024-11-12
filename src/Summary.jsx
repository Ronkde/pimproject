// src/Summary.jsx
import React from 'react';

const Summary = ({ items, locations, categories }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total items: {items.length}</p>
      <p>Total locations: {locations.length}</p>
      <p>Total categories: {categories.length}</p>
      {/* Add more summary details as needed */}
    </div>
  );
};

export default Summary;