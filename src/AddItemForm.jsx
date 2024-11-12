// src/AddItemForm.jsx
import React, { useState } from 'react';

const AddItemForm = ({ addItem, addLocation, addCategory, locations, categories, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [customLabel, setCustomLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name: itemName, description, location, category, customLabel });
    setItemName('');
    setDescription('');
    setLocation('');
    setCategory('');
    setCustomLabel('');
    onClose();
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    if (value === 'add-new-location') {
      const newLocation = prompt('Enter new location:');
      if (newLocation) {
        addLocation(newLocation);
        setLocation(newLocation);
      }
    } else {
      setLocation(value);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === 'add-new-category') {
      const newCategory = prompt('Enter new category:');
      if (newCategory) {
        addCategory(newCategory);
        setCategory(newCategory);
      }
    } else {
      setCategory(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item Name</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Location</label>
        <select value={location} onChange={handleLocationChange} required>
          <option value="" disabled>Select Location</option>
          <option value="add-new-location">Add new location</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Category</label>
        <select value={category} onChange={handleCategoryChange} required>
          <option value="" disabled>Select Category</option>
          <option value="add-new-category">Add new category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Custom Label</label>
        <input type="text" value={customLabel} onChange={(e) => setCustomLabel(e.target.value)} />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;