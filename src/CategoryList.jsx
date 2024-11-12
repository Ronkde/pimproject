// src/CategoryList.jsx
import React, { useState } from 'react';
import './Styling.css'

const CategoryList = ({ categories, items }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <div>
          <h3>Items in {selectedCategory}</h3>
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryList;