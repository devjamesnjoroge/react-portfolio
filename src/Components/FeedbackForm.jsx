import React from 'react'
import Button from '../shared/Button'
import Card from '../shared/Card'

function FeedbackForm() {
    const handleSubmit = (e) =>{
        e.preventDefault()
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
                    <input type="radio" name="rating" id="num1" />
                </li>
                <li>
                    <label htmlFor="num2">2</label>
                    <input type="radio" name="rating" id="num2" />
                </li>
                <li>
                    <label htmlFor="num3">3</label>
                    <input type="radio" name="rating" id="num3" />
                </li>
                <li>
                    <label htmlFor="num4">4</label>
                    <input type="radio" name="rating" id="num4" />
                </li>
                <li>
                    <label htmlFor="num5">5</label>
                    <input type="radio" name="rating" id="num5" />
                </li>
                <li>
                    <label htmlFor="num6">6</label>
                    <input type="radio" name="rating" id="num6" />
                </li>
                <li>
                    <label htmlFor="num7">7</label>
                    <input type="radio" name="rating" id="num7" />
                </li>
                <li>
                    <label htmlFor="num8">8</label>
                    <input type="radio" name="rating" id="num8" />
                </li>
                <li>
                    <label htmlFor="num9">9</label>
                    <input type="radio" name="rating" id="num9" />
                </li>
                <li>
                    <label htmlFor="num10">10</label>
                    <input type="radio" name="rating" id="num10" />
                </li>
            </ul>
            <textarea className='review-input' type="text" name="review" id="review"></textarea>
            <Button onClick={handleSubmit}>
                Send 
            </Button>
        </form>
        </Card>
    </div>
  )
}

export default FeedbackForm