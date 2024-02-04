
import {configureStore, getDefaultMiddleware, isImmutableDefault} from '@reduxjs/toolkit';
import appReducer from './App/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});