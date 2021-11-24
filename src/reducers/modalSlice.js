import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalShow: false,
  },
  reducers: {
    showModal: (state, action) => {
      state.modalShow = !state.modalShow;
    },
  },
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
