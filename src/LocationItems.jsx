// src/LocationItems.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ListView from './ListView';

const LocationItems = ({ items }) => {
  const { location } = useParams();
  const filteredItems = items.filter(item => item.location === location);

  return <ListView title={`Items in ${location}`} items={filteredItems.map(item => item.name)} />;
};

export default LocationItems;