import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import PlanetSounds from './planetSounds';
import { useParams } from 'react-router-dom';
import moonImg from '../../assets/images/moon-img.png';

import './Planet.css';

//* COMPONENTS---------------------------
import PlanetFacts from './PlanetFacts';
// import Moons from './Moons';
import PlanetComment from './PlanetComment';
import PlanetSounds from './planetSounds';


import { useQuery } from '@apollo/client';
import { QUERY_PLANET } from '../../utils/queries';

// get props from app.js when user selects a planet
// export default function Planet(planet) {

//     // !
//     const { loading, data } = useQuery(QUERY_PLANET);
//     // userData is data pulled from users or empty object
//     const planetData = data?.planet || {};

export default function Planet(planet) {

    const { planetname } = useParams();

    return (
        <div className='planetContainer'>
            {/* pass through planet data */}
            <PlanetFacts />
            <div className='moon-container'>
            <Card className="bg-dark text-white my-5 moon-display">
                <Card.Img className="moon-img" src={moonImg} alt="Card image" />
                <Card.ImgOverlay className="overlay">
                    <Card.Title className='moon-name'>Moon Name</Card.Title>
                </Card.ImgOverlay>
            </Card>
            </div>
            {/* <Moon
                planet={planet}/> */}
            {/* <PlanetSounds planet={planetname} /> */}
            <PlanetComment />


        </div>

    );
};

