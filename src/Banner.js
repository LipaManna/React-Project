
import React from 'react'
import background from './assets/banner.jpg'
import Button from './Button'


const Banner = (props) => {
    return (
      <div className='banner-content text-center' style={{ backgroundImage: `url(${background})` }}>

         <div className='container'>
         <h1>{props.title}</h1>
          <p>{props.paragraph}</p>
          <div className='d-flex justify-content-center'>
          <Button mode='A' btntext="Learn More"/>
          <Button btntext="Get Started"/>
         
          </div>
         </div>
      </div>
    )
  }

export default Banner