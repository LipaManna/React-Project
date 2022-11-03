import React from 'react'
import HistoryItem from './HistoryItem'
import './history.css'
 let arr6=[{year:2010,title:"Home Security",desc:`Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo
 eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non
 auctor mauris.`},{year:2011,title:"Office Security",desc:`Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo
 eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non
 auctor mauris.`},{year:2012,title:"CCTV Cameras",desc:`Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo
 eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non
 auctor mauris.`}]

const History = (props) => {
  return (
    <div className='history-wrap'>
        <div className='container'>
            <h2>Our History</h2>
        <ol>
        {arr6.map((d,i)=>{
                return (
                   <li> <HistoryItem year={d.year} title={d.title} desc={d.desc}/></li>
                )
            })}
        </ol>
            </div>
    </div>
  )
}

export default History