import React from 'react'

const Input = (props) => {
    return (
        <label>{props.children}<input type={props.type} value={props.value} onChange={(e) => props.setValue(e.target.value)} /></label>
    )
}

export default Input
