import { configureStore } from '@reduxjs/toolkit';
import addSongReducer from './addSongSlice';
import editSongReducer from './editSongSlice';


export const store = configureStore({
  reducer: {
    addSong: addSongReducer,
    editSong: editSongReducer,
  },
});

