import React from 'react'
import Social from './Social'
import './follow.css'

const Follow = (props) => {
  return (
    <div>
        <div className='follow-wrap container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='follow-content'>
                        <h2>Follow Us</h2>
                        <p>{props.followPara}</p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='follow-social'>
                        <Social/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Follow