import React, { memo } from 'react';
import style from './video_item.module.css';

const VideoItem = memo(({video, video: {snippet},display, onVideoClick}) => {

    const displayType = display === 'list' ? style.list : style.grid;
  
    const handleVideoClick = () =>{
      onVideoClick(video);
    }
    
    return (
      <li 
        className={`${style.container} ${displayType}`} 
        onClick={handleVideoClick}
      >
        <div className={style.video}>
          <img 
            className={style.thumbnail} 
            src={snippet.thumbnails.medium.url} 
            alt=""
          />
          <div className={style.metadata}>
            <p className={style.title}>Title : {snippet.title}</p>
            <p className={style.channel}>Channel from : {snippet.channelTitle}</p>
          </div>
        </div>  
      </li>
    );
});

export default VideoItem;