import React from 'react';

const VideoItem = (props) => {

  // const item = props.item;
  console.log(props);

  return (
    <div>
      <li className="video-item">
        <img src="favicon.ico" alt="" className="item-video-thumnail"/>
        <span className="item-title">{props.video.snippet.title}</span>
      </li>
    </div>
  );
}

export default VideoItem;