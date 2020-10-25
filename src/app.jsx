import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './app.module.css';
import Navbar from './components/navbar/navbar';
import Videolist from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import { useCallback } from 'react';

function App({youtube}) {
  const [video_list, SetVideoList] = useState([]);
  const [smallView, setSmallView] = useState(null);
  const [selectVideo, setVideoSelect] = useState(null);

  // Data 
  // ///////////////////////////////
  // from Outside App

    // Control
  // ///////////////////////////////
  const search = useCallback(query => {
      setVideoSelect(null);
      //if search is taking time, show loading images;
  
      youtube
        .search(query) //
        .then(videos => SetVideoList(videos));
    }, [youtube]);

  const handleVideoClick = (video)=>{
      setVideoSelect(video);
  }

  // View
  // ///////////////////////////////
  const handleResize=()=> {
    if(window.innerWidth>(window.screen.availWidth/2))
      setSmallView(null);
    else
      setSmallView(window.innerWidth);
  }

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => SetVideoList(videos));

      window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={style.app}>
      <Navbar
      onClickSearch ={search}/>
      <div className={style.container}>
        {
          selectVideo && 
          <div className={style.detail}>
          <VideoDetail video = {selectVideo}/>
          </div>
        }
        <div className={style.list}>
          <Videolist
          videos = {video_list}
          display = {selectVideo || smallView? 'list':'grid'}
          onVideoClick = {handleVideoClick}
          />
        </div>
      </div>
    </div>
  );
}


export default App;
