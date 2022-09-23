import React from 'react'
import Card from '../shared/Card'
import PropTypes from 'prop-types'

function FeedbackItems({item}) {
  return (
    <>
        <Card>
            <span style={{fontWeight: 500}}>Rating.</span>
            <div className="circle">{item.rating}</div>
            <p>{item.review}</p>
        </Card>
    </>
  )
}

FeedbackItems.propTypes = {
    item: PropTypes.object
}

export default FeedbackItems