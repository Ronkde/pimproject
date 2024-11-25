// src/LocationItems.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ListView from "./ListView";

const LocationItems = ({ items, updateItem, deleteItem }) => {
  const { locationName } = useParams();
  const filteredItems = items.filter((item) => item.location === locationName);

  return (
    <ListView
      title={`Items in ${locationName}`}
      items={filteredItems}
      updateItem={updateItem}
      deleteItem={deleteItem}
    />
  );
};

export default LocationItems;
