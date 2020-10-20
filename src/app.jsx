import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './app.module.css';
import Navbar from './components/navbar';
import Videolist from './components/videolist';


function App() {
  const [video_list, SetVideoList] = useState([]);
  const [windowSize, setWindowSize] = useState({
  width: undefined,
  height: undefined,
});
  const [columnNum, setColumn] = useState(2);
  // const windowsize = useWindowSize();

  useEffect(()=>{

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyATPuqwLlvrFN0OggLkL9yCi8ahQG-8spw", requestOptions)
      .then(response => response.json())
      .then(result => SetVideoList(result.items))
      .catch(error => console.log('error', error));

      window.addEventListener("resize", handleResize);
  }, []);

  const handleResize=()=> {
    // Set window width/height to state

    console.log("resizeing-innerwindow");
    console.log(window.innerWidth,window.innerHeight);
    console.log(window.screen.availWidth,window.screen.availHeight);

    console.log(window.screen.availWidth/window.innerWidth);
    if(window.innerWidth>(window.screen.availWidth/2))
      setColumn(2);
    else
      setColumn(1);

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  const haldleOnSearch=(serachText)=>{
    console.log(serachText);
    const videos_filtered = video_list.filter(video => video.snippet.title.includes(serachText));
    console.log(videos_filtered);
    SetVideoList(videos_filtered);
  }

  return (
    <div className={style.app}>
    <Navbar
    onClickSearch ={haldleOnSearch}/>
    <Videolist
    videos = {video_list}
    column = {columnNum}
    />
    </div>
  );
}

// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state

//       console.log("resizeing-innerwindow");
//       console.log(window.innerWidth,window.innerHeight);
//       // console.log("resizeing-outterwindow");
//       // console.log(screen.width,screen.height);

//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
    
//     // Add event listener
//     window.addEventListener("resize", handleResize);
    
//     // Call handler right away so state gets updated with initial window size
//     handleResize();
    
//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount

//   return windowSize;
// }

export default App;
