import { useState } from 'react';
import CountryItem from './CountryItem/CountryItem';
import './CountryList.scss';
import { useGetAllCountriesQuery } from '../../api/countriesApiSlice';
import { useAppDispatch, useAppSelector } from '../../types/redux';
import { filterBySearch, mapFetchedCountries } from '../../utils';
import { Spinner } from '@phosphor-icons/react';
import { Country } from '../../types/countries';
import { setMarker } from '../../store/search/searchSlice';

function CountryList(props: { onCloseMobileSidebar: () => void }) {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError, isSuccess } = useGetAllCountriesQuery('');
  const { searchValue, filter } = useAppSelector((state) => state.search);

  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (coords: Country['coords'], name: Country['name']) => {
    dispatch(setMarker(coords));
    setActiveItem(name);
    props.onCloseMobileSidebar();
  };

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
              imgUrl={c.imgUrl}
              capital={c.capital}
              coords={c.coords}
              onClick={handleItemClick}
              activeCountry={activeItem}
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
