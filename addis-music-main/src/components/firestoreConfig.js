import { initializeApp } from "firebase/app";
import { doc, updateDoc, getFirestore, collection, addDoc, getDocs,getDoc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadString, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator

const firebaseConfig = {
  apiKey: "AIzaSyCa3t-4sZVogJxvoy4Zj_XnQE2TaoufiEo",
  authDomain: "addismusic-a99fa.firebaseapp.com",
  databaseURL: "https://addismusic-a99fa-default-rtdb.firebaseio.com",
  projectId: "addismusic-a99fa",
  storageBucket: "addismusic-a99fa.appspot.com",
  messagingSenderId: "1032020280200",
  appId: "1:1032020280200:web:682739e1c0339ebc86b03d",
  measurementId: "G-6QMJTG5ZKZ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

const addSong = async (songData, musicFile) => {
  try {
    const musicRef = ref(storage, `music/${musicFile.name}`);
    await uploadString(musicRef, musicFile);
    const songCollection = collection(firestore, 'song');
    
    
    const songId = uuidv4();

    
    const docRef = await addDoc(songCollection, {
      songId: songId, 
      songName: songData.songName,
      artistName: songData.artistName,
      posterUrl: songData.posterUrl,
      musicFileUrl: `gs://${musicRef.bucket}/${musicFile.name}`
    });

    console.log("Song added successfully with ID: ", songId);
    return songId; 
  } catch (error) {
    console.error("Error adding song: ", error);
    throw error;
  }
};

const updateSong = async (songId, newData) => {
  console.log("  Hello");
  try {
    if (!songId) {
      throw new Error('Invalid songId: SongId is missing or undefined.');
    }
    const songRef = doc(firestore, 'song', songId);
    const songDoc = await getDoc(songRef);

    if (songDoc.exists()) {
      await updateDoc(songRef, newData);
      console.log('Song updated successfully!');
    } else {
      throw new Error('Song not found');
    }
  } catch (error) {
    console.error('Error updating song: ', error);
    throw error;
  }
};



const deleteSong = async (songId) => {
  try {
    const songRef = doc(firestore, 'song', songId);
    await deleteDoc(songRef);
    console.log('Song deleted successfully!');
  } catch (error) {
    console.error('Error deleting song: ', error);
    throw error;
  }
};

export { addSong, firestore, getDocs, collection, updateSong, deleteSong };
