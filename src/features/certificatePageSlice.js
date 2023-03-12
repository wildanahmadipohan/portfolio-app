import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import data from '../data/data.json';

const initialState = {
  certificates: [],
  status: 'idle',
  error: null
}

export const fetchCertificatePage = createAsyncThunk('certificatePage/fetchCertificatePage', () => {
  const response = data;
  return response.certificates;
})

const certificatePageSlice = createSlice({
  name: 'certificatePage',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCertificatePage.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCertificatePage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // add fetch data to array state
        state.certificates = action.payload;
      })
      .addCase(fetchCertificatePage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export default certificatePageSlice.reducer;
export const getCertificatePage = (state) => state.certificatePage;