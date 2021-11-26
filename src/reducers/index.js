import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import classroomSlice from './classroomSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    classrooms: classroomSlice,
  },
});

export default store;
