import React from 'react';
import './Filters.scss';

function Filters() {
  return (
    <div className="filters-container">
      <span>Search by:</span>

      <button className="button">Country</button>
      <button className="button">City</button>
    </div>
  );
}

export default Filters;
