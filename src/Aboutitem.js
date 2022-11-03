import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Aboutitem = (props) => {
  return (
    <div className='about-item d-flex'>
       <div className='abouticon'>
       <FontAwesomeIcon icon={props.icon2}/>
       </div>
       <div className='about-icon-text'>
                <h3>{props.aboutrightheading}</h3>
            <p>{props.aboutrighttext}</p>
       </div>
    </div>
  )
}

export default Aboutitem