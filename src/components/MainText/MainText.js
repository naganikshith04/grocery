import React from 'react'
import { Card , Jumbotron  } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CardText from './CardText'
import Aux from '../../hoc/Auxi/Auxi'
import Stepper from './Stepper'

const MainText = () => {
    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
      });
      const classes = useStyles();
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
                    <Button
                        classes={{
                            root: classes.root, // class name, e.g. `classes-nesting-root-x`
                            label: classes.label, // class name, e.g. `classes-nesting-label-x`
                        }}
                        > Order Now</Button>
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