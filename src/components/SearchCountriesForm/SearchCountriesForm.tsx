import React from 'react';
import Filters from './filters/Filters';
import './SearchCountriesForm.scss';

function SearchCountriesForm() {
  return (
    <div className="search-countries-form">
      <input placeholder="Search countries..." className="search-input" />
      <Filters />
    </div>
  );
}

export default SearchCountriesForm;
