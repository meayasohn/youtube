import React from 'react';

const VideoItem = (props) => {

  const video = props.video;
  // console.log(video);

  return (
    <div>
      <li className="video-item">
        <img src={video.snippet.thumbnails.default.url} alt="" className="video-item-thumnail"/>
        <span className="video-item-title">{video.snippet.title}</span>
      </li>
    </div>
  );
}

export default VideoItem;