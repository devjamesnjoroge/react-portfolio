import React from 'react'
import PropTypes from 'prop-types'

function Card({children, id}) {
  return (
    <div className="card" id={id} >
        {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card