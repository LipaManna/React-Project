import React from 'react'
import ContactCard from './ContactCard'
let arr8=[{contactTitle:"Company Office",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus tortor, quis sollicitudin mauris ipsum a elit. South Carolina 3531 Camden Place 54",phone:"+1 (234) 567 89 01"},{contactTitle:"Customer Service",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus tortor, quis sollicitudin mauris ipsum a elit. South Carolina 3531 Camden Place 54",phone:"+1 (234) 567 89 01"}]

const Contact = () => {
  return (
    <div className='contact-wrap common-pad'>
        <div className='container'>
            <div className='row'>
                {
                    arr8.map(function(d,i){
                       return(
                        <div className='col-lg-6'>
                         <ContactCard contactTitle={d.contactTitle} desc={d.desc} phone={d.phone}/>
                        </div>
                       )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Contact