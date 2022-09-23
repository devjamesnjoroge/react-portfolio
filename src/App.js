import FeedbackForm from "./Components/FeedbackForm"
import FeedbackList from "./Components/FeedbackList"
import Navbar from "./Components/Navbar"
import FeedbackData from "./data/FeedbackData"

function App() {


  return (
    <>
        <div className="container">
            <Navbar />
            <FeedbackForm />
            <FeedbackList feedback={FeedbackData} />
        </div>
    </>
  )
}

export default App