// solar system
import React, { Suspense } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

import { applyProps, Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import * as THREE from "three";
import planetData from "../../planetData";
import "../../styles.css";
import { TextureLoader } from "three";
import sun from '../../assets/images/sun.jpg'
import mercury from '../../assets/images/mercury.jpg'
import venus from '../../assets/images/venus.jpg'
import earth from '../../assets/images/earth.jpg'
import mars from '../../assets/images/mars.jpg'
import saturn from '../../assets/images/saturn.jpg'
import uranus from '../../assets/images/uranus.jpg'
import neptune from '../../assets/images/neptune.jpg'
import pluto from '../../assets/images/pluto.jpg'
import jupiter from '../../assets/images/jupiter.jpg'



export default function Home(props) {
  return (
    <>
      <Canvas flat linear camera={{ position: [0, 40, 25], fov: 100 }}>
        < Suspense fallback={<> loading... </>} >
          <Sun />
        </Suspense>
        <Sky />
        <Stars />
        {planetData.map((planet, index) => (
          //    <Link to = {`/${planet.path}`} >
          <Suspense fallback={<> loading... </>} >
            <Planet planet={planet} key={index} nav={props.nav}/>
          </Suspense>
          // </Link>
        ))}
        <Lights />
        <OrbitControls />
      </Canvas>
    </>
  )
};


// const name = (planet) => `../assets/images/sun.jpg`;


function Sun() {
  const colormap = useLoader(TextureLoader, sun)
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial
        map={colormap}
      />
      {/* < PlanetWraps planet={sun} /> */}
    </mesh>
  );
}

function Planet({ planet: { img, xRadius, zRadius, size, path }, nav }) {

  const randomNum = Math.random();
  const planetRef = React.useRef();
  console.log(img)
  if (path === "mercury") {
    img = mercury
  } else if (path === "venus") {
    img = venus
  } else if (path === "earth") {
    img = earth
  } else if (path === "mars") {
    img = mars
  } else if (path === "jupiter") {
    img = jupiter
  } else if (path === "saturn") {
    img = saturn
  } else if (path === "uranus") {
    img = uranus
  } else if (path === "neptune") {
    img = neptune
  } else if (path === "pluto") {
    img = pluto
  }
  useFrame(({ clock }) => {
    const t = randomNum / 2 * clock.getElapsedTime();
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });
  const planetMaps = useLoader(TextureLoader, img)
  return (
    <>

      <mesh ref={planetRef} onClick={() => {
        console.log(`hit ${path}`)
        // return document.location.replace(`/planet/${path}`)
        // console.log(nav())
        return nav(`/planet/${path}`)
        //add link her

      }}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          map={planetMaps}
        />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}