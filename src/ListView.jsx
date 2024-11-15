// src/ListView.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ListView = ({ title, items, itemType, updateItem, deleteItem }) => {
  const [editingItem, setEditingItem] = useState(null);
  const [editedItem, setEditedItem] = useState({});

  const handleEditClick = (item) => {
    setEditingItem(item.name);
    setEditedItem({ ...item });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(editedItem);
    setEditingItem(null);
  };

  const handleDelete = (itemName) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${itemName}?`);
    if (confirmed) {
      deleteItem(itemName);
    }
  };

  return (
    <div className="list-view">
      <h2>{title}</h2>
      {items.length === 0 ? (
        <p>No {title.toLowerCase()} added yet</p>
      ) : (
        <div className="items-grid">
          {items.map((item, index) => (
            <div key={index} className="item-box">
              {itemType ? (
                <Link to={`/${itemType}/${item}`}>{item}</Link>
              ) : (
                <>
                  {editingItem === item.name ? (
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
                      <button type="button" onClick={() => setEditingItem(null)}>Cancel</button>
                    </form>
                  ) : (
                    <>
                      <h3>{item.name}</h3>
                      <p><strong>Location:</strong> {item.location}</p>
                      <p><strong>Category:</strong> {item.category}</p>
                      <p><strong>Custom Label:</strong> {item.customLabel}</p>
                      <button onClick={() => handleEditClick(item)}>Edit</button>
                      <button onClick={() => handleDelete(item.name)}>Delete</button>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListView;