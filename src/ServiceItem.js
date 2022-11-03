import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './services.css'

const ServiceItem = (props) => {
  return (
    <div className='service-item'>
        <div className='d-flex'>
        <span>{props.count}</span>
        <div className='service-name'>
            <div><p>{props.serviceName}</p></div>
        </div>
        </div>
        <div>
                <a href='#'><FontAwesomeIcon icon={faCaretRight} /></a>
            </div>
    </div>
  )
}

export default ServiceItem