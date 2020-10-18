import React from 'react';
import style from './videoitem.module.css';

const VideoItem = ({video: {snippet}}) => (

      <li className={style.video}>
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

export default VideoItem;