import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
        <ul className='social-icon'>
                        <li><a href='#'>+91 90567-23456</a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faFacebook}  className='icon-color'  /></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faYoutube} className='icon-color'  /></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faTwitter} className='icon-color'  /></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faInstagram} className='icon-color'  /></a></li>
                    </ul>
    </>
  )
}

export default Social