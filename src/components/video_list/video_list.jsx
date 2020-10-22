import React from 'react';
import VideoItem from '../video_item/video_item';
import style from './video_list.module.css';

const VideoList = ({videos, display, onVideoClick})=>{
  
  return(
    <ul className={style.videolist}>
      {videos.map(video =>(
        <VideoItem
        key = {video.id} 
        video = {video}
        display = {display}
        onVideoClick = {onVideoClick}/>
      ))}
    </ul>
  );
}

export default VideoList;