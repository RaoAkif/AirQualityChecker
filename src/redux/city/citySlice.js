import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'lahore',
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectedCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export default citySlice.reducer;
export const { selectedCity } = citySlice.actions;
