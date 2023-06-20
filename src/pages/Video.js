import React, { useRef, useState } from 'react' /*useState pra pausar quando clicar*/
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import "./video.css"


function Video({likes, messages, shares, name, description, music, url}) {
    const videoRef = useRef(null) /*faz com q o video pause sem precisar aparecer o play*/
    const [play, setPlay] = useState(false)/*pra n icializar ja tocando*/
    function handdleStart() {

        /*CONF DE PAUSAR E DA PLAY*/
        if (play) {
            videoRef.current.pause() /*current = atual momento ele de play*/
            setPlay(false)
        }
        else {
            videoRef.current.play()
            setPlay(true)
        }
    }
    return ( /*td no retun é visivel*/
        <div className='video'>

            <video
                className='video__player'
                ref={videoRef}
                onClick={handdleStart}
                loop /*q o video n pare*/
                src={url}
            >

            </video>
            <VideoSidebar
            likes = { likes} 
            messages = {messages}  
            shares = {shares}
            />
            <VideoFooter
            name={name}
            description={description}
            music={music}
            />
        </div>
    )
}

export default Video