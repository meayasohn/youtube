import React from 'react';
import style from './video_detail.module.css';

const VideoDetail = ({video, video: {snippet}}) => {

  console.log("Video Selected");
  console.log(video);

  const youtubelink = `https://www.youtube.com/embed/${video.id}`;

  return (  
    <div className={style.container}>
        <iframe
          className={style.video} 
          id="ytplayer" 
          type="text/html" 
          width="100%"
          height="500px"
          src={youtubelink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      <div className={style.metadata}>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre>{snippet.description}</pre>
      </div>
    </div>);
};

export default VideoDetail;