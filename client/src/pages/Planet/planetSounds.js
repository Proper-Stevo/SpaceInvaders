import React, {useState} from 'react';
import Sound from 'react-sound';

import Earth from '../../assets/earthSound.mp3';
// import Jupiter from './assets/jupiterSound.mp3';
import Mars from '../../assets/marsSound.mp3';
// import Mercury from './assets/mercurySound.mp3';
// import Neptune from './assets/neptuneSound.mp3';
// import Saturn from './assets/saturnSound.mp3';
// import Uranus from './assets/uranusSound.mp3';
// import Venus from './assets/venusSound.mp3';


const PlanetSounds = ({planet}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const start = () => {
        if (planet === "earth"){
            const audio = new Audio (Earth);
            audio.play();
        }
        if (planet === "mars"){
            const audio = new Audio (Mars);
            audio.play();
        }
    }
    return (
        <div>
            <button onClick={start}>Play</button>
        </div>
        
    )
};
export default PlanetSounds;