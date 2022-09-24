import FeedbackForm from "./Components/FeedbackForm"
import FeedbackList from "./Components/FeedbackList"
import Navbar from "./Components/Navbar"
import FeedbackData from "./data/FeedbackData"
import {useState} from 'react'
import FeedbackStats from "./Components/FeedbackStats"
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <FeedbackProvider>
        <div className="container">
            <Navbar />
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </div>
    </FeedbackProvider>
  )
}

export default App