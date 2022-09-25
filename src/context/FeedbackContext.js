import {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit : false})

    // LOAD DATA ON PAGE LOAD

    useEffect(() => {
      fetchData()
    }, [feedback])

    // FETCH JSON SERVER DATA

    const fetchData = async() => {
      const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
      const data = await response.json()
      setFeedback(data)
      setIsLoading(false)
    }

    // Add Feedback

    const addFeedback = async (newFeedback) => {
        newFeedback.id = uuidv4()
        const response = await fetch(`http://localhost:5000/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
        })

        const data = response.json()

        setFeedback([data, ...feedback])
        alert('Feedback added!')
      }

    // Delete Feedback

    const handleDelete = async (id) => {
        if (window.confirm('Do you really want to delete this feedback?')){
          await fetch(`http://localhost:5000/feedback/${id}`, {
          method: 'DELETE'
          })
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    // Edit Feedback

    const editFeedback = (item) => {
        setFeedbackEdit({item : item, edit : true})
    }

    // Update Feedback

    const updateFeedback = async (id, updItem) => {
      const response = await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updItem)
      })
      const data = response.json()
      setFeedback(feedback.map((item) => (
        item.id === id ? {...item, ...data} : item
      )
      ))
    }

    // Reset FeedbackEdit

    const resetFeedbackEdit = () => {
      setFeedbackEdit({item: {}, edit : false})
    }

    return <FeedbackContext.Provider value={
    {feedback, 
    feedbackEdit,
    isLoading,
    handleDelete, 
    addFeedback, 
    editFeedback, 
    updateFeedback, 
    resetFeedbackEdit 
    }
      }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext