import React from 'react'
import PropTypes from 'prop-types'

function Button({color, text}) {
    const onClick = (e) =>{
        console.log(e)
    }
   return(
        <button onClick = {onClick}className ="btn" style= {{backgroundColor: color}}>{text}</button>
        )
}
Button.defaultProps = {
    color :"steelblue",

}
Button.propTypes={
text : PropTypes.string,
color : PropTypes.string,
}
export default Button
