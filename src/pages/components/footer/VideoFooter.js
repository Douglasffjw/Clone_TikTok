import React from 'react'
import "./videoFooter.css"
import MusicOffIcon from '@mui/icons-material/MusicOff';

function VideoFooter({name, description, music}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
       <h3>@{name}</h3>
       <p>{description}</p>
       <div className='videoFooter__music'>
       <MusicOffIcon className='videoFooter__icon'/>
       <div className='videoFooterMusic__txt'>
       <p>{music}</p>
       </div>
       </div>      
    </div>
    <img
     className="visualFooter__record"
     alt="Imagem de um vinil girando"
     src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
     />
    </div>
  )
}

export default VideoFooter