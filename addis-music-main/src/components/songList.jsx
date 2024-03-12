import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddSongFormStatus } from '../redux/addSongSlice';
import { collection, firestore, getDocs } from './firestoreConfig';
import SongCard from './SongCard';
import styled from '@emotion/styled';
import { selectEditSongFormStatus } from '../redux/editSongSlice';
import EditSongForm from './editSongForm'; 
import { updateSongAsync } from '../redux/songSlice'; 

const SongListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SongList = () => {
  const dispatch = useDispatch();
  const isEditSongFormOpen = useSelector(selectEditSongFormStatus);
  const isAddSongFormOpen = useSelector(selectAddSongFormStatus);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'song'));
        const songData = [];
        querySnapshot.forEach((doc) => {
          songData.push({ id: doc.id, ...doc.data() });
        });
        setSongs(songData);
      } catch (error) {
        console.error('Error fetching songs: ', error);
      }
    };

    fetchSongs();
  }, []);

  
  const handleUpdateSong = async (songId, newData) => {
    try {
      
      await dispatch(updateSongAsync({ songId, newData }));
      console.log("Song updated successfully!");
    } catch (error) {
      console.error('Error updating song:', error);

    }
  };

  
  const handleEditSong = (id) => {
    console.log(`Editing song with ID: ${id}`);
  };

  return (
    <div>
      {isAddSongFormOpen && <p>Add a song</p>}
      {songs.length === 0 && !isAddSongFormOpen && <p>No songs available</p>}
      <SongListContainer>
        {songs.map((song) => (
          <SongCard
            key={song.id}
            id={song.id}
            posterUrl={song.posterUrl}
            songName={song.songName}
            artistName={song.artistName}
            onUpdate={(newData) => handleUpdateSong(song.id, newData)} 
            onEdit={() => handleEditSong(song.id)}
            onDelete={() => handleDeleteSong(song.id)}
          />
        ))}
      </SongListContainer>
      {isEditSongFormOpen && <EditSongForm />}
    </div>
  );
};

export default SongList;
