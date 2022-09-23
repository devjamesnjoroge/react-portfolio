import React from 'react'
import FeedbackItems from './FeedbackItems'
import PropTypes from 'prop-types'

function FeedbackList({feedback}) {
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

FeedbackList.propTypes = {
  feedback: PropTypes.array
}

export default FeedbackList