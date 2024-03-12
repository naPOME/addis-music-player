// src/components/Sidebar.js
import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome, faHeart, faList } from '@fortawesome/free-solid-svg-icons';


const SidebarContainer = styled.div`
  border-radius:10px;
 margin-right:5px;
  width: 200px;
  background-color: #EEF5FF; /* A shade of blue */
  color: #424769; /* Light text color */
  margin-top:0.1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y:hidden;
  box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
  font-family: "Roboto", sans-serif;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.9rem 1rem; /* Increased padding for a cleaner look */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #34495e; /* Darker shade on hover */
  }
`;

const SidebarIcon = styled.div`
  margin-right: 0.8rem;
`;

// Component
const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <SidebarIcon>
          <FontAwesomeIcon icon={faBook} />
        </SidebarIcon>
        Library
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <FontAwesomeIcon icon={faHome} />
        </SidebarIcon>
        Home
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <FontAwesomeIcon icon={faHeart} />
        </SidebarIcon>
        Liked
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <FontAwesomeIcon icon={faList} />
        </SidebarIcon>
        My Playlist
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
