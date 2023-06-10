import React from 'react';
import CountryItem from './CountryItem/CountryItem';
import './CountryList.scss';
import { useGetAllCountriesQuery } from '../../api/countriesApiSlice';
import { useAppSelector } from '../../types/redux';
import { filterBySearch, mapFetchedCountries } from '../../utils';
import { Spinner } from '@phosphor-icons/react';

function CountryList() {
  const { data, isLoading, isError, isSuccess } = useGetAllCountriesQuery('');

  const { searchValue, filter } = useAppSelector((state) => state.search);

  const countries = mapFetchedCountries(data);
  const filteredCountries = filterBySearch(countries, searchValue, filter);

  return (
    <div className="country-list">
      <h2>Countries {filteredCountries ? `(${filteredCountries.length})` : ''} </h2>

      <ul>
        {isLoading && <Spinner className="spinner" />}
        {isSuccess &&
          filteredCountries?.length !== 0 &&
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
        {isSuccess && filteredCountries?.length === 0 && (
          <p className="country-list__message">There is no results for this search.</p>
        )}
        {isError && <p className="country-list__message">Something went wrong!</p>}
      </ul>
    </div>
  );
}

export default CountryList;
