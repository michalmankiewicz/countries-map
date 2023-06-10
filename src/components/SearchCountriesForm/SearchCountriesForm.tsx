import React, { useState } from 'react';
import Filters from './filters/Filters';
import './SearchCountriesForm.scss';
import { useAppDispatch } from '../../types/redux';
import { setFilter, setSearchValue } from '../../store/search/searchSlice';

function SearchCountriesForm() {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState({
    searchValue: '',
    filter: 'Country',
  });

  const handleFilterChange = (value: 'Country' | 'Capital') => {
    setSearch((prevState) => {
      return { ...prevState, filter: value };
    });
    dispatch(setFilter(value));
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch((prevState) => {
      return { ...prevState, searchValue: (e.target as HTMLInputElement).value };
    });
    dispatch(setSearchValue((e.target as HTMLInputElement).value));
  };

  console.log(search);

  return (
    <div className="search-countries-form">
      <input
        placeholder="Search countries..."
        className="search-input"
        value={search.searchValue}
        onChange={handleInputChange}
      />
      <Filters onFilterChange={handleFilterChange} />
    </div>
  );
}

export default SearchCountriesForm;
