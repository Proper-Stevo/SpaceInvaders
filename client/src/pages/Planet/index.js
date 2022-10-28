import React from 'react';
import Card from 'react-bootstrap/Card';
import './Planet.css';

// COMPONENTS
import PlanetFacts from './PlanetFacts';
// import Moons from './Moons';
import PlanetComment from './PlanetComment';

import { useQuery } from '@apollo/client';
import { QUERY_PLANET } from '../../utils/queries';


export default function Planet(planet) {

    const { loading, data } = useQuery(QUERY_PLANET);
    // userData is data pulled from users or empty object
    const planetData = data?.planet || {};

    const audio = new Audio('./assets/earthSound.mp3');

    const start = () => {
        audio.play();
    }

    return (
        <div className='planetContainer'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Planet</Card.Subtitle>
                    <Card.Title>{planetData.name}</Card.Title>
                </Card.Body>
            </Card>
            <button onClick={start}>Button</button>
            {/* insert planet image */}
            {/* <image></image> */}
            {/* insert planet facts: mass, gravity, density, avgTemp, bodytype:planet, orbital period, sideral rotation, moons(boolean), distance from sun, yearLength */}
            {/* <PlanetFacts/> */}
            {/* <Moon/> */}
            {/* add comment textbox,  */}
            <PlanetComment
            planet={planet}/>
        </div>

    )
};