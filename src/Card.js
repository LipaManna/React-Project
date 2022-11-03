import React from 'react'
import './securecard.css'

const Card = (props) => {
  return (
    <div className='custom-card'>
        <a href='#'>
        <div className='img-wrap'>
            <img src={props.img}/>
        </div>
        <div className='card-title'>
            <h3>{props.title}</h3>
        </div>
    </a>
    </div>
  )
}

export default Card