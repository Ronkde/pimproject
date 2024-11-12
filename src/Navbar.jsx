// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = ({ locations, categories, onMenuItemClick }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-home-button">Home</Link>
      <DropdownMenu
        label="Inventory"
        items={[
          <span key="add-new-item" onClick={() => onMenuItemClick('Add new item')}>Add new item</span>,
          <Link to="/view-items" key="view-all-items">View all items</Link>,
          <Link to="/view-custom-labels" key="view-all-custom-labels">View all custom labels</Link>
        ]}
      />
      <DropdownMenu
        label="Locations"
        items={[
          <span key="add-new-location" onClick={() => onMenuItemClick('Add new location')}>Add new location</span>,
          <Link to="/view-locations" key="view-all-locations">View all locations</Link>,
          ...locations.map((loc, index) => <Link to={`/location/${loc}`} key={index}>{loc}</Link>)
        ]}
      />
      <DropdownMenu
        label="Categories"
        items={[
          <span key="add-new-category" onClick={() => onMenuItemClick('Add new category')}>Add new category</span>,
          <Link to="/view-categories" key="view-all-categories">View all categories</Link>,
          ...categories.map((cat, index) => <Link to={`/category/${cat}`} key={index}>{cat}</Link>)
        ]}
      />
    </nav>
  );
};

export default Navbar;