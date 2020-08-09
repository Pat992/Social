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
                <CreatePost updatePage={props.updatePage} />
                <Posts posts={props.posts} updatePage={props.updatePage} />
            </div>
        </React.Fragment>
    )
}

export default Main
