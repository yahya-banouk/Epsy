import React, { Component } from 'react';
import logo from '../../src/assets/psychologie.png'
import 'bootstrap/dist/css/bootstrap.css'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

class Header extends Component {
   constructor(props){
    super(props)
    this.state = {

    }
   }
   
    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" alt='' />{' '}
          E-psy
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/Login">Sign In</Nav.Link>
            <Nav.Link href="/Register">Sign Up</Nav.Link>
            

          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
      </div>
        );
    }
}

export default Header;