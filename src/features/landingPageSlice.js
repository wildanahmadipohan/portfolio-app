import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import data from '../data/data.json';

const initialState = {
  landingPage: {},
  status: 'idle',
  error: null
}

export const fetchLandingPage = createAsyncThunk('landingPage/fetchLandingPage', () => {
  const response = data;
  return response.landingPage;
})

const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchLandingPage.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchLandingPage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // add fetch data to array state
        state.landingPage = {
          ...state.landingPage,
          ...action.payload
        }
      })
      .addCase(fetchLandingPage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export default landingPageSlice.reducer;
export const getLandingPage = (state) => state.landingPage;