import React from 'react'

let btnx={
  A:"btn-blue-custom",B:"btn-white-custom",C:"btn-pink-custom",D:"sky-custom"
}
const Button = (props) => {
  
  return (
    <>
    <div><a href='#' className={`btn-custom ${props.mode?btnx[props.mode]:btnx["B"]}`}>{props.btntext}</a></div>
    </>
  )
}

export default Button