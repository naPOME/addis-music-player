// src/components/AddSongCard.js
import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { closeAddSongForm } from '../redux/addSongSlice';

// Styled components
const CardContainer = styled.div`
  width: 170px;
  border-radius: 12px;
  overflow: hidden;
  margin: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  height:230px;
  &:hover {
    transform: scale(1.005);
  }
`;

const AddIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C5DFF8;
  color: #424769;
  height: 100%;
`;

const AddIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const AddSong = ({onAddSongClick}) => {
  const handleClick = ()=>{
    onAddSongClick();
  }
  return (
    <CardContainer>
      <AddIconContainer onClick={handleClick}>
        <AddIcon icon={faPlus} />
      </AddIconContainer>
      
    </CardContainer>
  );
};

export default AddSong;
