import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

let average = feedback.reduce((acc, current) => {
    return acc + current.rating
}, 0) / feedback.length

average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="stats">
        <span>Total Reviews: {feedback.length}</span>
        <span>Average Rating: { isNaN(average) ? 0 : average}</span>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats