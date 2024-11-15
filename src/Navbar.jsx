// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onMenuItemClick }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-home-button">Home</Link>
      <div className="dropdown">
        <button className="dropdown-button">Inventory</button>
        <div className="dropdown-content">
          <button onClick={() => onMenuItemClick('Add new item')}>Add New Item</button>
          <Link to="/view-items">View All Items</Link>
          <Link to="/view-custom-labels">View Custom Labels</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Locations</button>
        <div className="dropdown-content">
          <button onClick={() => onMenuItemClick('Add new location')}>Add New Location</button>
          <Link to="/view-locations">View All Locations</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">Categories</button>
        <div className="dropdown-content">
          <button onClick={() => onMenuItemClick('Add new category')}>Add New Category</button>
          <Link to="/view-categories">View All Categories</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;