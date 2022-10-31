// show login/logout conditional
// click on notes/comments in navbar, then see a list of comments associated with planets, takes you to planet page with comment

import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../pages/Signup';
import LoginForm from '../pages/Login';
import './Navbar.css'


import Auth from '../utils/auth';

export default function Navigation () {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Navbar className='navbar'>
      <Container className='nav-container' fluid>
        <Navbar.Brand as={Link} to='/' className='nav-title'>
          ORBITAL ODYSSEY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar' bsPrefix='navbar-collapse'>
          <Nav className='ml-auto'>
            {/* add 404 page */}
            {/* <Route 
              path='*' 
              element={<NotFound>}
            /> */}
            {/* <Nav.Link as={Link} to='*'>
              Planets
            </Nav.Link> */}
            {/* if user is logged in show saved books and logout */}
            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to='/planet/:planet.name' element={<Planet planet={planet}/>}>
                  Planet
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link className='login-home-link' onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    {/* set modal data up */}
    <Modal
      size='lg'
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby='signup-modal'>
      {/* tab container to do either signup or login component */}
      <Tab.Container defaultActiveKey='login'>
        <Modal.Header closeButton>
          <Modal.Title id='signup-modal'>
            <Nav variant='pills'>
              <Nav.Item>
                <Nav.Link eventKey='login'>Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Content>
            <Tab.Pane eventKey='login'>
              <LoginForm handleModalClose={() => setShowModal(false)} />
            </Tab.Pane>
            <Tab.Pane eventKey='signup'>
              <SignUpForm handleModalClose={() => setShowModal(false)} />
            </Tab.Pane>
          </Tab.Content>
        </Modal.Body>
      </Tab.Container>
    </Modal>
  </>
  );
};