import FeedbackForm from "./Components/FeedbackForm"
import FeedbackList from "./Components/FeedbackList"
import Navbar from "./Components/Navbar"
import FeedbackStats from "./Components/FeedbackStats"
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

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