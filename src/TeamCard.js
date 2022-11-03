import React from 'react'

const TeamCard = (props) => {
  return (
    <div className='team-card'>
        <img src={props.img}/>
        <h5>{props.memberName}</h5>
        <p>{props.designation}</p>
    </div>
  )
}

export default TeamCard