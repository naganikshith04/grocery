import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import {Nav,Navbar} from 'react-bootstrap'
import {Navbar,Nav} from 'react-bootstrap'

function NavBar() {
    return (
      <Navbar fixed="top"  style={{
        color:'white',
      }} bg="primary" expand="lg">
        <Navbar.Brand style={{
        color:'white',
      }} href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav.Link style={{
            color:'white',
          }} href="/home">Home</Nav.Link>
            <Nav.Link style={{
              color:'white',
            }} href="/link">Link</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    
    )
  }
  
  export default NavBar