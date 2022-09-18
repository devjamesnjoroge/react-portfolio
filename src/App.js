import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Feedback from "./components/Feedback/Feedback"
import Preloader from "./components/Preloader/Preloader"
import FeedbackData from "./Data/FeedbackData"

function App(){
    return (
        <>
        <Header />
        <Hero />
        <Feedback feedbackList={FeedbackData}/>
        <Preloader />
        </>
        )
}

export default App