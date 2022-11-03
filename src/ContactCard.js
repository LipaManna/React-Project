import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css'

const ContactCard = (props) => {
  return (
    <div className='contact-card'>
        <div className='d-flex'>
            <div className='left-col'>
            <h5>{props.contactTitle}</h5>
        <p>{props.desc}</p>
        <h6>{props.phone}</h6>
            </div>
        <div className='right-col'>
            <ul>
            <li><a href='#'><FontAwesomeIcon icon={faGlobe}  className='icon-color'  /></a></li>
             <li><a href='#'><FontAwesomeIcon icon={faLocation} className='icon-color'/></a></li>
             <li><a href='#'><FontAwesomeIcon icon={faPhone} className='icon-color'  /></a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default ContactCard