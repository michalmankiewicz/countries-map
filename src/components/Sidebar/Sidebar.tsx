import React from 'react';
import SearchCountriesForm from '../SearchCountriesForm/SearchCountriesForm';
import CountriesList from '../CountriesList/CountryList';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Logo</h1>
      <SearchCountriesForm />
      <CountriesList />
    </div>
  );
}

export default Sidebar;
