import React from 'react'
import './secure.css'
import Progress from './Progress'


const SecureFeature = (props) => {
  return (
    <div>
        <div className='secure-feature'>
            <div className='container'>
               <div className='row'>
                  <div className='col-lg-6'>
                  <h2>Secure Features</h2>
                <p>{props.featuresdesc}</p>
                  </div>
                  <div className='col-lg-6'>
                  <div className='progress-1'>
                    <h5>Home Security</h5>
                    <Progress done="70"/>
                  </div>
                  <div className='progress-2'>
                    <h5>Office Security</h5>
                    <Progress done="90"/>
                  </div>
                  <div className='progress-3'>
                    <h5>CCTV Cameras</h5>
                    <Progress done="50"/>
                  </div>
                  
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default SecureFeature