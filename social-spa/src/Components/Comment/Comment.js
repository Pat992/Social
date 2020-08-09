import React, { useState } from 'react'
import axios from 'axios';

import baseURL from '../../_helper/baseUrl';
import classes from './Comment.module.css';
import colors from '../../colors.module.css';
import Delete from '../UI/Icons/Delete';

const Comment = (props) => {

    const deleteComment = () => {
        axios.post(`${baseURL}comments.php`, JSON.stringify({
            delete: props.commentId
        })).then(res => {
            props.updatePage();
        }).catch(err => {

        })
    }

    return (
        <div className={[classes.Comment, colors.MainColor].join(' ')}>
            <p>Image</p>
            <div className={classes.Column}>
                <p className={colors.HighlightColorText}><b>{props.userName}</b></p>
                <p className={colors.HighlightColorText}>{props.comment}</p>
            </div>
            {props.deletable ? <Delete className={classes.Delete} delete={deleteComment} /> : null}
        </div>
    )
}

export default Comment
