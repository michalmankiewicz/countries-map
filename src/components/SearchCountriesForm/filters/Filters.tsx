import { useState } from 'react';
import './Filters.scss';
import { filters } from '../../../constants';
import { Filter } from '../../../types/countries';

type Props = {
  onFilterChange: (filterValue: Filter) => void;
};

function Filters(props: Props) {
  const [filter, setFilter] = useState<Filter>(filters.country);

  const handleFilterChange = (value: Filter) => {
    if (value === filter) return;

    setFilter(value);
    props.onFilterChange(value);
  };

  return (
    <div className="filters">
      <p className="filters__text">Search by:</p>
      <div className="filters__buttons">
        <button
          onClick={() => handleFilterChange(filters.country)}
          className={`button ${filter === filters.country ? 'button--active' : ''}`}
        >
          Country
        </button>
        <button
          onClick={() => handleFilterChange(filters.capital)}
          className={`button ${filter === filters.capital ? 'button--active' : ''}`}
        >
          Capital
        </button>
      </div>
    </div>
  );
}

export default Filters;
