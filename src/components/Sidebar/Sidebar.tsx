import React from 'react';
import SearchCountriesForm from '../SearchCountriesForm/SearchCountriesForm';
import CountriesList from '../CountriesList/CountryList';
import './Sidebar.scss';
import { useGetAllCountriesQuery } from '../../api/countriesApiSlice';

function Sidebar() {
  return (
    <div className="sidebar">
      <SearchCountriesForm />
      <CountriesList />
    </div>
  );
}

export default Sidebar;
