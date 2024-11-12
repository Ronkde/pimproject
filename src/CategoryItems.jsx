// src/CategoryItems.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ListView from './ListView';

const CategoryItems = ({ items }) => {
  const { category } = useParams();
  const filteredItems = items.filter(item => item.category === category);

  return <ListView title={`Items in ${category}`} items={filteredItems.map(item => item.name)} />;
};

export default CategoryItems;