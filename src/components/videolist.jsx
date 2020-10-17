import React from 'react';
import VideoItem from './videoitem';

const VideoList = (props) => (

    <ul className="video-list">
      {props.videos.map(video =>(
        <VideoItem
        key = {video.id} 
        video = {video}/>
      ))}
    </ul>
);

export default VideoList;