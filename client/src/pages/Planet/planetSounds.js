import React, {useState} from 'react';
import Sound from 'react-sound';

import Earth from '../../assets/earthSound.mp3';
import Jupiter from '../../assets/jupiterSound.mp3';
import Mars from '../../assets/marsSound.mp3';
import Mercury from '../../assets/mercurySound.mp3';
import Neptune from '../../assets/neptuneSound.mp3';
import Saturn from '../../assets/saturnSound.mp3';
import Uranus from '../../assets/uranusSound.mp3';
import Venus from '../../assets/venusSound.mp3';


const PlanetSounds = ({planet}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const start = () => {
        if (planet === "earth"){
            const audio = new Audio (Earth);
            audio.play();
        } else {
            audio.pause();
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
        }
        // }if (planet === "pluto"){
        //     const audio = new Audio (Pluto);
        //     audio.play();
        // }
    }
    return (
        <div>
            <button onClick={start}>Play/Pause</button>
        </div>
        
    )
};
export default PlanetSounds;