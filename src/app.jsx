import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Videolist from './components/videolist';


function App() {
  const [video_list, SetVideoList] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyATPuqwLlvrFN0OggLkL9yCi8ahQG-8spw", requestOptions)
      .then(response => response.json())
      .then(result => SetVideoList(result.items))
      .catch(error => console.log('error', error));
  }, []);


  return (
    <>
    <Navbar/>
    <Videolist
    videos = {video_list}
    />
    </>
  );
}

export default App;
