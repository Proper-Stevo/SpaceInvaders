import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Planet from './pages/Planet'


import './App.css';

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import * as THREE from "three";
// import planetData from "./planetData";

import "./styles.css";
// import NotFoundErr from './pages/NotFoundErr';


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


// TODO: const planet = user selects a planet, get name, pass all planet data by name
// ! USER SELECTS PLANET, IF LOGGED IN.... OTHERWISE LOGIN - MODAL FROM MERN HW IN NAVBAR
// keep outside
// GET DATA ---
// import { useQuery } from '@apollo/client';
// import { QUERY_PLANET } from '../../utils/queries';

// //  PASS DATA -- add below in function App():
// const { loading, data } = useQuery(QUERY_PLANET);
// const planet = data?.planet || {};
//  <Planet planet={planet}/>



export default function App() {
  const navigate = useNavigate();
  return (
    <ApolloProvider client={client}>


      <Navbar />
      <div style={{ width: "100vw", height: "100vh" }}>


        <Routes>
          <Route
            path="/"
            element={<Home nav={navigate} />}
          />
          <Route
            path="/planet/:planetname"
            element={<Planet />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          {/* {/* ADD A 404 PAGE?? (PREMADE) */}
          <Route
            path='*'
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>

      </div>

    </ApolloProvider>
  );
}

