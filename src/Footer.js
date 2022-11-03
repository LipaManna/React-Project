import React from 'react'
import './footer.css'
import Social from './Social'

const Footer = () => {
  return (
    <div className='container'>
        <div className='footer-menu'>
            <div className='ftr-top'>
            <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Terms</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Contact</a></li>
            </ul>
            </div>
            <div className='ftr-btm'>
                <div className='d-flex'>
                    <div className='copyright'>
                        <p>© Copyright 2025 Mobirise - All Rights Reserved</p>
                    </div>
                    <div className='ftr-social'>
                            <Social/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer