import React, { useState } from "react";
import ReactDOM from "react-dom";
// import throttle from "lodash/throttle";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CartIcon from '@material-ui/icons/ShoppingCartRounded';

// import {Nav,Navbar} from 'react-bootstrap'
import {Navbar,Nav,Button} from 'react-bootstrap'

function Header() {
  const [change, setChange] = useState(false);
  const changePosition = 500;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "#1BAD96" : "transparent",
    transition: "400ms ease",
    height: "60px",
    position: "fixed",
    right: 0,
    left: 0,
    top: 0
  };

  return (
    <div style={style}>
      {/* <h1>Logo</h1> */}
    </div>
  );
}

function Spacer() {
  let style = {
    height: "200vh"
  };

  return <div style={style} />;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar fixed="top" style={{
        backgroundColor: window.scrollY > 10 ? "white" : "transparent",
        color:'#1a4d57',
        // backgroundColor:'#1BAD96',
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
      <Spacer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default Header