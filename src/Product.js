import React from 'react'
import './product.css'
const Product = (props) => {
  return (
    <div className='custom-prod'>
        <div className='d-flex'>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
        </div>
        <div className='prod-desc'>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Product