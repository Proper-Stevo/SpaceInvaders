import React from 'react';
import Card from 'react-bootstrap/Card';

// import { useMutation } from '@apollo/client';
// MUTATION/QUERY????
// import { PLANET_FACTS } from '../utils/mutations';
// ! FIX IMPORT DATA

export default function Planet() {
    return (
        <div className='planetFactsContainer'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Mass</Card.Subtitle>
                    {/* <Card.Title>{planet.mass} units</Card.Title> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Gravity</Card.Subtitle>
                    {/* <Card.Title>{planet.gravity} units</Card.Title> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Density</Card.Subtitle>
                    {/* <Card.Title>{planet.density} units</Card.Title> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Average Temp.</Card.Subtitle>
                    {/* <Card.Title>{planet.avgTemp} units</Card.Title> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Sideral Orbit</Card.Subtitle>
                    {/* <Card.Title>{planet.sideralOrbit} units</Card.Title> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Sideral Rotation</Card.Subtitle>
                    {/* <Card.Title>{planet.sideralRotation} units</Card.Title> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Distance from Sun</Card.Subtitle>
                    {/* <Card.Title>{planet.distanceFromSun} units</Card.Title> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Year Length</Card.Subtitle>
                    {/* <Card.Title>{planet.yearLength} units</Card.Title> */}
                </Card.Body>
            </Card>
        </div>
        
    )
};