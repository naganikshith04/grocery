import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {MDBCol,MDBBtn,MDBFormInline} from 'mdbreact'
import SearchIcon from '@material-ui/icons/Search';
import GMaps from '../../GMaps/GMaps';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function BackDrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button style={{
          borderRadius:'5px',
          color:'white',
          backgroundColor:'#1F2A48',
          margin:'15px'
      }} type="button" onClick={handleOpen}>
        Get started
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <div className={classes.paper}>
            <MDBCol md="12">
                    <MDBFormInline className="md-form mr-auto mb-4">
                    <span >
                        <SearchIcon fontSize='medium'color='primary' />
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
                        <GMaps />
                        <Backdrop />
                        </MDBFormInline>
                    </MDBCol>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}
