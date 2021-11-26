import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register_classroom = createAsyncThunk(
  'classroom/register',
  async (id) => {
    try {
      const res = await axios.post(`/api/classrooms/${id}/register`, null, {
        withCredentials: true,
      });
      return res.data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const cancle_classroom = createAsyncThunk(
  'classroom/cancle',
  async (id) => {
    try {
      const res = await axios.post(`/api/classrooms/${id}/cancle`, null, {
        withCredentials: true,
      });
      return res.data;
    } catch (e) {
      console.error(e);
    }
  },
);

const initialState = {
  register: null,
  registerError: null,
  cancle: null,
  cancleError: null,
};

const classroomSlice = createSlice({
  name: 'classroom',
  initialState,
  reducers: {
    reset_classroom: (state, action) => {
      state.register = null;
      state.registerError = null;
      state.cancle = null;
      state.cancleError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register_classroom.fulfilled, (state, action) => {
      state.register = action.payload;
    });
    builder.addCase(register_classroom.rejected, (state, action) => {
      state.registerError = action.error;
    });
    builder.addCase(cancle_classroom.fulfilled, (state, action) => {
      state.cancle = action.payload;
    });
    builder.addCase(cancle_classroom.rejected, (state, action) => {
      state.cancleError = action.error;
    });
  },
});

export const { reset_classroom } = classroomSlice.actions;
export default classroomSlice.reducer;
