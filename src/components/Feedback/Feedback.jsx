import React from 'react'
import './Feedback.scss'

function Feedback({feedbackList}) {

  return (
    <>

    <h2 className='primary'>Feedback app</h2>
    <div className="container">
        
        {feedbackList.map((item)=>{
        console.log(item)
        return(   <>
                key={item.id}
                <div className="card" key={item.id}>
                <div className="circle">{item.rating}</div>
                <p>{item.text}</p>
                </div>
            </>
            )
        })}
        
       
    </div>
    <button className='btn'>Update Rating</button>

    </>
  )
}

export default Feedback