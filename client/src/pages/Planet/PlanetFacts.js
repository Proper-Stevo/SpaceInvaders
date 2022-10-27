import React from 'react';
import Card from 'react-bootstrap/Card';

// import { useMutation } from '@apollo/client';
// MUTATION/QUERY????
// import { PLANET_FACTS } from '../utils/mutations';

export default function Planet() {
    return (
        <div className='planetFactsContainer'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Mass</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Gravity</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Density</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Average Temp.</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Sideral Orbit</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Sideral Rotation</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Distance from Sun</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Year Length</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
        </div>
        
    )
};