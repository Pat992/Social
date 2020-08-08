import React, { useState, useEffect } from 'react';

import classes from './Button.module.css';
import colors from '../../../colors.module.css';

const Button = (props) => {
    const [hover, setHover] = useState(false)

    useEffect(() => {

    }, [hover])
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={
                [classes.Button,
                props.styling === 'main' ?
                    [colors.MainColor, colors.HighlightColorText, hover ? colors.MainColorHover : null].join(' ')
                    :
                    [classes.Button, classes.ButtonSecondary].join(' ')
                ].join(' ')
            }
        >
            {props.children}
        </button>
    )
}

export default Button;
