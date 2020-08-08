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
                        <h2>I'm a post</h2>
                        <p>Date written</p>
                    </div>
                </React.Fragment>
            }
            cardBody={
                <div className={classes.CommentSection}>
                    <p>I'm the post content</p>
                    <hr />
                    <Input placeholder="New Comment" />
                    <Button styling="main">COMMENT</Button>
                    <Comment />
                </div>
            }
        />
    )
}

export default Post
