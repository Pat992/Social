import React from 'react'

import classes from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={[classes.Messages, props.visible ? classes.Show : null].join(' ')}>
            <h1>Messages go here</h1>
        </div>
    )
}

export default Messages
