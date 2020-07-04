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
  MDBAnimation
} from "mdbreact";
import "./Na.css";
import { Button } from "@material-ui/core";

import Text from './Text' 

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
                      {/* <MDBFormInline waves> */}
                      <Button style={{
                        // backgroundColor:"#F0FCED",
                        borderRadius:'32px',
                        color:'#7A9C99',
                        border:'1px solid #1a4d57',
                        // paddingLeft:'23px',
                        // paddingTop:'5px',
                        // paddingRight:'23px',
                        // paddingBottom:'7px',
                        padding:'7px',
                        paddingLeft:'15px',
                        paddingRight:'17px',
                    }}>Login</Button>
                    <Button style={{
                        marginLeft:'18px',
                        color:'white',
                        backgroundColor:"#1a4d57",
                        borderRadius:'32px',
                        // paddingLeft:'23px',
                        // paddingRight:'23px',
                        // paddingBottom:'10px',
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
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 style={{
                      paddingTop:'50px',
                      color:'#85D291'
                  }} className="h1-responsive font-weight-bold">
                    Bring the store <br/>
                    to you door
                  </h1>
                  <hr className="hr-light" />
                  <h6 style={{
                      color:'#85D291',
                      fontSize:'20px'
                  }} className="mb-4">
                      Order from local store you trust
                      <br></br>
                      <br/>
                      download our app from
                      <br/>
                      <br/>
                      <br/>

                      <Button style={{
                          paddingRight:'17px',
                          marginRight:'20px',
                          paddingLeft:'2px',
                          padding:'5px',
                          borderRadius:'21px',
                          border:'2px solid #8c9892',
                          color:'#8c9892'
                      }}>PlayStore</Button>    
                      <Button style={{
                          paddingLeft:'170spx',
                          padding:'5px',
                          borderRadius:'21px',
                          border:'2px solid #8c9892',
                          color:'#8c9892'
                      }}>AppStore</Button>
                  </h6>
                  
                </MDBAnimation>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                <Text />
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ClassicFormPage;