import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
// import Planet from './pages/Planet';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import * as THREE from "three";
import planetData from "./planetData";
import "./styles.css";
import img from './assets/images/sun.jpg';
import Mercury from './components/Mercury';




// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});











export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
    <>
      <Canvas camera={{ position: [20, 80, 35], fov: 45 }}>
        <Sun />
        {/* <Mercury /> */}
        <Sky />
        <Stars />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
      </Canvas>
    </>
    </Router>
    </ApolloProvider>
  );
}
function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="orangered" />
    </mesh>
  );
}













function Planet({ planet: { color, xRadius, zRadius, size } }) {
  const randomNum = Math.random();
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = randomNum * clock.getElapsedTime();
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
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