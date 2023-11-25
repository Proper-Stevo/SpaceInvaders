import React from 'react';
import './Planet.css';

//* COMPONENTS---------------------------
import PlanetFacts from './PlanetFacts';
import Moons from './Moons';
// import PlanetComment from './PlanetComment';
import PlanetSounds from './planetSounds';

export default function PlanetContainer(planetname) {


    return (
        <div className='planetContainer'>
            <PlanetFacts planetname={planetname}/>
            <Moons planetname={planetname}/>
            {/* <PlanetComment planetname={planetname} /> */}
            <PlanetSounds planet="earth" />
        </div>

    );
};

