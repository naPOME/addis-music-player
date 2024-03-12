// src/components/Navbar.js
import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faMusic} from '@fortawesome/free-solid-svg-icons'



const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #EEF5FF;
  color: #424769;
  border-radius:5px;
  
  box-shadow: 2px 1px 4px 0 rgba(0,0,0,.2);
  margin-bottom:5px;
`;

const Logo = styled.div`
padding-left:20px;
  font-size: 1.5rem;
  
  font-family: "Rubik Burned", system-ui;
  font-weight: 400;
  font-style: normal;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border: none; /* Remove border */
  border-bottom: 1px solid #424769; 
  outline: none; /* Remove default input outline */
  width: 50%;
  font-size: 1rem; /* Adjust font size */
  color: #333; /* Text color */
  background-color: transparent; /* Transparent background */
  
  ::placeholder {
    color: #424769; /* Placeholder text color */
  }
  font-family: "Roboto", sans-serif;
`;

const ProfileLabel = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right:1.5rem;
  font-family: "Roboto", sans-serif;
`;


const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>ADDIS<FontAwesomeIcon icon={faMusic} style={{ marginRight: '0.5rem',color:'blue' }}/></Logo>
      <SearchBar type="text" placeholder="Search..." />
      <ProfileLabel>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }} />
        Name
      </ProfileLabel>
    </NavbarContainer>
  );
};

export default Navbar;
