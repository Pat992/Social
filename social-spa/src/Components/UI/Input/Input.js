import React from 'react'

import classes from './Input.module.css';

const Input = (props) => {
    return (
        <React.Fragment>
            <label className={props.hidden ? classes.Hidden : null}>{props.children}</label>
            <input
                className={[classes.Input, props.hidden ? classes.Hidden : null].join(' ')}
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
        </React.Fragment>
    )
}

export default Input
