import React from 'react';

import Navbar from '../UI/Navbar/Navbar';
import Posts from '../Posts/Posts';
import CreatePost from '../Posts/CreatePost/CreatePost';

const Main = () => {
    return (
        <React.Fragment>
            <Navbar />
            <CreatePost />
            <Posts />
        </React.Fragment>
    )
}

export default Main
