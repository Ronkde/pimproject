// src/ViewLocation.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewLocation = ({ locations, updateLocation, deleteLocation }) => {
  const { locationName } = useParams();
  const navigate = useNavigate();
  const location = locations.find((loc) => loc === locationName);
  const [isEditing, setIsEditing] = useState(false);
  const [editedLocation, setEditedLocation] = useState(location);

  if (!location) {
    return <p>Location not found</p>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLocation(location, editedLocation);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${location}?`
    );
    if (confirmed) {
      deleteLocation(location);
      navigate("/view-locations");
    }
  };

  return (
    <div className="view-location">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Location Name</label>
            <input
              type="text"
              value={editedLocation}
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
          <h2>{location}</h2>
          <button onClick={handleEditClick}>Edit Location</button>
        </>
      )}
    </div>
  );
};

export default ViewLocation;
