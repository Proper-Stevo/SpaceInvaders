import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Image from 'react-bootstrap/Image'

import { useQuery } from '@apollo/client';
import { QUERY_PLANET } from '../../utils/queries';
import { useParams } from 'react-router-dom';

import earth from '../../assets/images/display-earth.png';
import jupiter from '../../assets/images/display-jupiter.png';
import mars from '../../assets/images/display-mars.png';
import mercury from '../../assets/images/display-mercury.png';
import neptune from '../../assets/images/display-neptune.png';
import pluto from '../../assets/images/display-pluto.png';
import saturn from '../../assets/images/display-saturn.png';
import uranus from '../../assets/images/display-uranus.png';
import venus from '../../assets/images/display-venus.png';



// import displayPhoto from '../../assets/images'


// * IMPORT PLANET IMAGES

export default function PlanetFacts() {

    const { planetname } = useParams()
    const upper = planetname.toUpperCase();

    const { loading, data } = useQuery(QUERY_PLANET, {
        variables: { name: `${planetname}` }
    });

    const getPlanet = data?.planet || {};

    let currentPlanet = planetname;

    function DisplayPlanet() {
        if (currentPlanet == "earth") {
            return <img src={earth} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px"  }} className="planet-page-photo"/>
        } else if (currentPlanet == "mars") {
            return <img src={mars} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px" }} className="planet-page-photo" />
        } else if (currentPlanet == "mercury") {
            return <img src={mercury} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px"  }} className="planet-page-photo" />
        } else if (currentPlanet == "neptune") {
            return <img src={neptune} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px"  }} className="planet-page-photo" />
        } else if (currentPlanet == "pluto") {
            return <img src={pluto} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px"  }} className="planet-page-photo" />
        } else if (currentPlanet == "saturn") {
            return <img src={saturn} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px"  }} className="planet-page-photo" />
        } else if (currentPlanet == "uranus") {
            return <img src={uranus} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px"  }} className="planet-page-photo" />
        } else if (currentPlanet == "venus") {
            return <img src={venus} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px"  }} className="planet-page-photo" />
        } else if (currentPlanet == "jupiter") {
            return <img src={jupiter} alt={`${upper}`} style={{ color: 'whitesmoke', width: "300px", height: "300px"  }} className="planet-page-photo" />
        }
    }

    if (loading) {
        return <h2>LOADING...</h2>
    }

    return (
        <div>
            <Row>
                <Card className='planet-name-card' style={{ paddingBottom: "0%", margin: "50px 75px 50px 100px", backgroundColor: "rgba(218, 223, 225, .6)", height: "80px" }}>
                    <Card.Body className='planet-name-body' style={{ padding: "7px 10px 7px 10px" }}>
                        <Card.Subtitle className="mb-2 planet-body-type" style={{ color: "#e8ecf1" }}>{getPlanet.bodyType}</Card.Subtitle>
                        <Card.Title className='planet-name' style={{ fontSize: "30px", fontWeight: "500", padding: "0px" }}>{upper}</Card.Title>
                    </Card.Body>
                </Card>
                {/* insert planet image */}
                <DisplayPlanet/>
                {/* <img src={`${planetname}`} alt={`${upper}`} style={{color: 'whitesmoke'}}/> */}
                <Container className='planetFactsContainer' style={{ width: "400px", marginRight: "100px" }} fluid>
                    <Row className='planet-facts-row ms-auto'>
                        <Col className='planet-fact-col'>
                            <Card className='planet-fact-card' style={{ backgroundColor: "rgba(218, 223, 225, .6)" }}>
                                <Card.Body className='planet-fact-body'>
                                    <Card.Subtitle className="mb-2 fact-card-item" style={{ color: "#e8ecf1" }}>MASS</Card.Subtitle>
                                    <Card.Title className='planet-data fact-card-item' style={{ fontSize: "22px", fontWeight: "bold" }}>{getPlanet.mass} 10^24kg</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='planet-fact-col'>
                            <Card className='planet-fact-card' style={{ backgroundColor: "rgba(218, 223, 225, .6)" }}>
                                <Card.Body className='planet-fact-body'>
                                    <Card.Subtitle className="mb-2 fact-card-item" style={{ color: "#e8ecf1" }}>GRAVITY</Card.Subtitle>
                                    <Card.Title className='planet-data fact-card-item' style={{ fontSize: "22px", fontWeight: "bold" }}>{getPlanet.gravity} m/s</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='planet-facts-row ms-auto'>
                        <Col className='planet-fact-col'>
                            <Card className='planet-fact-card' style={{ backgroundColor: "rgba(218, 223, 225, .6)" }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 fact-card-item" style={{ color: "#e8ecf1" }}>DENSITY</Card.Subtitle>
                                    <Card.Title className='planet-data fact-card-item' style={{ fontSize: "22px", fontWeight: "bold" }}>{getPlanet.density} kg/m^3</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='planet-fact-col'>
                            <Card className='planet-fact-card' style={{ backgroundColor: "rgba(218, 223, 225, .6)" }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 fact-card-item" style={{ color: "#e8ecf1" }}>AVG TEMP</Card.Subtitle>
                                    <Card.Title className='planet-data fact-card-item' style={{ fontSize: "22px", fontWeight: "bold" }}>{getPlanet.avgTemp} K</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='planet-facts-row ms-auto'>
                        <Col className='planet-fact-col'>
                            <Card className='planet-fact-card' style={{ backgroundColor: "rgba(218, 223, 225, .6)" }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 fact-card-item" style={{ color: "#e8ecf1" }}>ORBITAL PERIOD</Card.Subtitle>
                                    <Card.Title className='planet-data fact-card-item' style={{ fontSize: "22px", fontWeight: "bold" }}>{getPlanet.sideralOrbit} DAYS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='planet-fact-col'>
                            <Card className='planet-fact-card' style={{ backgroundColor: "rgba(218, 223, 225, .6)" }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 fact-card-item" style={{ color: "#e8ecf1" }}>ROTATIONAL PERIOD</Card.Subtitle>
                                    <Card.Title className='planet-data fact-card-item' style={{ fontSize: "22px", fontWeight: "bold" }}>{getPlanet.sideralRotation} HOURS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='planet-facts-row ms-auto'>
                        <Col className='planet-fact-col'>
                            <Card className='planet-fact-card' style={{ backgroundColor: "rgba(218, 223, 225, .6)" }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 fact-card-item" style={{ color: "#e8ecf1" }}>DISTANCE FROM SUN</Card.Subtitle>
                                    <Card.Title className='planet-data fact-card-item' style={{ fontSize: "22px", fontWeight: "bold" }}>{getPlanet.distanceFromSun} mi.</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='planet-fact-col'>
                            <Card className='planet-fact-card' style={{ backgroundColor: "rgba(218, 223, 225, .6)" }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 fact-card-item" style={{ color: "#e8ecf1" }}>YEAR LENGTH</Card.Subtitle>
                                    <Card.Title className='planet-data fact-card-item' style={{ fontSize: "22px", fontWeight: "bold" }}>{getPlanet.yearLength} DAYS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </div>
    )
};

