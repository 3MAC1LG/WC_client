import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    modal: modalSlice,
  },
});

export default store;
