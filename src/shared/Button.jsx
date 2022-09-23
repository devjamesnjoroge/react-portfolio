import React from 'react'
import PropTypes from 'prop-types'

function Button({children}) {
  return (
    <button className="btn">
        {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node
}

export default Button