import React, { useState } from 'react';
import Filters from './filters/Filters';
import './SearchCountriesForm.scss';
import { useAppDispatch } from '../../types/redux';
import { setFilter, setSearchValue } from '../../store/search/searchSlice';
import { Filter } from '../../types/countries';
import { filters } from '../../constants';

function SearchCountriesForm() {
  const dispatch = useAppDispatch();

  const [searchInputValue, setSearchInputValue] = useState('');
  const [filterValue, setFilterValue] = useState<Filter>(filters.country);

  const handleFilterChange = (value: Filter) => {
    setFilterValue(value);
    dispatch(setFilter(value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchInputValue(value);
    dispatch(setSearchValue(value));
  };

  return (
    <div className="search-countries-form">
      <input
        placeholder="Search countries..."
        type="text"
        className="search-input"
        value={searchInputValue}
        onChange={handleInputChange}
      />
      <Filters onFilterChange={handleFilterChange} />
    </div>
  );
}

export default SearchCountriesForm;
