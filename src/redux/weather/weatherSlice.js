import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherAction = createAsyncThunk(
  'weather/fetch',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=413d5348f03e80ca4f01ef2f64f1e981`,
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  },
);

const initialState = {};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
