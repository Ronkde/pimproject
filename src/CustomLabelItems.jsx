// src/CustomLabelItems.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ListView from "./ListView";

const CustomLabelItems = ({ items, updateItem, deleteItem }) => {
  const { customLabel } = useParams();
  const filteredItems = items.filter(
    (item) => item.customLabel === customLabel
  );

  return (
    <ListView
      title={`Items with label ${customLabel}`}
      items={filteredItems}
      updateItem={updateItem}
      deleteItem={deleteItem}
    />
  );
};

export default CustomLabelItems;
