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



export default function PlanetFacts() {

    const { planetname } = useParams()
    console.log(planetname)

    //  PASS DATA -- add below in function App():
    const { loading, data } = useQuery(QUERY_PLANET, {
        variables: { name: `${planetname}` }
    });
    console.log(data);

    const getPlanet = data?.planet || {};
    console.log(getPlanet);

    if (loading) {
        return <div>loading...</div>
    }
    return (
        <div>
            {/* {getPlanet.map((planet, index) => (  */}
            <Card className='planet-name-card'>
                <Card.Body className='planet-name-body'>
                    <Card.Subtitle className="mb-2 text-muted planet-body-type" >{getPlanet.bodyType}</Card.Subtitle>
                    <Card.Title className='planet-name'>{planetname}</Card.Title>
                </Card.Body>
            </Card>
            {/*  ))}  */}
            {/* insert planet image */}
            <Container className='planetFactsContainer'>
                <Row className='planet-facts-row'>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Mass</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.mass} 10^24kg</Card.Title>
                                {/* <Card.Title>{planet.mass} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Gravity</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.gravity} m/s</Card.Title>
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
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.density} kg/m^3</Card.Title>
                                {/* <Card.Title>{planet.density} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Average Temp.</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.avgTemp} K</Card.Title>
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
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.sideralOrbit} Days</Card.Title>
                                {/* <Card.Title>{planet.sideralOrbit} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Rotational Period</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.sideralRotation} hours</Card.Title>
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
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.distanceFromSun} mi.</Card.Title>
                                {/* <Card.Title>{planet.distanceFromSun} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">Earth Year Length</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.yearLength} Days</Card.Title>
                                {/* <Card.Title>{planet.yearLength} units</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};