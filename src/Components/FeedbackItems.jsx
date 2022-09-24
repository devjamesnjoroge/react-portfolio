import {useContext} from 'react'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import {FaTrash, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItems({item}) {

    const {handleDelete} = useContext(FeedbackContext)

    const {editFeedback} = useContext(FeedbackContext)

    const handleClick = () =>{
        handleDelete(item.id)
    }

    const handleEdit = () => {
        editFeedback(item)
    }

  return (
    <>
        <Card>
            <span style={{fontWeight: 500}}>Rating.</span>
            <div className="circle">{item.rating}</div>
            <p>{item.review}</p>
            <FaTrash color='red' className='delete' onClick={handleClick} />
            <FaEdit color='red' className='edit' onClick={handleEdit} />
        </Card>
    </>
  )
}

FeedbackItems.propTypes = {
    item: PropTypes.object,
}

export default FeedbackItems