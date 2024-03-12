
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEditSongFormOpen: false,
};

const editSongSlice = createSlice({
  name: 'editSong',
  initialState,
  reducers: {
    openEditSongForm: (state) => {
      state.isEditSongFormOpen = true;
    },
    closeEditSongForm: (state) => {
      state.isEditSongFormOpen = false;
    },
  },
});

export const { openEditSongForm, closeEditSongForm } = editSongSlice.actions;

export const selectEditSongFormStatus = (state) => state.editSong.isEditSongFormOpen;

export default editSongSlice.reducer;
