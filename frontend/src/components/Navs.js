import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../src/assets/psychologie.png";
const Navs = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" alt="" /> E-psy
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/Login">Sign In</Nav.Link>
            <Nav.Link href="/Register">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
