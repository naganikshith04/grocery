import React from 'react'
import {Image} from 'react-bootstrap'

import Aux from '../../../../hoc/Auxi/Auxi'
import PhoneImg from '../../../../assests/phone1.PNG'

const Phone = () => {
    return(
        <Aux>
        <p style={{
            fontSize:'30px',
            color:'#1a4d57',
            fontWeight:'bold'
        }} >Here's how it works</p>
        <div  style={{width: '100%', display: "table"}}>
            <div style={{display: "table-row"}}>
            <div style={{width: "50%",padding:'50px',
                color:'#1a4d57',
                fontSize:'30px',
                display:'table-cell'}}>
                Scroll through our app<br/>
                Order all types of groceries from<br/>
                local stores
            </div>
            
            <div style={{display:'table-cell',width:'50%'}}>
                <Image style={{
                    height:'250px',
                    paddingTop:'40px'
                }} src={PhoneImg} />
            </div>
            </div>
        </div>
    </Aux>
    )
}

export default Phone