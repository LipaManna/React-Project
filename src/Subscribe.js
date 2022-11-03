import React from 'react'
import Button from './Button'
import './subscribe.css'

const Subscribe = (props) => {
  return (
    <div className='subscribe-wrap container'>
<div className='d-flex'>
            <div className='left-col'>
            <h2>Subscribe to the news!</h2>
            <p>{props.para}</p>
            </div>
            <div className='right-col'>
            <Button mode="D" btntext="Subscribe Now!"/>
            </div>
    </div>
    </div>
  )
}

export default Subscribe