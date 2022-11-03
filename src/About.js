import React from 'react'
// import {faGlobe,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faGlobe,faSyncAlt,faUserCircle} from "@fortawesome/free-solid-svg-icons"
import Aboutitem from './Aboutitem';
import './about.css'

let arr2=[{icon2:faGlobe,aboutrightheading:"Home Security" , aboutrighttext:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus cursus, lacus at fringilla lacinia leo eleifend.`},{icon2:faSyncAlt,aboutrightheading:"Office Security",aboutrighttext:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia leo eleifend.`},{icon2:faUserCircle,aboutrightheading:"CCTV Cameras",aboutrighttext:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus cursus, lacus at fringilla lacinia leo eleifend.`}]

const About = (props) => {
  return (
    <div className='about-wrap'>
        <div className='container common-pad'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='about-left'>
                    <h2>About Us</h2>
                    <p>{props.abouttext}</p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    {arr2.map(function(d,i){
                        return(
                            <div className='about-right-item'>
                                <Aboutitem icon2={d.icon2} aboutrightheading={d.aboutrightheading} aboutrighttext={d.aboutrighttext}/>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About