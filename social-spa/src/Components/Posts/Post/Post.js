import React from 'react'

import Card from '../../UI/Card/Card';

const Post = () => {
    return (
        <Card
            cardHeader={<h1>I'm a post</h1>}
            cardBody={<p>I'm the post content</p>}
        />
    )
}

export default Post
