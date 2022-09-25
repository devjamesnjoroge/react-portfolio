import {useContext} from 'react'
import FeedbackItems from './FeedbackItems'
import FeedbackContext from '../context/FeedbackContext'
import Preloader from './Preloader'

function FeedbackList() {

  const {feedback, isLoading} = useContext(FeedbackContext)

  return (
   feedback.map((item) => {
      return isLoading ? <Preloader /> :  (
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