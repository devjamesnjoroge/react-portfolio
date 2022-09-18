import React from 'react'
import './Feedback.scss'
import FeedbackItem from '../FeedbackItem/FeedbackItem';


function Feedback({feedbackList}) {

  return (
    <>

    <h2 className='primary'>Feedback app</h2>
        
        {feedbackList.map((item)=>{
        console.log(item)
        return(   <>
                key={item.id}
                <FeedbackItem rating={item.rating} text={item.text} />
            </>
            )
        })}
        
       
    <button className='btn'>Update Rating</button>

    </>
  )
}

export default Feedback