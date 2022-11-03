import React from 'react'
import Card from './Card'
import './securecard.css'
let arr4=[{img:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",title:"Home Security"},{img:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",title:"Office Security"}]

const SecureCards = (props) => {
  return (
   <div className='container'>
        <div className='common-pad row'>
            {arr4.map(function(d,i){
                return(
                    <div className='col-lg-6'>
                    <Card img={d.img} title={d.title}/>
                    </div>
                )
            })}
        </div>
   </div>
  )
}

export default SecureCards