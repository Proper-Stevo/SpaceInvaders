import React from 'react';
import Card from 'react-bootstrap/Card';
import './Planet.css';


import PlanetFacts from './PlanetFacts';
// import Moons from './Moons';
import PlanetComment from './PlanetComment';


export default function Planet() {
    const audio = new Audio ('./assets/earthSound.mp3');

    const start = () => {
        audio.play();
    }

    return (
        <div className='planetContainer'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Planet</Card.Subtitle>
                    <Card.Title>Jupiter</Card.Title>
                </Card.Body>
            </Card>
            <button onClick={start}>Button</button>
            {/* insert planet image */}
            {/* <image></image> */}
            {/* insert planet facts: mass, gravity, density, avgTemp, bodytype:planet, orbital period, sideral rotation, moons(boolean), distance from sun, yearLength */}
            {/* <PlanetFacts/> */}
            {/* <Moon/> */}
            {/* add comment textbox,  */}
            <PlanetComment/>
        </div>
        
    )
};