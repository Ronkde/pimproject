// src/ViewItem.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Styling.css'; // Import the CSS file

const ViewItem = ({ items, updateItem, deleteItem }) => {
  const { itemName } = useParams();
  const navigate = useNavigate();
  const item = items.find(i => i.name === itemName);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });

  if (!item) {
    return <p>Item not found</p>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(editedItem);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(`Are you sure you want to delete ${item.name}?`);
    if (confirmed) {
      deleteItem(item.name);
      navigate('/');
    }
  };

  return (
    <div className="view-item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Item Name</label>
            <input type="text" name="name" value={editedItem.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Description</label>
            <input type="text" name="description" value={editedItem.description} onChange={handleChange} required />
          </div>
          <div>
            <label>Location</label>
            <input type="text" name="location" value={editedItem.location} onChange={handleChange} required />
          </div>
          <div>
            <label>Category</label>
            <input type="text" name="category" value={editedItem.category} onChange={handleChange} required />
          </div>
          <div>
            <label>Custom Label</label>
            <input type="text" name="customLabel" value={editedItem.customLabel} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={handleDelete}>Delete</button>
        </form>
      ) : (
        <>
          <h2>{item.name}</h2>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Location:</strong> {item.location}</p>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Custom Label:</strong> {item.customLabel}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default ViewItem;