import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({title}) {
    return (
        <header className="header">
            <h1>{title}</h1>
           <Button color="green" text="Add" />
        </header>
    )
}
Header.defaultProps ={
    title :"task tracker",
}
Header.propTypes = {
    title :PropTypes.string.isRequired
}

export default Header
