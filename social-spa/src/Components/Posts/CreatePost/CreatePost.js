import React, { useState, useEffect } from 'react'
import axios from 'axios';

import classes from './CreatePost.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import colors from '../../../colors.module.css';
import baseURL from '../../../_helper/baseUrl';

const CreatePost = (props) => {
    const [post, setPost] = useState('');
    const [pictures, setPictures] = useState([]);

    const newPost = () => {
        console.log(pictures);
        // save a new post
        if (post.trim() !== '') {
            const formData = new FormData();
            formData.set('post', post);
            pictures.forEach((picture, i) => {
                formData.append(i, picture);
            });
            axios({
                method: 'post',
                url: `${baseURL}posts.php`,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(res => {
                //props.updatePage();
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
                        <label className={[classes.CameraButton, colors.SecondaryColor].join(' ')}>
                            <input
                                type="file"
                                accept="image/*"
                                className={classes.HiddenButton}
                                onChange={(e) => setPictures([...pictures, e.target.files[0]])}
                            >
                            </input>
                        </label>
                        <Button styling="main" onClick={newPost}>POST</Button>
                    </div>
                </React.Fragment>
            }
        />
    )
}

export default CreatePost
