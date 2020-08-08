import React from 'react'

import classes from './Input.module.css';

const Input = (props) => {
    return (
        <label className={props.hidden ? classes.Hidden : null}>
            {props.children}
            <input
                className={classes.Input}
                type={props.type}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)} />
        </label>
    )
}

export default Input
