
import React from 'react'
import Item from './Item'
import Button from './Button'
import './item.css'

let arr=[{img:"https://i.ibb.co/bWgN8Rs/security.png",anchor:"Home Security"},{img:"https://i.ibb.co/jGjZdY0/email.png",anchor:"Office Security"},{img:"https://i.ibb.co/djrqQmc/search.png",anchor:"All Cameras"}]

const Feature = (props) => {
  return (
    <div className='feature-wrap common-pad'>
    <div className='container'>
        <div className='row'>
            {arr.map((d,i)=>{
                return (
                    <div className='col-lg-4'>
                    <Item img={d.img} anchor={d.anchor}/>
                </div>
                )
            })}
        </div>
        <div className='mt-8'>
        <Button mode='C' btntext="NEW SECURITY PLAN IS AVAILABLE. START NOW!"/>
        </div>
    </div>
    </div>
  )
}



export default Feature
