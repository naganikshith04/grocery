import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CartIcon from '@material-ui/icons/ShoppingCartRounded';

// import {Nav,Navbar} from 'react-bootstrap'
import {Navbar,Nav,Button} from 'react-bootstrap'
// import Button from '../UI/Button/Button'

function NavBar() {
    return (
      <Navbar fixed="top"  style={{
        color:'#1a4d57',
        backgroundColor:'#1BAD96',
      }}  expand="lg">
        <Navbar.Brand style={{
        color:'#FBFEFB',
        marginLeft:'50px',
      }} href="/home">
          <strong>Grocery</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link style={{
            color:'#1a4d57',
            fontSize:'18px'
          }} href="/home"><strong>Home</strong></Nav.Link>
          <Nav.Link style={{
            color:'#1a4d57',
            fontSize:'18px',
          }} href="/home"><strong>Find shops </strong></Nav.Link>
            </Nav>
            <Nav.Link>
              <Button style={{
                backgroundColor:"grey",
                borderRadius:'32px',
                color:'black',
                borderColor:'#1a4d57',
                paddingLeft:'23px',
                paddingRight:'23px',
                paddingBottom:'10px',
              }}>Login</Button>
              <Button style={{
                marginLeft:'18px',
                backgroundColor:"#1a4d57",
                borderRadius:'32px',
                border:'none',
                paddingLeft:'23px',
                paddingRight:'23px',
                paddingBottom:'10px',
              }}>Signup</Button>
            </Nav.Link>
            {/* <Nav.Link  style={{
              color:'white',
              marginRight:"40px"
            }} href="/link"> <CartIcon fontSize="small"  /> <strong>Cart</strong>
            </Nav.Link>
             */}
        </Navbar.Collapse>
      </Navbar>
    
    )
  }
  
  export default NavBar