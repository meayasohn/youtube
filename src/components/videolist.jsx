import React from 'react';
import VideoItem from './videoitem';
import style from './videolist.module.css';

const VideoList = (props) => (

    <ul className={style.videolist}>
      {props.videos.map(video =>(
        <VideoItem
        key = {video.id} 
        video = {video}/>
      ))}
    </ul>
);

export default VideoList;