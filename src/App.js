import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Preloader from "./components/Preloader/Preloader"
import FeedbackData from "./Data/FeedbackData"
import FeedbackItem from "./components/FeedbackItem/FeedbackItem"
import PropTypes from 'prop-types'
import {useState} from 'react'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/Forms/FeedbackForm"


function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const handleFeedback = (id) => {
        if (window.confirm('Do you really want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const feedLength = feedback.length

    const addFeedback = () => {
        alert('Complete add?')
        setFeedback((prev) =>{
            return prev.push({id: feedLength + 1, rating: 6, text: 'fghj'})
        })
    }

    return (
        <>
        <Header />
        <Hero />
        <FeedbackForm handleFeed={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackItem items={feedback} handleDelete={handleFeedback} />
        <Preloader />
        </>
        )
}

export default App