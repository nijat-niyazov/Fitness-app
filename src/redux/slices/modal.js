import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, actions) => {
      console.log(actions);
      state.isOpened = true;
    },
    closeModal: state => {
      state.isOpened = false;
    },
  },
});

// selectors

export const isOpened = state => state.modalSlice.isOpened;

// actions
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
