import React from 'react'
import PropTypes from 'prop-types'

function Button({children, type, version, handleSubmit}) {
  return (
    <button type={type} className={`btn ${version}`} onClick={handleSubmit}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button',
    version: 'btn-primary'
}

Button.propTypes = {

    children : PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    handleSubmit: PropTypes.func

}

export default Button