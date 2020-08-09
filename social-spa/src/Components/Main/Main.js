import React, { useState } from 'react';

import Navbar from '../UI/Navbar/Navbar';
import Posts from '../Posts/Posts';
import CreatePost from '../Posts/CreatePost/CreatePost';
import classes from './Main.module.css'
import Messages from '../Messages/Messages';

const Main = (props) => {
    const [showMessages, setShowMessages] = useState(false);

    return (
        <React.Fragment>
            <Navbar openMessages={() => setShowMessages(!showMessages)} updatePage={props.updatePage} />
            <div className={classes.MainBody}>
                <CreatePost updatePage={props.updatePage} />
                <Posts posts={props.posts} updatePage={props.updatePage} />
                <Messages visible={showMessages} />
            </div>
        </React.Fragment>
    )
}

export default Main
