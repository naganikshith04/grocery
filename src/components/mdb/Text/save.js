import React from 'react'
import {Image} from 'react-bootstrap'

import Aux from '../../../hoc/Auxi/Auxi'
import Payasuwish from '../../../assests/payasuwish.PNG'
import Savemoney from '../../../assests/savemoney.PNG'
import SaveTime from '../../../assests/savetime.PNG'

const Save = () => {
    return(
        <Aux>
        <p style={{
            fontSize:'30px',
            color:'#1a4d57',
            fontWeight:'bold'
        }} >Let's shop with us.</p>
        <div  style={{width: '100%', display: "table"}}>
            <div style={{display: "table-row"}}>
            <div style={{width: "33%",padding:'50px',
                color:'#1a4d57',
                fontSize:'30px',
                display:'table-cell'}}>
                <Image fluid style={{
                    height:'200px'
                    // height:'250px',
                    // width:'100px',
                    // paddingTop:'40px'
                }} src={Payasuwish} />
            </div> <div style={{width: "33%",padding:'50px',
                color:'#1a4d57',
                fontSize:'30px',
                display:'table-cell'}}>
                <Image fluid style={{height:'200px'
                    
                    // height:'250px',
                    // width:'100px',
                    // paddingTop:'40px'
                }} src={SaveTime} />
            </div>
            
            <div style={{display:'table-cell',width:'33%'}}>
                <Image fluid style={{
                    height:'200px',
                    width:'400px'
                    // height:'250px',
                    // width:'100px',
                    // paddingTop:'40px'
                }} src={Savemoney} />
            </div>
            </div>
        </div>
    </Aux>
    )
}

export default Save