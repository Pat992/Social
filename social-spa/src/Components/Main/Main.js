import React from 'react';

import Navbar from '../UI/Navbar/Navbar';
import Posts from '../Posts/Posts';
import CreatePost from '../Posts/CreatePost/CreatePost';
import classes from './Main.module.css'

const Main = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className={classes.MainBody}>
                <CreatePost />
                <Posts posts={props.posts} />
            </div>
        </React.Fragment>
    )
}

export default Main
