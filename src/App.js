import React, { useEffect, useState } from 'react';
import './App.css';
import Video from "./pages/Video"
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite'


function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([])


  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnaoshot = await getDocs(videosCollection)
    const videosList = videosSnaoshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() => { /*executa de novo ser tiver atulizaçao loop*/
    getVideos();
  }, [])


  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className='app__videos'>

        { video.map((item) => {
          return (
            <Video
              description={item.description}
              likes={item.likes}
              messages={item.messages}
              music={item.music}
              name={item.name}
              shares={item.shares}
              url={item.url}
            />
          )
        })}

      </div>
    </div>
  );
}

export default App;
