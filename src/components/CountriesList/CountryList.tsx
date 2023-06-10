import React from 'react';
import CountryItem from './CountryItem/CountryItem';
import './CountryList.scss';
import { useGetAllCountriesQuery } from '../../api/countriesApiSlice';
import { useAppSelector } from '../../types/redux';
import { filterBySearch } from '../../utils';

function CountryList() {
  const { data, isLoading, isError, isSuccess } = useGetAllCountriesQuery('');

  const { searchValue, filter } = useAppSelector((state) => state.search);

  const countries = data?.map((c) => {
    if (c.currencies && Object.entries(c.currencies).length > 1) console.log(c.name, c.currencies);

    // if (c.capital && c.capital.length > 1) console.log(c.name, c.capital);

    return {
      name: c.name.common,
      currency: c.currencies ? Object.values(c.currencies).map((cur) => cur.name) : ['Unknown'],
      population: c.population,
      coordinates: c.capitalInfo.latlng,
      imgUrl: c.flags.png,
      capital: c.capital ? c.capital : ['Unknown'],
    };
  });

  const filteredCountries = filterBySearch(countries, searchValue, filter);

  return (
    <div className="country-list">
      <h2>Countries ({countries?.length}) </h2>
      <ul>
        {isSuccess &&
          filteredCountries?.map((c) => (
            <CountryItem
              key={c.name}
              name={c.name}
              population={c.population}
              currency={c.currency}
              coordinates={c.coordinates}
              imgUrl={c.imgUrl}
              capital={c.capital}
            />
          ))}
      </ul>
    </div>
  );
}

export default CountryList;
