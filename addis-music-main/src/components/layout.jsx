// src/components/Layout.js
import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { openAddSongForm, closeAddSongForm, selectAddSongFormStatus } from '../redux/addSongSlice';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SongCard from './SongCard';
import AddSong from './AddSong';
import AddSongForm from './AddSongForm'; 
import MusicPlayer from './MusicPlayer';
import SongList from './songList'



const LayoutContainer = styled.div`
  display: flex;
  
 height:88vh;
 overflow:hidden;
`;

const MainContent = styled.div`
  flex: 1; /* Take up remaining space */
  padding: 1rem;
  background-color: #EEF5FF; /* Set background color for the main content area */
  display: flex;
  flex-direction: column; /* Stack children vertically */
  overflow: hidden; /* Hide any overflowing content */
  
  border-radius:10px;
  height:100%;
`;

const MusicCardContainer = styled.div`
  display: flex;
  
`;

const BottomContainer = styled.div`
  margin-top: auto; /* Push to the bottom */
`;

const Layout = () => {
  const isAddSongFormOpen = useSelector(selectAddSongFormStatus);
  const dispatch = useDispatch();

  const handleAddSongClick = () => {
    dispatch(openAddSongForm());
  };

  const handleAddSongFormClose = () => {
    dispatch(closeAddSongForm());
  };
  

  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <MusicCardContainer>
     
          <SongList/>
          <AddSong onAddSongClick={handleAddSongClick} />
        </MusicCardContainer>
        {isAddSongFormOpen && <AddSongForm onClose={handleAddSongFormClose} />}
        
        <BottomContainer>
          <MusicPlayer
            posterSrc="https://4.bp.blogspot.com/-YDwlftTLdVY/U33I8U-d_6I/AAAAAAAACpU/N2InJM-QvIo/w1200-h630-p-k-no-nu/Aster+Aweke+-+%5B1991%5D+-+Kabu.jpeg"
            songName={"Kabu"}
            artistName={"Aster Aweke"}
          />
        </BottomContainer>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
