import { v4 as uuidv4 } from 'uuid'
import FeedbackForm from "./Components/FeedbackForm"
import FeedbackList from "./Components/FeedbackList"
import Navbar from "./Components/Navbar"
import FeedbackData from "./data/FeedbackData"
import {useState} from 'react'
import FeedbackStats from "./Components/FeedbackStats"
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

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

  return (
    <FeedbackProvider>
        <div className="container">
            <Navbar />
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={handleDelete} />
        </div>
    </FeedbackProvider>
  )
}

export default App