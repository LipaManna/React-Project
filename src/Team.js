import React from 'react'
import TeamCard from './TeamCard'
import './team.css'

let arr7=[{img:'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',memberName:"Ann Brown",designation:"Manager"},{img:'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',memberName:"Ann Brown",designation:"Manager"},{img:'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',memberName:"Ann Brown",designation:"Manager"}]

const Team = () => {
  return (
    <div className='team-wrapper'> 
        <div className='container common-pad'>
            <h2>Our Team</h2>
            <div className='row'>
            {arr7.map(function(d,i){
                return(
                    <div className='col-lg-4'>
                    <TeamCard img={d.img} memberName={d.memberName} designation={d.designation}/>
                </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Team