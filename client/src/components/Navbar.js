// show login/logout conditional
// click on notes/comments in navbar, then see a list of comments associated with planets, takes you to planet page with comment

import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Row} from 'react-bootstrap';

import SignUpForm from '../pages/Signup';
import LoginForm from '../pages/Login';
import './Navbar.css'

import Auth from '../utils/auth';

export default function Navigation() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>

      <Navbar className='nav-container'>
        <Container fluid>
          <Navbar.Brand className='nav-title' as={Link} to='/' style={{fontSize: "45px", fontWeight:"bold", color:"whitesmoke"}}>
            ORBITAL ODYSSEY
          </Navbar.Brand>
            <Nav className='ml-auto row row-cols-auto'>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <Row>
                  <Nav.Link className="planet-link col" as={Link} to='/planet/earth' style={{color:"whitesmoke"}} >
                    Earth
                  </Nav.Link>
                  <Nav.Link className="planet-link col" as={Link} to='/planet/mercury' style={{color:"whitesmoke"}} >
                    Mercury
                  </Nav.Link>
                  <Nav.Link className="planet-link col" as={Link} to='/planet/jupiter' style={{color:"whitesmoke"}}>
                    Jupiter
                  </Nav.Link>
                  <Nav.Link className="planet-link col" as={Link} to='/planet/mars' style={{color:"whitesmoke"}}>
                    Mars
                  </Nav.Link>
                  <Nav.Link className="planet-link col" as={Link} to='/planet/neptune' style={{color:"whitesmoke"}}>
                    Neptune
                  </Nav.Link>
                  <Nav.Link className="planet-link col" as={Link} to='/planet/saturn' style={{color:"whitesmoke"}}>
                    Saturn
                  </Nav.Link>
                  <Nav.Link className="planet-link col" as={Link} to='/planet/venus' style={{color:"whitesmoke"}}>
                    Venus
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout} style={{color:"whitesmoke"}}>
                    Logout
                  </Nav.Link>                   
                </Row>
              ) : (
                <Nav.Link className='login-home-link' onClick={() => setShowModal(true)} style={{color:"whitesmoke"}}>Login/Sign Up</Nav.Link>
              )} 
            </Nav>
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
                  <Nav.Link className="nav-login" eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-login"eventKey='signup'>Sign Up</Nav.Link>
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