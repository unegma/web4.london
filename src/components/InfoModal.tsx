import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function InfoModal ({ showInfoModal, setShowInfoModal, infoModalText }: any) {

  const handleClose = () => {
    setShowInfoModal(false);
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    maxWidth: '90vw',
    minWidth: '85vw',
    maxHeight: '90vh',
    // minHeight: '85vh',
    overflow: 'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      className="info-modal"
      open={showInfoModal}
      onClose={handleClose}
      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
    >
      <Box component="div" sx={modalStyle}>
        <HighlightOffIcon className="closeModalButton" onClick={() => { setShowInfoModal(false)}}/>
        <Typography variant="h3" className="secondaryColor">Info</Typography>

        <p>{infoModalText}</p>
        <p style={{color: 'red'}}>PLEASE NOTE: THESE ARE NOT ACTUAL NFTS.</p>

        <hr/>

        {/*<Typography className="secondaryColor">*/}
        {/*  Contribute here: <a target="_blank" href={process.env.REACT_APP_GITHUB_LINK}>Github</a>.<br/>*/}
        {/*  <span>Made by <a target="_blank" href="https://unegma.com">unegma</a>.</span>*/}
        {/*</Typography>*/}

        <Button className="closeModalButton--large" variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  )
}
