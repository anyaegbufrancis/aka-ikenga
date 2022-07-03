import React from 'react';
import { Button, Container, Form, Nav, Image, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "./public/1/logo.PNG"
import Logo1 from "/root/aka-ikenga/frontend/src/public/1/image-62b986b93971ac75e2772127.png"
import Footer from './components/footer';

function App() {
  return (
    <div id="app" className="d-flex flex-column h-100">
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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Profile</Nav.Link>
              <Nav.Link href="#action2">Others</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FontAwesomeIcon icon={faCog} cursor={"pointer"} size={"2x"} inverse />
              <Image
                src={Logo1}
                style={{ width: 40, height: 40, borderRadius: 40 / 2, marginRight: "1rem", marginLeft: "1rem" }}
              />
              <Button variant="danger">Logout</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;