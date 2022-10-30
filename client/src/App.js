import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Login from './pages/Login'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Planet from './pages/Planet';
import './App.css';

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

//  PASS DATA -- add below in function App():
// const planet = data?.planet || {};
//  <Planet planet={planet}/>

function App() {
  return (
    <ApolloProvider client={client}>
      
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<Home/>} 
              name="home"
            />
            <Route 
              path="/planet/:planetname" 
              element={<Planet/>} 
            />
            <Route 
              path="/login" 
              element={<Login/>} 
            />
            {/* ADD A 404 PAGE?? (PREMADE) */}
            <Route 
              path='*' 
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>

      //*test
    </ApolloProvider>
  );
}

export default App;
