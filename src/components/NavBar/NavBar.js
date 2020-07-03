import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import {Nav,Navbar} from 'react-bootstrap'
import {Navbar,Nav} from 'react-bootstrap'

function NavBar() {
    return (
      //   <Navbar style={{
            
      //   }} bg="primary" variant="dark">
      //   <Navbar.Brand href="home">Groceries</Navbar.Brand>
      //   <Nav className="mr-auto">
      //     <Nav.Link href="home">Home</Nav.Link>
      //     <Nav.Link href="features">Features</Nav.Link>
      //     <Nav.Link href="pricing">Pricing</Nav.Link>
      //   </Nav>
      //   {/* <Form inline>
      //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //     <Button variant="outline-light">Search</Button>
      //   </Form> */}
      // </Navbar>
    
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