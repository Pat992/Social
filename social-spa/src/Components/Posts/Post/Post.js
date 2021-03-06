import React, { useState } from 'react'
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import alertify from 'alertifyjs';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Comment from '../../Comment/Comment';
import classes from './Post.module.css';
import baseURL from '../../../_helper/baseUrl';
import Delete from '../../UI/Icons/Delete';

const Post = (props) => {
    const [comment, setComment] = useState('');
    const images = [];

    props.images.forEach(img => {
        images.push(
            {
                original: `${baseURL}images/${img.imageName}`,
                thumbnail: `${baseURL}images/${img.imageName}`
            }
        );
    });

    const deletePost = () => {
        axios.post(`${baseURL}posts.php`, JSON.stringify({
            delete: props.postId
        })).then(res => {
            alertify.success('Post was deleted');
            props.updatePage();
        }).catch(err => {
            alertify.error('Could not delete Post,\ntry again later');
        })
    }

    const newComment = () => {
        if (comment.trim() !== '') {
            axios.post(`${baseURL}comments.php`, JSON.stringify({
                comment: comment,
                postToComment: props.postId
            })).then(res => {
                props.updatePage();
                alertify.success('Comment was added');
            }).catch(err => {
                alertify.error('Could not add Comment,\ntry again later');
            })
        }
    }
    return (
        <Card
            cardHeader={
                <React.Fragment>
                    <p>Image</p>
                    <div className={classes.Row}>
                        <h2>{props.userName}</h2>
                        <p>{props.date}</p>
                    </div>
                    {props.deletable ? <Delete delete={deletePost} /> : null}
                </React.Fragment>
            }
            cardBody={
                <div className={classes.CommentSection}>
                    <p className={classes.Content}>{props.content}</p>
                    {images.length > 0 ? <ImageGallery items={images} /> : null}
                    <hr />
                    <Input placeholder="New Comment" value={comment} setValue={setComment} />
                    <Button styling="main" onClick={newComment}>COMMENT</Button>
                    {props.comments.map(comment => (
                        <Comment
                            key={comment.commentId}
                            commentId={comment.commentId}
                            userName={comment.user.toUpperCase()}
                            comment={comment.comment}
                            deletable={comment.deletable}
                            updatePage={props.updatePage}
                        />
                    ))}
                </div>
            }
        />
    )
}

export default Post
