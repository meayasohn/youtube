import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './app.module.css';
import Navbar from './components/navbar';
import Videolist from './components/videolist';


function App({youtube}) {
  const [video_list, SetVideoList] = useState([]);
  const [windowSize, setWindowSize] = useState({
  width: undefined,
  height: undefined,
});
  const [columnNum, setColumn] = useState(2);

  const search = query => {
    youtube
      .search(query) //
      .then(videos => SetVideoList(videos));
  };
  
  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => SetVideoList(videos));

      window.addEventListener("resize", handleResize);
  }, []);

  const handleResize=()=> {
    if(window.innerWidth>(window.screen.availWidth/2))
      setColumn(2);
    else
      setColumn(1);

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  return (
    <div className={style.app}>
    
      <Navbar
      onClickSearch ={search}/>
      <Videolist
      videos = {video_list}
      column = {columnNum}
      />
    </div>
  );
}


export default App;
