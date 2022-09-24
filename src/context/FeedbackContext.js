import {createContext, useState} from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        alert('Feedback added!')
      }

    const handleDelete = (id) => {
        if (window.confirm('Do you really want to delete this feedback?')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    return <FeedbackContext.Provider value={{feedback, handleDelete, addFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext