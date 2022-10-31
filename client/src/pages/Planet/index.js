import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import PlanetSounds from './planetSounds';
import { useParams } from 'react-router-dom';
import './Planet.css';

// COMPONENTS
import PlanetFacts from './PlanetFacts';
// import Moons from './Moons';
import PlanetComment from './PlanetComment';


import { useQuery } from '@apollo/client';
import { QUERY_PLANET } from '../../utils/queries';

// get props from app.js when user selects a planet
// export default function Planet(planet) {

//     // !
//     const { loading, data } = useQuery(QUERY_PLANET);
//     // userData is data pulled from users or empty object
//     const planetData = data?.planet || {};

//     const audio = new Audio('./assets/earthSound.mp3');

//     const start = () => {
//         audio.play();
//     }


export default function Planet() {
    const {planetname} = useParams();

    return (
        <div className='planetContainer'>
            <Card className='planet-name-card'>
                <Card.Body className='planet-name-body'>
                    <Card.Subtitle className="mb-2 text-muted planet-body-type">PLANET</Card.Subtitle>
                    <Card.Title className='planet-name'>SATURN</Card.Title>
                </Card.Body>
            </Card>
            {/* insert planet image */}
            {/* pass through planet data */}
            {/* <PlanetFacts
                planet={planet}/> */}
            {/* <Moon
                planet={planet}/> */}
            {/* add comment textbox,  */}

            {/* <PlanetComment
            planet={planet}/> */}

            {/* <PlanetComment/> */}
        {/* <PlanetSounds planet={planetname} /> */}
        {/* test comments */}
            <PlanetComment/>

        </div>

    )
};




