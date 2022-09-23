import React from 'react'
import FeedbackItems from './FeedbackItems'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
  return (
   feedback.map((item) => {
      return  (
      <div key={item.id}>
        <div className='mt-5'>
                <FeedbackItems item={item} handleDelete={handleDelete} />
        </div>
      </div>
      )
  })
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
  handleDelete: PropTypes.func,
}

export default FeedbackList