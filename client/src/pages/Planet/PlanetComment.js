import React from 'react';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


export default function PlanetComment() {

    // define userComment through query
    // mutations to update comment

    // use state


    return !userComment ? (
        <div className='userCommentCard'>
        <Card>
        <Card.Body>User notes go here</Card.Body>
        </Card>
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
        </div>
    )
};