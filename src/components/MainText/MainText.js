import React from 'react'
import { Jumbotron  } from 'react-bootstrap'

import CardText from './CardText'
import Aux from '../../hoc/Auxi/Auxi'
import Stepper from './Stepper'
import Button from '../../components/UI/Button/Button'

const MainText = () => {
    return(
        <Aux>    
            <div style={{
                margin:'25px',
                borderRadius : '18px',
                boxShadow:'5px 10px 7px 8px #eeee , 5px 5px #fff' 
            }}>
                <Jumbotron style={{
                    backgroundColor:'white',
                    borderRadius: '23px'
                }}>
                    <h1>What do we do</h1>
                        <p>
                            Afraid of ordering groceries from Online shopping websites.<br/>
                            <strong>  Order from local shops You know and You TRUST </strong>
                        </p>
                        <p>
                        <Button btnTxt="orderNow" />
                    </p>
                </Jumbotron>
            </div>
            <div 
            style={{
                display:'inline-block',
            }}
            >
                <CardText />
            </div>
            <div>
                <Stepper />
            </div>
        </Aux>
    ) 
}

export default MainText