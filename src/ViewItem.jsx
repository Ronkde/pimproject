// src/ViewItem.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ViewItem = ({ items }) => {
  const { itemName } = useParams();
  const item = items.find(i => i.name === itemName);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="view-item">
      <h2>{item.name}</h2>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Custom Label:</strong> {item.customLabel}</p>
    </div>
  );
};

export default ViewItem;