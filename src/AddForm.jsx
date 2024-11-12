// src/AddForm.jsx
import React, { useState } from 'react';

const AddForm = ({ title, onAdd, onClose }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name);
    setName('');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{title} Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit">Add {title}</button>
    </form>
  );
};

export default AddForm;