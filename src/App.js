import FeedbackForm from "./Components/FeedbackForm"
import FeedbackList from "./Components/FeedbackList"
import Navbar from "./Components/Navbar"
import FeedbackData from "./data/FeedbackData"
import {useState} from 'react'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const handleDelete = (id) => {
    if (window.confirm('Do you really want to delete this feedback?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
        <div className="container">
            <Navbar />
            <FeedbackForm />
            <FeedbackList feedback={feedback} handleDelete={handleDelete} />
        </div>
    </>
  )
}

export default App