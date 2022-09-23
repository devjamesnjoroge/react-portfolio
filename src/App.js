import FeedbackList from "./Components/FeedbackList"
import Navbar from "./Components/Navbar"
import FeedbackData from "./data/FeedbackData"

function App() {


  return (
    <>
        <div className="container">
            <Navbar />
            <FeedbackList />
        </div>
    </>
  )
}

export default App