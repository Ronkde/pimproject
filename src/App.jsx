// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Summary from './Summary';
import RecentlyAddedItems from './RecentlyAddedItems';
import AddItemForm from './AddItemForm';
import AddForm from './AddForm';
import ListView from './ListView';
import CustomLabelListView from './CustomLabelListView';
import Modal from './Modal';
import LocationItems from './LocationItems';
import CategoryItems from './CategoryItems';
import CustomLabelItems from './CustomLabelItems';
import ViewItem from './ViewItem';
import './Styling.css';
import logo from './img/logo.png'; // Adjust the path as needed

const App = () => {
  const [items, setItems] = useState([
    { name: 'Item 1', description: 'Description 1', location: 'Location A', category: 'Category X', customLabel: 'Label 1' },
    { name: 'Item 2', description: 'Description 2', location: 'Location B', category: 'Category Y', customLabel: 'Label 2' },
    { name: 'Item 3', description: 'Description 3', location: 'Location A', category: 'Category Z', customLabel: 'Label 3' },
    { name: 'Item 4', description: 'Description 4', location: 'Location C', category: 'Category X', customLabel: 'Label 4' },
    { name: 'Item 5', description: 'Description 5', location: 'Location B', category: 'Category Y', customLabel: 'Label 5' },
    { name: 'Item 6', description: 'Description 6', location: 'Location C', category: 'Category Z', customLabel: 'Label 6' },
  ]);
  const [locations, setLocations] = useState(['Location A', 'Location B', 'Location C']);
  const [categories, setCategories] = useState(['Category X', 'Category Y', 'Category Z']);
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

  const updateLocation = (oldLocation, newLocation) => {
    setLocations(locations.map(location => (location === oldLocation ? newLocation : location)));
  };

  const updateCategory = (oldCategory, newCategory) => {
    setCategories(categories.map(category => (category === oldCategory ? newCategory : category)));
  };

  const deleteItem = (itemName) => {
    setItems(items.filter(item => item.name !== itemName));
  };

  const deleteLocation = (locationName) => {
    setLocations(locations.filter(location => location !== locationName));
  };

  const deleteCategory = (categoryName) => {
    setCategories(categories.filter(category => category !== categoryName));
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
          <img src={logo} alt="Logo" className="header-logo" />
        </header>
        <Routes>
          <Route path="/" element={
            <>
              <div className="home-bar">Hey user!</div>
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
          <Route path="/view-items" element={<ListView title="All Items" items={items} updateItem={updateItem} deleteItem={deleteItem} />} />
          <Route path="/view-locations" element={<ListView title="All Locations" items={locations} itemType="location" />} />
          <Route path="/view-categories" element={<ListView title="All Categories" items={categories} itemType="category" />} />
          <Route path="/view-custom-labels" element={<CustomLabelListView title="All Custom Labels" items={items.filter(i => i.customLabel).map(i => i.customLabel)} />} />
          <Route path="/location/:locationName" element={<LocationItems items={items} updateItem={updateItem} deleteItem={deleteItem} />} />
          <Route path="/category/:categoryName" element={<CategoryItems items={items} updateItem={updateItem} deleteItem={deleteItem} />} />
          <Route path="/custom-label/:customLabel" element={<CustomLabelItems items={items} updateItem={updateItem} deleteItem={deleteItem} />} />
          <Route path="/item/:itemName" element={<ViewItem items={items} updateItem={updateItem} deleteItem={deleteItem} />} />
        </Routes>
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