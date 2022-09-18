import React from 'react'
import './Feedback.scss'
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import PropTypes from 'prop-types'


function Feedback({feedbackList}) {

  return (
    <>

    <h2 className='primary'>Feedback app</h2>
        
        {feedbackList.map((item)=>{
        return(   <>
              
                <FeedbackItem rating={item.rating} text={item.text} key={item.id}/>
            </>
            )
        })}
        
       
    <button className='btn'>Update Rating</button>

    </>
  )
}

Feedback.propTypes = {
    feedbackList: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                text: PropTypes.string,
            }
            )
        )
}

export default Feedback