import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {Description, People, Telegram} from "@mui/icons-material";

export default function InfoModal ({ pointerControls, showInfoModal, setShowInfoModal, infoModalText }: any) {

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
      onClick={() => setTimeout(() => {pointerControls.current.unlock()},100)}

      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
    >
      <Box component="div" sx={modalStyle}>
        {/*<HighlightOffIcon className="closeModalButton" onClick={() => { setShowInfoModal(false)}}/>*/}
        {/*<Typography variant="h3" className="secondaryColor">Info</Typography>*/}

        {/*<img src="https://picsum.photos/seed/picsum/200/300"/>*/}

        {/*<p>{infoModalText}</p>*/}
        {/*<p style={{color: 'red'}}>PLEASE NOTE: THIS IS A DEMO, THESE ARE NOT ACTUAL NFTS AND NO PAINTINGS ARE FOR SALE.</p>*/}
        <p className='red'>CURRENTLY DESKTOP ONLY, not mobile optimised.</p>

        <hr/>

        <p><b>Instructions:</b></p>
        <p>Click to Engage MetaSpace.</p>
        <p>Move with Keyboard/Mouse/Trackpad to see the Web4 London MetaSpace.</p>
        <p>Click objects to interact.</p>
        <p>Explore to find <b>Web4Coin Tokens</b>.</p>
        <p><b>PRESS ESC</b> to disengage MetaSpace.</p>


        <hr/>

        <p><a target="_blank" href={`${process.env.REACT_APP_ARTICLE_LINK}`}><Description/>&nbsp;Read about Web4 and why it is Important here.</a></p>
        <p><a target="_blank" href={`${process.env.REACT_APP_MEETUP_LINK}`}><People/>Join Web4 Communities in London.</a></p>
        <p><a target="_blank" href={`${process.env.REACT_APP_TELEGRAM_LINK}`}><Telegram/>Join Web4 Communities on Telegram.</a></p>

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
