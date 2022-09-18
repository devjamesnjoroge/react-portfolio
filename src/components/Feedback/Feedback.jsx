import React, {useState} from 'react'
import './Feedback.scss'

function Feedback() {
    const [rating, setRating] = useState(1)

    const processClick = () => {
        setRating(
            (prev)=> {
                return prev + 1;
            }
            )
    }

  return (
    <>

    <h2 className='primary'>Feedback app</h2>
    <div className="circle">
        <span>{rating}</span>
    </div>
    <button className='btn' onClick={processClick}>Update Rating</button>

    </>
  )
}

export default Feedback