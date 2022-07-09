import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../public/1/mylogo.png"
import MainNav from './main-nav';
import AuthNav from './auth-nav';
import EditUser from './edit-user';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="md" variant='dark' className='navbar'>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              style={{ width: 40, height: 40, borderRadius: 5, marginRight: "0.4rem" }}
              className="d-inline-block align-top"
            />{' '}
            NeMes1s
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
      < EditUser />
    </>
  );
}

export default NavBar;