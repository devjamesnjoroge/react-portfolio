import React from 'react'
import PropTypes from 'prop-types'

function Button({children, disabled, handleSubmit}) {

  return (
    <button className="btn" type='button' disabled={disabled} onClick={handleSubmit}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    disabled: true,
}

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
}

export default Button