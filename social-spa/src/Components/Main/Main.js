import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from '../UI/Navbar/Navbar';
import Posts from '../Posts/Posts';
import CreatePost from '../Posts/CreatePost/CreatePost';
import classes from './Main.module.css'
import Messages from '../Messages/Messages';
import UserPage from '../UserPage/UserPage';

const Main = (props) => {
    const [showMessages, setShowMessages] = useState(false);

    return (
        <React.Fragment>
            <Navbar openMessages={() => setShowMessages(!showMessages)} updatePage={props.updatePage} />
            <Switch>
                <Route path='/' exact component={() => (
                    <div className={classes.MainBody}>
                        <CreatePost updatePage={props.updatePage} />
                        <Posts posts={props.posts} updatePage={props.updatePage} />
                    </div>
                )} />
                <Route path='/user' component={() => <UserPage />} />
                <Redirect from='*' to='/' />
            </Switch>
            <Messages visible={showMessages} />
        </React.Fragment>
    )
}

export default Main
