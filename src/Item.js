import React from 'react'
import './item.css'

const Item = (props) => {
  return (

    <a href='#' className='item-wrap d-flex align-items-center'>
      <div className='icon'>
        <img src={props.img}/>
      </div>
      <div className='link'>
       {props.anchor}
      </div>
    </a>

  )
}

export default Item