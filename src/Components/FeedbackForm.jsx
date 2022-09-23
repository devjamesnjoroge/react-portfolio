import React from 'react'
import Card from '../shared/Card'

function FeedbackForm() {
  return (
    <div className="mt-5">
        <Card>
        <form>
            <label htmlFor="review">
                Write a review about working with James before. And also leave a rating!
            </label>
            <textarea className='review-input' type="text" name="review" id="review"></textarea>
        </form>
        </Card>
    </div>
  )
}

export default FeedbackForm