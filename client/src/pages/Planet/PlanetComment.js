import React from 'react';
// import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { useMutation, useQuery } from '@apollo/client';
import { SAVE_COMMENT, REMOVE_COMMENT } from '../../utils/mutations';
import { QUERY_USERS, QUERY_PLANET } from '../../utils/queries';
import { useParams } from 'react-router-dom';


export default function PlanetComment() {

    const { planetname } = useParams()
    const upper = planetname.toUpperCase();

    // define userComment through query
    // mutations to update comment
    const { loading, data } = useQuery(QUERY_USERS);
    // userData is data pulled from users or empty object to load corresponding comment for each planet
    const userNotes = data?.users || {};

    console.log (userNotes);

    // might need something like this to render proper note
    // if (planet.name == userComment.comments.planet) {
    //     // render comment
    // }

    const [removeComment, { error }] = useMutation(REMOVE_COMMENT);
    // const [addComment, { err }] = useMutation(SAVE_COMMENT);
    // create new comment with state variable
    // const [userComment, setUserComment] = useState({ commentText: ''});

    
    // * DELETE NOTES---------------------------------------

    // create function that accepts the comment's mongo _id value as param and deletes the comment
    // const handleDeleteComment = async (commentId) => {
    //     // get token
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;
    //     // check login
    //     if (!token) {
    //         return false;
    //     }

    //     // in data, remove comment by commentId
    //     try {
    //         const { data } = await removeComment({
    //             variables: { commentId },
    //         });

    //         // ! FIX - delete comment by id
    //         removeCommentId(commentId);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // * SAVE NOTES------------------------------------------

    //  TODO: save comment function

    // * RENDER----------------------------------------------

    if (loading) {
        return <h2 className='loading'>LOADING...</h2>;
    }

    // ! if user has a comment for planet, then render comment,
    // ! otherwise render empty text box with save/add note button - if statment line 22

    // ! FIX IF STATEMENT - check if usercomment exists
    return !userNotes ? (
        <div className='userInputComment'>
            <h2 className='notes-title'>{upper} NOTES</h2>
            <InputGroup className="mb-3">
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    className='note-text-area'
                />
            </InputGroup>
            <Button className='note-btn'>SAVE NOTE</Button>{' '}
        </div>
    ) : (
        <div className='userCommentCard'>
            <h2 className='notes-title'>{upper} NOTES</h2>
            <Card className='comment-card-text'>
                if (userNotes.planet == planetname) {
                    <Card.Body>{userNote.commentText}</Card.Body>
                }
                
            </Card>
            <Button className='note-btn'>DELETE NOTE</Button>{' '}
        </div>
    );

};
