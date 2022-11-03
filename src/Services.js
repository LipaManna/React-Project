import React from 'react'
import ServiceItem from './ServiceItem'
import './services.css'

let arr3=[{count:`01`,serviceName:"Home Security"},{count:`02`,serviceName:"Office Security"},{count:`03`,serviceName:"Cyber Security"},{count:`04`,serviceName:"CCTV Cameras"}]

const Services = () => {
  return (
    <div className='container'>
        <div className='service-wrap row'>
            
                {arr3.map(function(d,i){
                    return(
                        <div className='col-lg-6'>
                        <ServiceItem count={d.count} serviceName={d.serviceName}/>
                        </div>
                    )
                })}
            
        </div>
    </div>
  )
}

export default Services