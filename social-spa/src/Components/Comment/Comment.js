import React from 'react'

import classes from './Comment.module.css';
import colors from '../../colors.module.css';

const Comment = () => {
    return (
        <div className={[classes.Comment, colors.MainColor].join(' ')}>
            <p>Image</p>
            <div className={classes.Column}>
                <p className={colors.HighlightColorText}><b>Username</b></p>
                <p className={colors.HighlightColorText}>This is a comment</p>
            </div>
        </div>
    )
}

export default Comment
