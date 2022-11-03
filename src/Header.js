import React from 'react'
import Logo from './assets/logo.png'
import Social from './Social'


const Header = () => {
  return (
    <div className='header-row '>
        <div className='container d-flex'>
            <div className='logo'>
               <img src= {Logo}/>
            </div>
            <div className='custom-navbar d-flex align-items-center'>
                <div className='nav-items'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Features</a></li>
                    </ul>
                </div>
                <div className='hdr-rt'>
                    <Social/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header