import React, { useState } from 'react'
import axios from 'axios';

import classes from './CreatePost.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import colors from '../../../colors.module.css';
import baseURL from '../../../_helper/baseUrl';

const CreatePost = (props) => {
    const [post, setPost] = useState()

    const newPost = () => {
        if (post.trim() !== '') {
            axios.post(`${baseURL}posts.php`, JSON.stringify({
                post: post
            })).then(res => {
                props.updatePage();
                setPost('');
            }, err => {
                console.log(err)
            })
        }
    }

    return (
        <Card
            cardHeader={<h1>New Post</h1>}
            cardBody={
                <React.Fragment>
                    <div className={classes.Column}>
                        <p>Image</p>
                        <textarea placeholder="Write a post" value={post} onChange={(e) => setPost(e.target.value)} ></textarea>
                    </div>
                    <hr />
                    <div className={classes.Column}>
                        <button className={[classes.CameraButton, colors.SecondaryColor].join(' ')}></button>
                        <Button styling="main" onClick={newPost}>POST</Button>
                    </div>
                </React.Fragment>
            }
        />
    )
}

export default CreatePost
