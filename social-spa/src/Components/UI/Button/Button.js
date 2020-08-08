import React from 'react';

import classes from './Button.module.css';
import colors from '../../../colors.module.css';

const Button = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={
                props.styling === 'main' ?
                    [classes.Button, colors.MainColor, colors.HighlightColorText].join(' ')
                    :
                    [classes.Button, classes.ButtonSecondary].join(' ')}
        >
            {props.children}
        </button>
    )
}

export default Button;
