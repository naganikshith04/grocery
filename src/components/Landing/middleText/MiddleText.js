import React, { Component } from 'react'

import {Image} from 'react-bootstrap'
import Last from '../../../assests/last.PNG'
import SearchIcon from '@material-ui/icons/Search';
import Backdrop from '../UI/Backdrop/Backdrop'

import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
class MiddleText extends Component {
    state = {
        data: null,
        search: "",
        color: ""
      }
      render(){
    return(
        <div style={{
            backgroundColor:'#F9FBFA',
            width:'100%',
            color:'#1a4d57'
        }}>
        <div className="container">
            <div style={{
                paddingTop:'100px',
                paddingBottom:'100px'
            }} className="row">
                <div className="col-sm">
                    <Image src={Last} />
                </div>
                {/* <div className="col-sm">
                One of three columns
                </div> */}
                <div style={{
                    paddingLeft:'200px',
                }} className="col-sm">
                    Ready to become a  "grocery-app"?
                    <br></br>
                    <br></br>
                    Join 'groceryApp' and get unlimited same day delivery.
                    
                    Explore premium membership plans from <a href='/'>Plans</a> 
                    <br></br><br></br>
                    <MDBCol md="12">
                    <MDBFormInline className="md-form mr-auto mb-4">
                    <span >
                        <SearchIcon  color='primary' />
                    </span><input   
                        style={{
                            borderRadius:'20px'
                        }} className="form-control" type="text" placeholder="Enter your zip code" aria-label="Search" />
                        <MDBBtn style={{
                            color:'white',
                            backgroundColor:'#1F2A48',
                            margin:'15px'
                        }} rounded size="md" type="submit" className="mr-auto">
                         Get started
                        </MDBBtn>
                        <Backdrop />
                        </MDBFormInline>
                    </MDBCol>
                </div>
            </div>
            </div>


        </div>
    )
}   
}

export default MiddleText