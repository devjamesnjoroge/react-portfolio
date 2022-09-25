import {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit : false})

    // LOAD DATA ON PAGE LOAD

    useEffect(() => {
      fetchData()
    }, [])

    // FETCH JSON SERVER DATA

    const fetchData = async() => {
      const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
      const data = await response.json()
      setFeedback(data)
    }

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

    // Update Feedback

    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => (
        item.id === id ? {...item, ...updItem} : item
      )
      ))
    }

    // Reset FeedbackEdit

    const resetFeedbackEdit = () => {
      setFeedbackEdit({item: {}, edit : false})
    }

    return <FeedbackContext.Provider value={{feedback, feedbackEdit, handleDelete, addFeedback, editFeedback, updateFeedback, resetFeedbackEdit }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext