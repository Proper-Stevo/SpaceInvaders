import React from 'react';
// import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { useMutation } from '@apollo/client';

import { SAVE_COMMENT, REMOVE_COMMENT } from '../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';


export default function PlanetComment() {

    // define userComment through query
    // mutations to update comment
    const { users, data } = useQuery(QUERY_USERS);
    const [removeComment, { error }] = useMutation(REMOVE_COMMENT);

    const userData = data?.me || {};

    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    const handleDeleteComment = async (commentId) => {
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeComment({
                variables: { commentId },
            });

            // upon success, remove commet's id from localStorage
            // ! FIX
            removeCommentId(commentId);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }


    // ! FIX IF STATEMENT
    return userComment ? (
        <div className='userCommentCard'>
            <Card>
                <Card.Body>User notes go here</Card.Body>
            </Card>
            {/* <Button variant="outline-primary">Update Notes</Button>{' '} */}
            <Button variant="outline-primary">Delete Notes</Button>{' '}
        </div>
    ) : (
        <div className='userInputComment'>
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
    )
};
