import {createContext, useState} from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit : false})

    // Add Feedback

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        alert('Feedback added!')
      }

    // Delete Feedback

    const handleDelete = (id) => {
        if (window.confirm('Do you really want to delete this feedback?')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    // Edit Feedback

    const editFeedback = (item) => {
        setFeedbackEdit({item : item, edit : true})
    }

    return <FeedbackContext.Provider value={{feedback, handleDelete, addFeedback, editFeedback, feedbackEdit}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext