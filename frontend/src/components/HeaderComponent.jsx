import React, { Component } from 'react';
import psychologie from '../../src/psychologie.png'
import 'bootstrap/dist/css/bootstrap.css'
import './header.css'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

class HeaderComponent extends Component {
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
       <div className='topleft'> <Navbar.Brand>
          <img src={psychologie} width="40px" height="40px" />{' '}
          E-psy
        </Navbar.Brand></div>
<div className='topRight'>
       
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse pullRight>
          <Nav >
          <Nav.Link href="/admin">Home</Nav.Link>
            <NavDropdown title="Crud">
              <NavDropdown.Item href="/doctors">Doctors</NavDropdown.Item>
              <NavDropdown.Item href="/patients">Patients</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/add-doctor">Add Doctor</NavDropdown.Item>
              <NavDropdown.Item href="/add-patient">Add Patient</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        </div>

      </Navbar>
      
      </div>
        );
    }
}

export default HeaderComponent;