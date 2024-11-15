// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Summary from './Summary';
import RecentlyAddedItems from './RecentlyAddedItems';
import AddItemForm from './AddItemForm';
import AddForm from './AddForm';
import ListView from './ListView';
import Modal from './Modal';
import LocationItems from './LocationItems';
import CategoryItems from './CategoryItems';
import ViewItem from './ViewItem';
import './Styling.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [showAddLocationForm, setShowAddLocationForm] = useState(false);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);

  const addItem = (item) => {
    setItems([...items, item]);
    setShowAddItemForm(false); // Close the modal after adding an item
  };

  const addLocation = (location) => {
    setLocations([...locations, location]);
    setShowAddLocationForm(false); // Close the modal after adding a location
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
    setShowAddCategoryForm(false); // Close the modal after adding a category
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.name === updatedItem.name ? updatedItem : item)));
  };

  const handleMenuItemClick = (item) => {
    if (item === 'Add new item') {
      setShowAddItemForm(true);
    } else if (item === 'Add new location') {
      setShowAddLocationForm(true);
    } else if (item === 'Add new category') {
      setShowAddCategoryForm(true);
    }
    // Handle other menu items as needed
  };

  const closeModal = () => {
    setShowAddItemForm(false);
    setShowAddLocationForm(false);
    setShowAddCategoryForm(false);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <Navbar locations={locations} categories={categories} onMenuItemClick={handleMenuItemClick} />
          <h1>Hey user!</h1>
        </header>
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Summary items={items} locations={locations} categories={categories} />
                <RecentlyAddedItems items={items} />
              </>
            } />
            <Route path="/recently-added" element={<RecentlyAddedItems items={items} />} />
            <Route path="/add-item" element={
              showAddItemForm && (
                <Modal title="Add new item to inventory" onClose={closeModal}>
                  <AddItemForm addItem={addItem} addLocation={addLocation} addCategory={addCategory} locations={locations} categories={categories} onClose={closeModal} />
                </Modal>
              )
            } />
            <Route path="/view-items" element={<ListView title="All Items" items={items.map(i => i.name)} />} />
            <Route path="/view-locations" element={<ListView title="All Locations" items={locations} itemType="location" />} />
            <Route path="/view-categories" element={<ListView title="All Categories" items={categories} itemType="category" />} />
            <Route path="/view-custom-labels" element={<ListView title="All Custom Labels" items={items.map(i => i.customLabel).filter(label => label)} />} />
            <Route path="/location/:location" element={<LocationItems items={items} />} />
            <Route path="/category/:category" element={<CategoryItems items={items} />} />
            <Route path="/item/:itemName" element={<ViewItem items={items} updateItem={updateItem} />} />
          </Routes>
        </div>
        {showAddItemForm && (
          <Modal title="Add new item to inventory" onClose={closeModal}>
            <AddItemForm addItem={addItem} addLocation={addLocation} addCategory={addCategory} locations={locations} categories={categories} onClose={closeModal} />
          </Modal>
        )}
        {showAddLocationForm && (
          <Modal title="Add new location" onClose={closeModal}>
            <AddForm title="Location" onAdd={addLocation} onClose={closeModal} />
          </Modal>
        )}
        {showAddCategoryForm && (
          <Modal title="Add new category" onClose={closeModal}>
            <AddForm title="Category" onAdd={addCategory} onClose={closeModal} />
          </Modal>
        )}
      </div>
    </Router>
  );
};

export default App;