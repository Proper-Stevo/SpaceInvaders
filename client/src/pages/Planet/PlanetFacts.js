import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// ! FIX IMPORT DATA - NEED TO PASSDOWN INFO 
// !    THROUGH APP JS ONCE USERS SELECTS A PLANET

export default function Planet(planet) {



    return (
        <div>
            <Card className='planet-name-card'>
                <Card.Body className='planet-name-body'>
                    <Card.Subtitle className="mb-2 text-muted planet-body-type">PLANET</Card.Subtitle>
                    <Card.Title className='planet-name'>SATURN</Card.Title>
                </Card.Body>
            </Card>
            {/* insert planet image */}
            <Container className='planetFactsContainer'>
                <Row className='planet-facts-row'>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Mass</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>5.68336 units</Card.Title>
                                {/* <Card.Title>{planet.mass} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Gravity</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>10.44 units</Card.Title>
                                {/* <Card.Title>{planet.gravity} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='planet-facts-row'>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Density</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>0.6871 units</Card.Title>
                                {/* <Card.Title>{planet.density} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Average Temp.</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>134 units</Card.Title>
                                {/* <Card.Title>{planet.avgTemp} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='planet-facts-row'>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Sideral Orbit</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>10759.22 units</Card.Title>
                                {/* <Card.Title>{planet.sideralOrbit} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Sideral Rotation</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>10.656 units</Card.Title>
                                {/* <Card.Title>{planet.sideralRotation} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='planet-facts-row'>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Distance from Sun</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>889000000 units</Card.Title>
                                {/* <Card.Title>{planet.distanceFromSun} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Year Length</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>10585 units</Card.Title>
                                {/* <Card.Title>{planet.yearLength} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};