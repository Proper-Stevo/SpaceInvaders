import React from 'react';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function PlanetComment() {

    // define userComment through query
    // mutations to update comment

    // use state  (change active btwn cards&textarea)
    // use mutations (add/update/delete comment)
    // import { useMutation } from '@apollo/client';
    // import { SAVE_BOOK } from '../utils/mutations';


    return !userComment ? (
        <div className='userCommentCard'>
            <Card>
                <Card.Body>User notes go here</Card.Body>
            </Card>
            <Button variant="outline-primary">Update Notes</Button>{' '}
            <Button variant="outline-primary">Delete Notes</Button>{' '}
        </div>
    ) : (
        <div className='userInputComment'>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <Button variant="outline-primary">Save Notes</Button>{' '}
        </div>
    )
};