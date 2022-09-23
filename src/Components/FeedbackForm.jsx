import React, { useState } from 'react'
import Button from '../shared/Button'
import Card from '../shared/Card'

function FeedbackForm() {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const [rating, setRating] = useState(10)

    const [review, setReview] = useState('')

    const [message, setMessage] = useState('')

    const [disabled, setDisabled] = useState(true)


    const handleRatingChange = (e) => {
        setRating(+e.currentTarget.value)
    }

    const handleReviewChange = (e) => {
       setReview(e.target.value)
       console.log(e.target.value.trim().length)
       if (e.target.value.trim().length <= 10 && e.target.value.trim().length > 0){
        setDisabled(true)
        setMessage('Review must be more than 10 characters!')
        } else if (e.target.value.trim().length > 10){
            setMessage('')
            setDisabled(false)
        } else {
            setDisabled(true)
            setMessage('')
        }
    }

   
  return (
    <div className="mt-5">
        <Card>
        <form>
            <label htmlFor="review">
                Write a review about working with James before. And also leave a rating!
            </label>
            <ul className="radio-btns">
                <li>
                    <label htmlFor="num1">1</label>
                    <input onChange={handleRatingChange} value={1} checked={rating === 1 ? true : false} type="radio" name="rating" id="num1" />
                </li>
                <li>
                    <label htmlFor="num2">2</label>
                    <input onChange={handleRatingChange} value={2} checked={rating === 2 ? true : false} type="radio" name="rating" id="num2" />
                </li>
                <li>
                    <label htmlFor="num3">3</label>
                    <input onChange={handleRatingChange} value={3} checked={rating === 3 ? true : false} type="radio" name="rating" id="num3" />
                </li>
                <li>
                    <label htmlFor="num4">4</label>
                    <input onChange={handleRatingChange} value={4} checked={rating === 4 ? true : false} type="radio" name="rating" id="num4" />
                </li>
                <li>
                    <label htmlFor="num5">5</label>
                    <input onChange={handleRatingChange} value={5} checked={rating === 5 ? true : false} type="radio" name="rating" id="num5" />
                </li>
                <li>
                    <label htmlFor="num6">6</label>
                    <input onChange={handleRatingChange} value={6} checked={rating === 6 ? true : false} type="radio" name="rating" id="num6" />
                </li>
                <li>
                    <label htmlFor="num7">7</label>
                    <input onChange={handleRatingChange} value={7} checked={rating === 7 ? true : false} type="radio" name="rating" id="num7" />
                </li>
                <li>
                    <label htmlFor="num8">8</label>
                    <input onChange={handleRatingChange} value={8} checked={rating === 8 ? true : false} type="radio" name="rating" id="num8" />
                </li>
                <li>
                    <label htmlFor="num9">9</label>
                    <input onChange={handleRatingChange} value={9} checked={rating === 9 ? true : false} type="radio" name="rating" id="num9" />
                </li>
                <li>
                    <label htmlFor="num10">10</label>
                    <input onChange={handleRatingChange} value={10} checked={rating === 10 ? true : false} type="radio" name="rating" id="num10" />
                </li>
            </ul>
            <textarea placeholder='Write your review.' onChange={handleReviewChange} className='review-input' type="text" name="review" id="review"></textarea>
            <Button onClick={handleSubmit} disabled={disabled}>
                Send 
            </Button>
        </form>
        <p style={{color: 'red'}}>{message}</p>
        </Card>
    </div>
  )
}

export default FeedbackForm