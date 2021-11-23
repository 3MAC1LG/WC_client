import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const get_logout = createAsyncThunk('user/LOGOUT', async () => {
  try {
    const res = await axios.post(
      'http://localhost:4000/api/users/logout',
      null,
      { withCredentials: true },
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

const initialState = {
  logout: null,
  logoutError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state, action) => {
      state.logout = null;
      state.logoutError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_logout.fulfilled, (state, action) => {
      state.logout = action.payload;
    });
    builder.addCase(get_logout.rejected, (state, action) => {
      state.logoutError = action.error;
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
