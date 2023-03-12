import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import data from '../data/data.json';

const initialState = {
  project: {},
  status: 'idle',
  error: null
}

export const fetchProjectDetailPage = createAsyncThunk('projectDetailPage/fetchProjectDetailPage', (slug) => {
  const response = data;
  const [project] = response.projects.filter((project) => project.slug === slug);
  return project;
}, [0])

const projectDetailPageSlice = createSlice({
  name: 'projectDetailPage',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchProjectDetailPage.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProjectDetailPage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // add fetch data to array state
        state.project = {
          ...action.payload
        };
      })
      .addCase(fetchProjectDetailPage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export default projectDetailPageSlice.reducer;
export const getProjectDetailPage = (state) => state.projectDetailPage;