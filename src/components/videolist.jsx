import React from 'react';
import VideoItem from './videoitem';
import style from './videolist.module.css';

const VideoList = (props)=>{

  console.log("video list");
  console.log(props.column);

  return(
  <div className={style.video_container}>
    <ul className={style.videolist}>
      {props.videos.map(video =>(
        <VideoItem
        key = {video.id} 
        video = {video}
        column = {props.column}/>
      ))}
    </ul>
  </div>
  );
}

export default VideoList;