import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../public/1/logo.PNG"
import MainNav from './main-nav';
import AuthNav from './auth-nav';
import Footer from './footer';
import ProtectedRoute from "../auth/protected-route"
import { Home, Profile, ExternalApi } from "../views";
import { Route, Switch } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="md" fixed="top" variant='dark'>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              style={{ width: 35, height: 35, borderRadius: 5, marginRight: "0.4rem" }}
              className="d-inline-block align-top"
            />{' '}
            AKA-IKENGA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <MainNav />
            </Nav>
            <AuthNav />
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;