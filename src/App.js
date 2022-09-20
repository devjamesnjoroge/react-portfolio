import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Preloader from "./components/Preloader/Preloader"
import FeedbackData from "./Data/FeedbackData"
import FeedbackItem from "./components/FeedbackItem/FeedbackItem"
import PropTypes from 'prop-types'
import {useState} from 'react'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const handleFeedback = (id) => {
        if (window.confirm('Do you really want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <>
        <Header />
        <Hero />
        <FeedbackItem items={feedback} handleDelete={handleFeedback} />
        <Preloader />
        </>
        )
}

export default App