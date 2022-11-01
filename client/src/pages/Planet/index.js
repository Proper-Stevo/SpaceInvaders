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
import planetSounds from './planetSounds';

export default function Planet(planet) {


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

            <PlanetComment
                planet={planet} />
            <PlanetSounds planet={planetname} />
            {/* <PlanetSounds planet={planetname} /> */}
            <PlanetComment />
        </div>

    );
};

