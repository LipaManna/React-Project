import React from 'react'

const HistoryItem = (props) => {
  return (
    <div>
        <div className='history-item'>
           <div>
                <h3>{props.year}</h3>
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HistoryItem