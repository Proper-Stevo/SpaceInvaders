import React from 'react';
import Card from 'react-bootstrap/Card';
import './Planet.css';

// COMPONENTS
import PlanetFacts from './PlanetFacts';
// import Moons from './Moons';
import PlanetComment from './PlanetComment';

import { useQuery } from '@apollo/client';
import { QUERY_PLANET } from '../../utils/queries';

// get props from app.js when user selects a planet
export default function Planet(planet) {

    // !
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
                    <Card.Subtitle className="mb-2 text-muted">{planetData.bodyType}</Card.Subtitle>
                    <Card.Title>{planetData.name}</Card.Title>
                </Card.Body>
            </Card>
            <button onClick={start}>Button</button>
            {/* insert planet image */}
            {/* pass through planet data */}
            {/* <PlanetFacts
                planet={planet}/> */}
            {/* <Moon
                planet={planet}/> */}
            {/* add comment textbox,  */}
            <PlanetComment
            planet={planet}/>
        </div>

    )
};