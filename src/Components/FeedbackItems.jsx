import {useContext} from 'react'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import {FaTrash} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItems({item}) {

    const {handleDelete} = useContext(FeedbackContext) 

    const handleClick = () =>{
        handleDelete(item.id)
    }

  return (
    <>
        <Card>
            <span style={{fontWeight: 500}}>Rating.</span>
            <div className="circle">{item.rating}</div>
            <p>{item.review}</p>
            <FaTrash color='red' className='delete' onClick={handleClick} />
        </Card>
    </>
  )
}

FeedbackItems.propTypes = {
    item: PropTypes.object,
}

export default FeedbackItems