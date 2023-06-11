import React, { useState } from 'react';
import SearchCountriesForm from '../SearchCountriesForm/SearchCountriesForm';
import CountriesList from '../CountriesList/CountryList';
import './Sidebar.scss';
import { useGetAllCountriesQuery } from '../../api/countriesApiSlice';
import { CaretRight } from '@phosphor-icons/react';

function Sidebar() {
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsMobileSidebarVisible(!isMobileSidebarVisible);
  };

  return (
    <>
      <div className={`sidebar ${isMobileSidebarVisible ? '' : 'sidebar__mobile--closed'}`}>
        <SearchCountriesForm />
        <CountriesList />
      </div>
      <button
        className={`mobile-button ${
          isMobileSidebarVisible ? 'mobile-button--close' : 'mobile-button-open'
        }`}
        onClick={handleToggleSidebar}
      >
        <CaretRight size={32} />
      </button>
    </>
  );
}

export default Sidebar;
