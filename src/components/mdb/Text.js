import React from 'react'
import {Image} from 'react-bootstrap'

import Aux from '../../hoc/Auxi/Auxi'
import PhoneImg from '../../assests/phone1.PNG'
const Text = () => {
    return(
        <Aux>
        <div style={{width: "100%", overflow: "hidden"}}>
            Here's how it works
            <div style={{width: "600px", float:" left"}}>
                Scroll through our app<br/>
                Order all types of groceries from<br/>
                local stores
            </div>
            <div style={{marginLeft: "620px;"}}>
                <Image src={PhoneImg} fluid />
            </div>
        </div>
    </Aux>
    )
}

export default Text