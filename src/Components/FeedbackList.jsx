import {useContext} from 'react'
import FeedbackItems from './FeedbackItems'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {

  const {feedback} = useContext(FeedbackContext)

  return (
   feedback.map((item) => {
      return  (
      <div key={item.id}>
        <div className='mt-5'>
                <FeedbackItems item={item} />
        </div>
      </div>
      )
  })
  )
}

export default FeedbackList