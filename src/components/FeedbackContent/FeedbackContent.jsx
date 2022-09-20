import React from 'react'
import PropTypes from 'prop-types'
import {FaEdit, FaTrash} from 'react-icons/fa'

function FeedbackContent({feed, handleDelete}) {
  return (
    <>
        <div className="circle">{feed.id}</div>
        <p className="feedParagraph">
            {feed.text}
        </p>
        <FaEdit className='close' color='#ff6ad5' />
        <FaTrash onClick={() => handleDelete(feed.id)} className='delete' color='red' />
    </>
  )
}

FeedbackContent.propTypes = {
    feed: PropTypes.object.isRequired
}

export default FeedbackContent