// src/ListView.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ListView = ({ title, items, itemType }) => {
  return (
    <div className="list-view">
      <h2>{title}</h2>
      {items.length === 0 ? (
        <p>No {title.toLowerCase()} added yet</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {itemType ? (
                <Link to={`/${itemType}/${item}`}>{item}</Link>
              ) : (
                <Link to={`/item/${item}`}>{item}</Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListView;