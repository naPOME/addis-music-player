
import { createSlice } from '@reduxjs/toolkit';

const addSongSlice = createSlice({
  name: 'addSong',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openAddSongForm: (state) => {
      state.isOpen = true;
    },
    closeAddSongForm: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAddSongForm, closeAddSongForm } = addSongSlice.actions;
export const selectAddSongFormStatus = (state) => state.addSong.isOpen;

export default addSongSlice.reducer;
