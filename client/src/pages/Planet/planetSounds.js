
import React, { Component, useState } from 'react';

import Planet from '.';

import Earth from '../../assets/sounds/earthSound.mp3';
import Jupiter from '../../assets/sounds/jupiterSound.mp3';
import Mars from '../../assets/sounds/marsSound.mp3';
import Mercury from '../../assets/sounds/mercurySound.mp3';
import Neptune from '../../assets/sounds/neptuneSound.mp3';
import Saturn from '../../assets/sounds/saturnSound.mp3';
import Uranus from '../../assets/sounds/uranusSound.mp3';
import Venus from '../../assets/sounds/venusSound.mp3';
import '../../pages/Planet/Planet.css'

// import Sound from 'react-sound';

const PlanetSounds = ({planet}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    function handleToggleAudio () {
        setIsPlaying(!isPlaying)
        if (isPlaying) {
            start();
        } else {
            stop();
        }
    }
    const start = () => {
        if (planet === "earth" && isPlaying){
            const audio = new Audio (Earth);
            audio.play();
        } 
        if (planet === "mars"){
            const audio = new Audio (Mars);
            audio.play();
        }
        if (planet === "jupiter"){
            const audio = new Audio (Jupiter);
            audio.play();
        }
        if (planet === "mercury"){
            const audio = new Audio (Mercury);
            audio.play();
        }
        if (planet === "neptune"){
            const audio = new Audio (Neptune);
            audio.play();
        }if (planet === "saturn"){
            const audio = new Audio (Saturn);
            audio.play();
        }if (planet === "uranus"){
            const audio = new Audio (Uranus);
            audio.play();
        }if (planet === "venus"){
            const audio = new Audio (Venus);
            audio.play();
        }if (planet === "pluto"){
            const audio = new Audio (Pluto);
            audio.play();
        }
    }

//     // const stop = () => {
//     //     if (planet === "earth"){
//     //         const audio = new Audio (Earth);
//     //         audio.pause();
//     //     } 
//     //     if (planet === "mars"){
//     //         const audio = new Audio (Mars);
//     //         audio.pause();
//     //     }
//     //     if (planet === "jupiter"){
//     //         const audio = new Audio (Jupiter);
//     //         audio.pause();
//     //     }
//     //     if (planet === "mercury"){
//     //         const audio = new Audio (Mercury);
//     //         audio.pause();
//     //     }
//     //     if (planet === "neptune"){
//     //         const audio = new Audio (Neptune);
//     //         audio.pause();
//     //     }if (planet === "saturn"){
//     //         const audio = new Audio (Saturn);
//     //         audio.pause();
//     //     }if (planet === "uranus"){
//     //         const audio = new Audio (Uranus);
//     //         audio.pause();
//     //     }if (planet === "venus"){
//     //         const audio = new Audio (Venus);
//     //         audio.pause();
//     //     }
//     // }
    return (
        <div>
            <button 
            onClick={handleToggleAudio} id='planetBtn'>
                Play/Pause</button>
        </div>

    )
    }


export default PlanetSounds;
