import { Country } from '../types/countries';

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
