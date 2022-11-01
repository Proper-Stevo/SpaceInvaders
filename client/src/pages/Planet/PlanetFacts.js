import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client';
import { QUERY_PLANET } from '../../utils/queries';
import { useParams } from 'react-router-dom';


// * IMPORT PLANET IMAGES

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
        return <h2>LOADING...</h2>
    }
    return (
        <div>
            <Card className='planet-name-card' style={{paddingBottom:"0%", margin:"50px 50px 50px 75px",}}>
                <Card.Body className='planet-name-body' style={{padding:"7px 10px 7px 10px"}}>
                    <Card.Subtitle className="mb-2 text-muted planet-body-type" >{getPlanet.bodyType}</Card.Subtitle>
                    <Card.Title className='planet-name' style={{fontSize: "30px", padding:"0px"}}>{planetname}</Card.Title>
                </Card.Body>
            </Card>
            {/* insert planet image */}
            <Container className='planetFactsContainer' style={{width:"400px"}} fluid>
                <Row className='planet-facts-row ms-auto'>
                    <Col className='planet-fact-col'>
                        <Card className='planet-fact-card'>
                            <Card.Body className='planet-fact-body'>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">MASS</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.mass} 10^24kg</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='planet-fact-col'>
                        <Card className='planet-fact-card'>
                            <Card.Body  className='planet-fact-body'>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">GRAVITY</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.gravity} m/s</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='planet-facts-row ms-auto'>
                    <Col className='planet-fact-col'>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">DENSITY</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.density} kg/m^3</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='planet-fact-col'>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">AVG TEMP</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.avgTemp} K</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='planet-facts-row ms-auto'>
                    <Col className='planet-fact-col'>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">ORBITAL PERIOD</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.sideralOrbit} DAYS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='planet-fact-col'>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">ROTATIONAL PERIOD</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.sideralRotation} HOURS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='planet-facts-row ms-auto'>
                    <Col className='planet-fact-col'>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">DISTANCE FROM SUN</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.distanceFromSun} mi.</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='planet-fact-col'>
                        <Card className='planet-fact-card'>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted fact-card-item">YEAR LENGTH</Card.Subtitle>
                                <Card.Title className='planet-data fact-card-item'>{getPlanet.yearLength} DAYS</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};