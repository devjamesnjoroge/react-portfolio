import Card from "../Shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({rating, text}) {
  return (
    <Card>
        <div className="circle">{rating}</div>
        <p>{text}</p>
    </Card>
  )
}

FeedbackItem.propTypes = {
    rating: PropTypes.number,
    text: PropTypes.string
}

export default FeedbackItem