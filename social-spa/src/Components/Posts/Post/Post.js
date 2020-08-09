import React, { useState } from 'react'
import axios from 'axios';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Comment from '../../Comment/Comment';
import classes from './Post.module.css';
import baseURL from '../../../_helper/baseUrl';

const Post = (props) => {
    const [comment, setComment] = useState('');

    const newComment = () => {
        if (comment.trim() !== '') {
            axios.post(`${baseURL}comments.php`, JSON.stringify({
                comment: comment,
                postToComment: props.postId
            })).then(res => {
                props.updatePage();
            }).catch(err => {

            })
        }
    }
    return (
        <Card
            cardHeader={
                <React.Fragment>
                    <p>Image</p>
                    <div className={classes.Row}>
                        <h2>{props.userName}</h2>
                        <p>{props.date}</p>
                    </div>
                </React.Fragment>
            }
            cardBody={
                <div className={classes.CommentSection}>
                    <p className={classes.Content}>{props.content}</p>
                    <hr />
                    <Input placeholder="New Comment" value={comment} setValue={setComment} />
                    <Button styling="main" onClick={newComment}>COMMENT</Button>
                    {props.comments.map(comment => (
                        <Comment
                            key={comment.commentId}
                            userName={comment.user.toUpperCase()}
                            comment={comment.comment}
                        />
                    ))}
                </div>
            }
        />
    )
}

export default Post
