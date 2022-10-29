import React from 'react';
// import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { useMutation, useQuery } from '@apollo/client';
import { SAVE_COMMENT, REMOVE_COMMENT } from '../../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';


export default function PlanetComment(planet) {

    // define userComment through query
    // mutations to update comment
    const { loading, data } = useQuery(QUERY_USERS);
    // userData is data pulled from users or empty object to load corresponding comment for each planet
    const userComment = data?.users || {};

    // might need something like this to render proper note
    // if (planet.name == userComment.comments.planet) {
    //     // render comment
    // }

    const [removeComment, { error }] = useMutation(REMOVE_COMMENT);
    // const [addComment, { error }] = useMutation(SAVE_COMMENT);
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
        return <h2>LOADING...</h2>;
    }

    // ! if user has a comment for planet, then render comment,
    // ! otherwise render empty text box with save/add note button - if statment line 22

    // ! FIX IF STATEMENT - check if usercomment exists
    return !userComment ? (
        <div className='userInputComment'>
            <h2 className='notes-title'>{planet.name} Notes</h2>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Notes
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button variant="outline-primary">Save Notes</Button>{' '}
        </div>
    ) : (
        <div className='userCommentCard'>
            <h2 className='notes-title'>{planet.name} Notes</h2>
            <Card>
                <Card.Body>{userComment.comments}</Card.Body>
            </Card>
            {/* <Button variant="outline-primary">Update Notes</Button>{' '} */}
            <Button variant="outline-primary">Delete Notes</Button>{' '}
        </div>
    );

};
