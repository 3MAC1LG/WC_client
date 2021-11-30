import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register_studyroom = createAsyncThunk(
  'studyroom/register',
  async ({ data, id }) => {
    try {
      const res = await axios.post(`/api/studyrooms/${id}`, data, {
        withCredentials: true,
      });
      return res.data;
    } catch (e) {
      console.error(e);
    }
  },
);

export const join_studyroom = createAsyncThunk('studyroom/join', async (id) => {
  try {
    const res = await axios.post(`/api/studyrooms/${id}/join`, null, {
      withCredentials: true,
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
});

const initialState = {
  studyroomFormPagePrev: null,
  studyroomFormPagePrevError: null,
  join: null,
  joinError: null,
  register: null,
  registerError: null,
};

const studyroomSlice = createSlice({
  name: 'studyroom',
  initialState,
  reducers: {
    reset_studyroomFormPagePrev: (state, action) => {
      state.studyroomFormPagePrev = null;
      state.studyroomFormPagePrevError = null;
      state.join = null;
      state.joinError = null;
      state.register = null;
      state.registerError = null;
    },
    add_studyroomFormPagePrev: (state, action) => {
      state.studyroomFormPagePrev = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register_studyroom.fulfilled, (state, action) => {
      state.register = action.payload;
    });
    builder.addCase(register_studyroom.rejected, (state, action) => {
      state.registerError = action.error;
    });
    builder.addCase(join_studyroom.fulfilled, (state, action) => {
      state.join = action.payload;
    });
    builder.addCase(join_studyroom.rejected, (state, action) => {
      state.joinError = action.error;
    });
  },
});

export const { reset_studyroomFormPagePrev, add_studyroomFormPagePrev } =
  studyroomSlice.actions;
export default studyroomSlice.reducer;
