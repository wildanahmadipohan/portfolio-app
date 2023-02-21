import { configureStore } from "@reduxjs/toolkit";

import counterReducer from 'features/counterSlice';
import landingPageReducer from 'features/landingPageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    landingPage: landingPageReducer,
  }
})