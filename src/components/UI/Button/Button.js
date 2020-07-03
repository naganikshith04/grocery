import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const Bon = ( props ) => {
    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          backgroundImage:'-webkit-gradient(linear,left top,right top,from(#4a77f4),color-stop(51%,#00bade),to(#4a77f4)), -webkit-linear-gradient(left,#4a77f4,#00bade 51%,#4a77f4),linear-gradient(90deg,#4a77f4 0,#00bade 51%,#4a77f4)',
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
    return (
        <Button
        classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
        > {props.btnTxt}</Button>

    )

}

export default Bon