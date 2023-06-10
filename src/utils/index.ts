import { Country, FetchedCountry } from '../types/countries';

export const mapFetchedCountries = (
  fetchedCountries: FetchedCountry[] | undefined
): Country[] | undefined => {
  if (!fetchedCountries) return;

  return fetchedCountries?.map((c) => {
    return {
      name: c.name.common,
      currency: c.currencies ? Object.values(c.currencies).map((cur) => cur.name) : ['Unknown'],
      population: c.population,
      coordinates: c.capitalInfo.latlng,
      imgUrl: c.flags.png,
      capital: c.capital ? c.capital : ['Unknown'],
    };
  });
};

export const filterBySearch = (
  countries: Country[] | undefined,
  searchValue: string,
  filter: 'Country' | 'Capital'
): Country[] | undefined => {
  if (!countries) return;

  const pattern = new RegExp(`\\b(?:${searchValue}\\w*)\\b`, 'i');

  if (filter === 'Country') return countries?.filter((c) => pattern.test(c.name));
  else return countries?.filter((c) => c.capital.some((cap) => pattern.test(cap)));
};
