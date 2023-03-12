import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import data from '../data/data.json';

const initialState = {
  projects: [],
  status: 'idle',
  error: null
}

export const fetchProjectPage = createAsyncThunk('projectPage/fetchProjectPage', () => {
  const response = data;
  return response.projects;
})

const projectPageSlice = createSlice({
  name: 'projectPage',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchProjectPage.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProjectPage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // add fetch data to array state
        state.projects = action.payload;
      })
      .addCase(fetchProjectPage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export default projectPageSlice.reducer;
export const getProjectPage = (state) => state.projectPage;