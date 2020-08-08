import React from 'react'

import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <div className={classes.Posts}>
            <Post />
        </div>
    )
}

export default Posts
