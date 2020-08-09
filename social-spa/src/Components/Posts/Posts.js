import React, { useState, useEffect } from 'react'

import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = (props) => {
    console.log(props)
    return (
        <div className={classes.Posts}>
            {props.posts.map(post => (
                <Post
                    key={post.postId}
                    postId={post.postId}
                    userName={post.userName}
                    date={post.postDate}
                    content={post.postContent}
                    images={post.imagesToPost}
                    comments={post.commentsToPost}
                    updatePage={props.updatePage}
                    deletable={post.deletable}
                />
            ))}
        </div>
    )
}

export default Posts
