
import React, { Component, useState, useEffect } from 'react';

import Earth from '../../assets/sounds/earthSound.mp3';
import Jupiter from '../../assets/sounds/jupiterSound.mp3';
import Mars from '../../assets/sounds/marsSound.mp3';
import Mercury from '../../assets/sounds/mercurySound.mp3';
import Neptune from '../../assets/sounds/neptuneSound.mp3';
import Saturn from '../../assets/sounds/saturnSound.mp3';
import Uranus from '../../assets/sounds/uranusSound.mp3';
import Venus from '../../assets/sounds/venusSound.mp3';
import '../../pages/Planet/Planet.css'

const PlanetSounds = ({ planet }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioInstance, setAudioInstance] = useState(null);

    useEffect(() => {
        return () => {
            if (audioInstance) {
                audioInstance.pause();
            }
        };
    }, [audioInstance]);

    const handleToggleAudio = () => {
        console.log("Toggle Audio Clicked");
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            start();
        } else {
            stop();
        }
    };


    const start = () => {
        console.log("Planet:", Earth);
        let audio = null;

        switch (planet) {
            case 'earth':
                audio = new Audio(Earth);
                break;
            case 'jupiter':
                audio = new Audio(Jupiter);
                break;
            case 'mars':
                audio = new Audio(Mars);
                break;
            case 'mercury':
                audio = new Audio(Mercury);
                break;
            case 'venus':
                audio = new Audio(Venus);
                break;
            case 'saturn':
                audio = new Audio(Saturn);
                break;
            case 'uranus':
                audio = new Audio(Uranus);
                break;
            case 'neptune':
                audio = new Audio(Neptune);
                break;
            default:
                break;
        }

        if (audio) {
            audio.play();
            setAudioInstance(audio);
        }
    };

    const stop = () => {
        if (audioInstance) {
            audioInstance.pause();
            setAudioInstance(null);
        }
    };

    return (
        <div>
            <button onClick={handleToggleAudio} id='planetBtn'>
                Play/Pause
            </button>
        </div>
    );
};

export default PlanetSounds;
