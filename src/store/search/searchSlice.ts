import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type SearchType = {
  searchValue: string;
  filter: 'Country' | 'Capital';
  markerCoords:
    | {
        lat: number;
        lng: number;
      }
    | undefined;
};

const initialSearchState: SearchType = {
  searchValue: '',
  filter: 'Country',
  markerCoords: undefined,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setFilter: (state, action: PayloadAction<'Country' | 'Capital'>) => {
      state.filter = action.payload;
    },
    setMarker: (state, action: PayloadAction<SearchType['markerCoords']>) => {
      state.markerCoords = action.payload;
    },
  },
});

export const { setFilter, setSearchValue, setMarker } = searchSlice.actions;
export default searchSlice.reducer;
