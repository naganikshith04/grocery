import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";
import "./Na.css";
import {Image } from 'react-bootstrap'
import { Button  } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

import Text from './Text/Text'
import PlayStore from '../../../assests/playstore.png'
import AppStore from '../../../assests/appstore.png'

class ClassicFormPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
        <Router>
          <div>
            {/* <Header /> */}
            {/* <NavBar /> */}
            <MDBNavbar style={{
                
            }} light expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong 
                    style={{
                        color:'#1a4d57',
                        fontSize:'22px'
                    }}
                  >Grocery</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink style={{
                        color:'#1a4d57',
                        fontSize:'21px',
                        paddingLeft:'30px'
                    }} to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink style={{
                        color:'#1a4d57',
                        fontSize:'21px'
                    }} to="#!">Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink style={{
                        color:'#1a4d57',
                        fontSize:'21px'
                    }} to="#!">Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <Button style={{
                        borderRadius:'32px',
                        color:'#7A9C99',
                        border:'1px solid #1a4d57',
                        padding:'7px',
                        paddingLeft:'15px',
                        paddingRight:'17px',
                    }}>Login</Button>
                    <Button style={{
                        marginLeft:'18px',
                        color:'white',
                        backgroundColor:"#1a4d57",
                        borderRadius:'32px',
                        padding:'7px',
                        paddingLeft:'17px',
                        paddingRight:'17px',
                    }}>Signup</Button>
                      {/* </MDBFormInline> */}
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 style={{
                      paddingTop:'50px',
                      color:'##1F2A48'
                  }} className="h1-responsive font-weight-bold">
                    Bring the store <br/>
                    to you door
                  </h1>
                  <hr className="hr-light" />
                  <h6 style={{
                      color:'##1F2A48',
                      fontSize:'20px'
                  }} className="mb-4">
                      Order from local store you trust
                      <br/>
                      download our app from
                      <br/>
                      <a href="http://www.google.com" >
                        <Image src={PlayStore}/>
                      </a>
                      <a style={{
                        margin:'20px'
                      }} href="http://www.google.com">
                        <Image src={AppStore}/>
                      </a>
                  </h6>
                  
                </MDBAnimation>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
                <Text />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ClassicFormPage;