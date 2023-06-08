import React from 'react';
import CountryItem from './CountryItem/CountryItem';
import './CountryList.scss';

function CountryList() {
  return (
    <div className="country-list">
      <h2>Countries</h2>
      <ul>
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
      </ul>
    </div>
  );
}

export default CountryList;
