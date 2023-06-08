import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchedCountry } from '../types';

export const countriesApi = createApi({
  reducerPath: 'countries',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  tagTypes: ['Countries'],
  endpoints: (builder) => ({
    getAllCountries: builder.query<FetchedCountry[], string>({
      query: () => `/all`,
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesApi;
