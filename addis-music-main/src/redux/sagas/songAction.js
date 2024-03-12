
export const FETCH_SONGS = 'FETCH_SONGS';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';

export const fetchSongs = () => ({
  type: FETCH_SONGS,
});

export const fetchSongsSuccess = (songs) => ({
  type: FETCH_SONGS_SUCCESS,
  payload: songs,
});

export const fetchSongsFailure = (error) => ({
  type: FETCH_SONGS_FAILURE,
  payload: error,
});
