import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import vdo from './assets/big_buck_bunny_720p_5mb.mp4'
import './video.css'
import { faCirclePlay,faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Video = () => {
  let [icon,setIcon] = useState(faCirclePlay)

  function playvdo(){
    let V=document.getElementById('video-animate')
    if(
      V.paused==true
    ){
      // icon=faPauseCircle
      setIcon(faPauseCircle)
      V.play()
    }
    else{
      setIcon(faCirclePlay)
      // icon=faCirclePlay
      V.pause()
    }
    
    }
    
  return (
    <div className='common-pad video-wrap'>
        <div className='container'>
            <h2>Watch Video</h2>
            <div className='video-holder'>
                <video id='video-animate'>
                <source src={vdo} type="video/mp4"/>
                
                </video>
                <div className='play-icon'>
                <FontAwesomeIcon icon={icon} onClick={playvdo}/>
                </div>
            </div> 
        </div>
    </div>
    
  )
  
}


export default Video