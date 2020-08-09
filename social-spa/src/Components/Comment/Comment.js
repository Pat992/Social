import React, { useState } from 'react'

import classes from './Comment.module.css';
import colors from '../../colors.module.css';

const Comment = (props) => {
    return (
        <div className={[classes.Comment, colors.MainColor].join(' ')}>
            <p>Image</p>
            <div className={classes.Column}>
                <p className={colors.HighlightColorText}><b>{props.userName}</b></p>
                <p className={colors.HighlightColorText}>{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment
