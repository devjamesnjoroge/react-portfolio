import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 10,
            rating: 9,
            review: 'This is the feedback context api that uses providers'
        }
    ])

    return <FeedbackContext.Provider value={{feedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext