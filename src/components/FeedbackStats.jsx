import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {

    let average = feedback.reduce((acc, current) =>{
        return acc + current.rating
    }, 0) / feedback.length

    // average = average.toFixed()

  return (
    <div className="stats">
        <p className="feedParagraph">Total reviews : {feedback.length}</p>
        <p className="feedParagraph">Average Rating : {isNaN(average) ? 0 : average}</p>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats