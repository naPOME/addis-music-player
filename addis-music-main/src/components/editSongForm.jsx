import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { closeEditSongForm } from '../redux/editSongSlice';
import { updateSong } from './firestoreConfig';

const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  font-family: "Roboto", sans-serif;
`;

const FormContainer = styled.div`
  color: #424769;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 80%;
  padding: 8px;
  margin-bottom: 16px;
`;

const FormButton = styled.button`
  background-color: #C5DFF8;
  color: #424769;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EditSongForm = ({ onClose, songId, initialData }) => {
  const formRef = useRef(null);
  const [songName, setSongName] = useState(initialData?.songName || '');
  const [artistName, setArtistName] = useState(initialData?.artistName || '');
  const [posterUrl, setPosterUrl] = useState(initialData?.posterUrl || '');
  const dispatch = useDispatch();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateSong(songId, { songName, artistName, posterUrl });
      console.log('Song updated successfully!');
    } catch (error) {
      console.error('Error updating song: ', error); 
    }
    dispatch(closeEditSongForm());
  };

  return (
    <FormOverlay>
      <FormContainer ref={formRef}>
        <form onSubmit={handleUpdate}>
          <FormLabel>Song Name:</FormLabel>
          <FormInput
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />

          <FormLabel>Artist Name:</FormLabel>
          <FormInput
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />

          <FormLabel>Poster URL:</FormLabel>
          <FormInput
            type="text"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />

          <FormButton type="submit">Update</FormButton>
        </form>
      </FormContainer>
    </FormOverlay>
  );
};

export default EditSongForm;
