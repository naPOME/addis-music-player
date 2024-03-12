import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addSong, updateSong, deleteSong } from '../components/firestoreConfig';

// Async thunk action to add a song
export const addSongAsync = createAsyncThunk(
  'songs/addSongAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const songId = await addSong(payload.songData, payload.musicFile);
      return songId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const updateSongAsync = createAsyncThunk(
  'songs/updateSongAsync',
  async (payload, { rejectWithValue }) => {
    try {
      await updateSong(payload.songId, payload.newData);
      return payload;
    } catch (error) {
      console.log("error here");
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSongAsync = createAsyncThunk(
  'songs/deleteSongAsync',
  async (songId, { rejectWithValue }) => {
    try {
      await deleteSong(songId);
      return songId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const songSlice = createSlice({
  name: 'songs',
  initialState: {
    
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSongAsync.fulfilled, (state, action) => {
      })
      .addCase(updateSongAsync.fulfilled, (state, action) => {
      })
      .addCase(deleteSongAsync.fulfilled, (state, action) => {
        
      });
  },
});

export default songSlice.reducer;
