import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client';
import { QUERY_PLANET } from '../../utils/queries';
import { useParams } from 'react-router-dom';

// * IMPORT IMAGES

// ! FIX IMPORT DATA - NEED TO PASSDOWN INFO 
// !    THROUGH APP JS ONCE USERS SELECTS A PLANET



export default function Planet(planet) {

const {planetname} = useParams()

//  PASS DATA -- add below in function App():
const { loading, data } = useQuery(QUERY_PLANET, {
    variables: {name:planetname}
});
const planet = data?.planet || {};
if (loading) {
    return <div>loading...</div>
}
    return (
        <div>
            <Card className='planet-name-card'>
                <Card.Body className='planet-name-body'>
                    <Card.Subtitle className="mb-2 text-muted planet-body-type">{planet.bodyType}</Card.Subtitle>
                    <Card.Title className='planet-name'>{planet.name}</Card.Title>
                </Card.Body>
            </Card>
            {/* insert planet image */}
            <Container className='planetFactsContainer'>
                <Row className='planet-facts-row'>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Mass</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>5.68336 10^24kg</Card.Title>
                                {/* <Card.Title>{planet.mass} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Gravity</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>10.44 m/s</Card.Title>
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
                                <Card.Title className='planet-data fact-card-item'>0.6871 kg/m^3</Card.Title>
                                {/* <Card.Title>{planet.density} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Average Temp.</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>134 K</Card.Title>
                                {/* <Card.Title>{planet.avgTemp} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='planet-facts-row'>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Orbital Period</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>10759.22 Days</Card.Title>
                                {/* <Card.Title>{planet.sideralOrbit} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Rotational Period</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>10.656 hours</Card.Title>
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
                                <Card.Title className='planet-data fact-card-item'>889000000 mi.</Card.Title>
                                {/* <Card.Title>{planet.distanceFromSun} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Earth Year Length</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>10585 Days</Card.Title>
                                {/* <Card.Title>{planet.yearLength} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};