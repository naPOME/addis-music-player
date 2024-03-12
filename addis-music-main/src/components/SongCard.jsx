import React from 'react';
import styled from '@emotion/styled';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { openEditSongForm } from '../redux/editSongSlice';
import { deleteSongAsync } from '../redux/songSlice'; // Import the deleteSongAsync action

const CardContainer = styled.div`
  width: 170px;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-family: "Roboto", sans-serif;
  transition: transform 0.3s ease-in-out;
  color: #424769;
  &:hover {
    transform: scale(1.005);
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 2px solid #ecf0f1;
  border-radius: 3px;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const SongName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const ArtistName = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const EditIcon = styled.div`
  float: right;
  margin-left: 5px;
  cursor: pointer;
  color: blue;
  font-size:12px;
`;

const DeleteIcon = styled.span`
  color: red; 
  cursor: pointer;
  font-size:12px;
`;

const SongCard = ({ id, posterUrl, songName, artistName, onEdit }) => {
  const dispatch = useDispatch();

  const handleEditIconClick = () => {

    onEdit(id);
    dispatch(openEditSongForm());
  };

  const handleDeleteIconClick = () => {
    
    dispatch(deleteSongAsync(id));
  };

  const handleImageError = () => {
    console.error(`Failed to load image: ${posterUrl}`);
  };

  return (
    <CardContainer>
      <PosterImage
        src={posterUrl}
        alt={`${songName} Poster`}
        onError={handleImageError}
      />
      <CardContent>
        <SongName>{songName}</SongName>
        <ArtistName>{artistName}</ArtistName>
        <EditIcon onClick={handleEditIconClick}>
          <FontAwesomeIcon icon={faEdit} />
        </EditIcon>
        <DeleteIcon onClick={handleDeleteIconClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </DeleteIcon>
      </CardContent>
    </CardContainer>
  );
};

export default SongCard;
