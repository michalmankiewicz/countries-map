import React, { useState } from 'react';
import './Filters.scss';

type Props = {
  onFilterChange: (filterValue: 'Country' | 'Capital') => void;
};

function Filters(props: Props) {
  const [filter, setFilter] = useState('Country');

  const handleFilterChange = (value: 'Country' | 'Capital') => {
    if (value === filter) return;
    setFilter(value);
    props.onFilterChange(value);
  };

  return (
    <div className="filters">
      <p className="filters__text">Search by:</p>
      <div className="filters__buttons">
        <button
          onClick={() => handleFilterChange('Country')}
          className={`button ${filter === 'Country' ? 'button--active' : ''}`}
        >
          Country
        </button>
        <button
          onClick={() => handleFilterChange('Capital')}
          className={`button ${filter === 'Capital' ? 'button--active' : ''}`}
        >
          Capital
        </button>
      </div>
    </div>
  );
}

export default Filters;
