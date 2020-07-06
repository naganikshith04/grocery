import React from 'react'

// import Aux from '../../../hoc/Auxi/Auxi'
import Phone from './Phone'
import Shop from './Shop'
import Receive from './Receive'
import Save from './save'

const Text = () => {
    return(
        <div style={{
            backgroundColor:'#F9FBFA',
            width:'100%'
        }}>
            <Phone />
            <Shop />    
            <Receive />
            <Save />
        </div>
    )
}

export default Text