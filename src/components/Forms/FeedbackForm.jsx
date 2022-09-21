import React from 'react'
import Button from '../Shared/Button'
import Card from '../Shared/Card'
import { useState } from 'react'
import PropTypes from 'prop-types'

function FeedbackForm({handleFeed}) {

    const [review, setReview] = useState('')

    const [rating, setRating] = useState(0)

    const handleSubmit = () => {
        if (review.length < 10){
            alert('')
        } else if (rating > 10 || rating < 1){
            alert('')
        } else{
            handleFeed()
        }

    }

    const handleChange = (e) => {
        setReview(e.target.value)
    }

    const handleChangeRating = (e) => {
        setRating(e.target.value)
    }

  return (
    <>
        <div className="container-fluid">
        <Card>
         <form>
        <label htmlFor="rating">
            What rating would you rate us? [1-10]
        </label> 
        <br />
        <ul>
            <li>
                <label className='label' htmlFor="num1">1</label>
                <input type="radio" name="num" id="num1" value={1} />
            </li>
            <li>
                <label className='label' htmlFor="num2">2</label>
                <input type="radio" name="num" id="num2" value={2} />
            </li>
            <li>
                <label className='label' htmlFor="num3">3</label>
                <input type="radio" name="num" id="num3" value={3} />
            </li>
            <li>
                <label className='label' htmlFor="num4">4</label>
                <input type="radio" name="num" id="num4" value={4} />
            </li>
            <li>
                <label className='label' htmlFor="num5">5</label>
                <input type="radio" name="num" id="num5" value={5} />
            </li>
            <li>
                <label className='label' htmlFor="num6">6</label>
                <input type="radio" name="num" id="num6" value={6} />
            </li>
            <li>
                <label className='label' htmlFor="num7">7</label>
                <input type="radio" name="num" id="num7" value={7} />
            </li>
            <li>
                <label className='label' htmlFor="num8">8</label>
                <input type="radio" name="num" id="num8" value={8} />
            </li>
            <li>
                <label className='label' htmlFor="num9">9</label>
                <input type="radio" name="num" id="num9" value={9} />
            </li>
            <li>
                <label className='label' htmlFor="num10">10</label>
                <input type="radio" name="num" id="num10" value={10} />
            </li>
        </ul>
        <br />
        <label htmlFor="text">
            Write a review?
        </label> 
        <br />
       <div className="form-grp">
       <input onChange={handleChange} name="text" id="text" cols="30" rows="10" value={review} />
        <Button version={'btn2'} handleSubmit={handleSubmit}>
            submit
        </Button>
       </div>
    </form>
    </Card>
    <Card>
        <p>{review}</p>
    </Card>
        </div>
    </>
  )
}


export default FeedbackForm