import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  cities: [],
  error: '',
};

// Generates pending, fulfilled and rejected action types
export const fetchCities = createAsyncThunk('city/fetchCities', () => axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.data));

const citySlice = createSlice({
  name: 'city',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.loading = false;
      state.city = action.payload;
      state.error = '';
    });
    builder.addCase(fetchCities.rejected, (state, action) => {
      state.loading = false;
      state.city = [];
      state.error = action.error.message;
    });
  },
});

export default citySlice.reducer;
