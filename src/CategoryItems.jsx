// src/CategoryItems.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ListView from './ListView';

const CategoryItems = ({ items, updateItem, deleteItem }) => {
  const { categoryName } = useParams();
  const filteredItems = items.filter(item => item.category === categoryName);

  return <ListView title={`Items in ${categoryName}`} items={filteredItems} updateItem={updateItem} deleteItem={deleteItem} />;
};

export default CategoryItems;