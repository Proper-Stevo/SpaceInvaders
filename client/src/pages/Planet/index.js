import React from 'react';
import './Planet.css';

import PlanetFacts from './PlanetFacts';
import Moons from './Moons';
import PlanetSounds from './PlanetSounds'; // Corrected import statement

export default function PlanetContainer({ planetname }) {
    return (
        <div className='planetContainer'>
            <PlanetFacts planetname={planetname} />
            <Moons planetname={planetname} />
            <PlanetSounds planet={planetname} /> {/* Corrected prop value */}
        </div>
    );
}
