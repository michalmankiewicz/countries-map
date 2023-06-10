import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type SearchType = {
  searchValue: string;
  filter: 'Country' | 'Capital';
};

const initialSearchState: SearchType = {
  searchValue: '',
  filter: 'Country',
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
  },
});

export const { setFilter, setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
