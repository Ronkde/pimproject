// src/ViewCategory.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewCategory = ({ categories, updateCategory, deleteCategory }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const category = categories.find((cat) => cat === categoryName);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCategory, setEditedCategory] = useState(category);

  if (!category) {
    return <p>Category not found</p>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(category, editedCategory);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${category}?`
    );
    if (confirmed) {
      deleteCategory(category);
      navigate("/view-categories");
    }
  };

  return (
    <div className="view-category">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Category Name</label>
            <input
              type="text"
              value={editedCategory}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </form>
      ) : (
        <>
          <h2>{category}</h2>
          <button onClick={handleEditClick}>Edit Category</button>
        </>
      )}
    </div>
  );
};

export default ViewCategory;
