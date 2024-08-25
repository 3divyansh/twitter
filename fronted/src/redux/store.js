import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware :  getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {thunk
 }
    })
});

export default store;
