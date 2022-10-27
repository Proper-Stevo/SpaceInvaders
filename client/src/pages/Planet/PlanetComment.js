import React from 'react';
// import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default function PlanetComment() {

    // define userComment through query
    // mutations to update comment

    // use state  (change active btwn cards&textarea)
    // use mutations (add/update/delete comment)
    // import { useMutation } from '@apollo/client';
    // import { SAVE_BOOK } from '../utils/mutations';


    return !userComment ?  (
            <div className='userCommentCard'>
                <Card>
                    <Card.Body>User notes go here</Card.Body>
                </Card>
                <Button variant="outline-primary">Update Notes</Button>{' '}
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
