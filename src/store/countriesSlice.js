import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  isLoading: true,
  search: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountries(state, action) {
      state.countries = action.payload; // take data and put it into countries array
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    search(state, action) {
      state.state = action.payload;
    },
  },
  extraReducers() {},
});

// actions to be used in components later
export const { getCountries, isLoading, search } = countriesSlice.actions;

// connect to store.js
export default countriesSlice.reducer;
