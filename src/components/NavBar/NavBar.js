import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Nav,Navbar} from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar style={{
            
        }} bg="primary" variant="dark">
        <Navbar.Brand href="home">Groceries</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="features">Features</Nav.Link>
          <Nav.Link href="pricing">Pricing</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
      </Navbar>
    )
  }
  
  export default NavBar