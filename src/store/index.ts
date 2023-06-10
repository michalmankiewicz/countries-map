import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../api/countriesApiSlice';
import searchReducer from '../store/search/searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
