import { configureStore } from "@reduxjs/toolkit";

import counterReducer from 'features/counterSlice';
import landingPageReducer from 'features/landingPageSlice';
import projectPageReducer from 'features/projectPageSlice';
import certificatePageReducer from 'features/certificatePageSlice';
import projectDetailPageReducer from 'features/projectDetailPageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    landingPage: landingPageReducer,
    projectPage: projectPageReducer,
    certificatePage: certificatePageReducer,
    projectDetailPage: projectDetailPageReducer
  }
})