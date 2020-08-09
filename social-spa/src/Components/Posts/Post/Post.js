import React from 'react'

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Comment from '../../Comment/Comment';
import classes from './Post.module.css';

const Post = (props) => {
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
                    <p>{props.content}</p>
                    <hr />
                    <Input placeholder="New Comment" />
                    <Button styling="main">COMMENT</Button>
                    {props.comments.map(comment => (
                        <Comment
                            key={comment.commentId}
                            userName={comment.user}
                            comment={comment.comment}
                        />
                    ))}
                    <Comment
                    />
                </div>
            }
        />
    )
}

export default Post
