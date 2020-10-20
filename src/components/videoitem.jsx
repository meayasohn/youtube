import React from 'react';
import style from './videoitem.module.css';

const VideoItem = ({video: {snippet},column}) => {

  const columSize = column==2? "50%" : "100%";
  const columnStyle = {width: {columSize}};
  
    return (
      <li className={style.video} style={columnStyle}>
        <img 
          className={style.thumbnail} 
          src={snippet.thumbnails.medium.url} 
          alt=""/>
        <div>
        <p className={style.title}>Title : {snippet.title}</p>
        <p className={style.channel}>Channel from : {snippet.channelTitle}</p>
        </div>
      </li>
    );
}

export default VideoItem;