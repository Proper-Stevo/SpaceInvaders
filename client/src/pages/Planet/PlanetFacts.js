import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// ! FIX IMPORT DATA - NEED TO PASSDOWN INFO 
// !    THROUGH APP JS ONCE USERS SELECTS A PLANET

export default function Planet(planet) {


    
    return (
        <Container className='planetFactsContainer'>
            <Row className='planet-facts-row'>
            <Col>
            <Card className='planet-fact-card'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Mass</Card.Subtitle>
                    <Card.Title>5.68336 units</Card.Title>
                    {/* <Card.Title>{planet.mass} units</Card.Title> */}
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='planet-fact-card'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Gravity</Card.Subtitle>
                    <Card.Title>10.44 units</Card.Title>
                    {/* <Card.Title>{planet.gravity} units</Card.Title> */}
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='planet-fact-card'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Density</Card.Subtitle>
                    <Card.Title>0.6871 units</Card.Title>
                    {/* <Card.Title>{planet.density} units</Card.Title> */}
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='planet-fact-card'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Average Temp.</Card.Subtitle>
                    <Card.Title>134 units</Card.Title>
                    {/* <Card.Title>{planet.avgTemp} units</Card.Title> */}
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row className='planet-facts-row'>
            <Col>
            <Card className='planet-fact-card'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Sideral Orbit</Card.Subtitle>
                    <Card.Title>10759.22 units</Card.Title>
                    {/* <Card.Title>{planet.sideralOrbit} units</Card.Title> */}
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='planet-fact-card'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Sideral Rotation</Card.Subtitle>
                    <Card.Title>10.656 units</Card.Title>
                    {/* <Card.Title>{planet.sideralRotation} units</Card.Title> */}
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='planet-fact-card'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Distance from Sun</Card.Subtitle>
                    <Card.Title>889000000 units</Card.Title>
                    {/* <Card.Title>{planet.distanceFromSun} units</Card.Title> */}
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='planet-fact-card'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Year Length</Card.Subtitle>
                    <Card.Title>10585 units</Card.Title>
                    {/* <Card.Title>{planet.yearLength} units</Card.Title> */}
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
        
    )
};