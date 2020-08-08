import React from 'react'

import classes from './CreatePost.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import colors from '../../../colors.module.css';

const CreatePost = () => {
    return (
        <Card
            cardHeader={<h1>New Post</h1>}
            cardBody={
                <React.Fragment>
                    <div className={classes.Column}>
                        <p>Image</p>
                        <textarea placeholder="Write a post"></textarea>
                    </div>
                    <hr />
                    <div className={classes.Column}>
                        <button className={[classes.CameraButton, colors.SecondaryColor].join(' ')}></button>
                        <Button styling="main">POST</Button>
                    </div>
                </React.Fragment>
            }
        />
    )
}

export default CreatePost
