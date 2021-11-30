import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import classroomSlice from './classroomSlice';
import studyroomSlice from './studyroomSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    classrooms: classroomSlice,
    studyrooms: studyroomSlice,
  },
});

export default store;
