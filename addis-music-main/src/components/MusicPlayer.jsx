// src/components/MusicPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';


const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem;
  background-color: #C5DFF8;
  border-top: 1px solid #dcdcdc;
  margin-bottom:1.5rem;
  border-radius:8px;
`;

const SongDetails = styled.div`
  display: flex;
  align-items: center;
`;

const Poster = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 1rem;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SongName = styled.span`
  font-weight: bold;
  margin-bottom: 0.25rem;
  color:#424769;
`;

const ArtistName = styled.span`
  color: #424769;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #0A2647;
  margin-right: 1rem;
`;

const LikeButton = styled.button`
  background: none;
  border:none ;
  cursor: pointer;
  font-size: 1.5rem;
  color: #FF5677;
`;


const MusicPlayer = ({ posterSrc, songName, artistName, audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
   
    setIsPlaying(false);
  };

  const handlePrevious = () => {
  
    setIsPlaying(false);
  };

  const handleLike = () => {
 
    console.log('Liked the track!');
  };

  return (
    <PlayerContainer>
      <SongDetails>
        <Poster src={posterSrc} alt="Song Poster" />
        <SongInfo>
          <SongName>{songName}</SongName>
          <ArtistName>{artistName}</ArtistName>
        </SongInfo>
      </SongDetails>
      <Controls>
        <ControlButton onClick={handlePrevious}>
          <FontAwesomeIcon icon={faStepBackward} />
        </ControlButton>
        <ControlButton onClick={togglePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </ControlButton>
        <ControlButton onClick={handleNext}>
          <FontAwesomeIcon icon={faStepForward} />
        </ControlButton>
        <LikeButton onClick={handleLike}>
          <FontAwesomeIcon icon={faHeart} />
        </LikeButton>
      </Controls>
      <audio ref={audioRef} src={audioSrc} />
    </PlayerContainer>
  );
};

export default MusicPlayer;
