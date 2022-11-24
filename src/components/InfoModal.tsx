import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {Description, People, Telegram} from "@mui/icons-material";

export default function InfoModal ({ pointerControls, showInfoModal, setShowInfoModal, infoModalText }: any) {

  const handleClose = () => {
    setShowInfoModal(false);
    pointerControls.current.connect()
    setTimeout(() => {pointerControls.current.lock()},110) // this needs to be higher than the timeout on the modal
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
      <Box className="infoModal" component="div" sx={modalStyle}>

        <div className="infoModal__mobile-content">
          <p className='infoModal__mobile-warning'><b>CURRENTLY DESKTOP ONLY</b></p>
          <p>You can still follow these links:</p>
        </div>

        <div className="infoModal__desktop-content">
          {/*<HighlightOffIcon className="closeModalButton" onClick={() => { setShowInfoModal(false)}}/>*/}
          {/*<Typography variant="h3" className="secondaryColor">Info</Typography>*/}

          {/*<img src="https://picsum.photos/seed/picsum/200/300"/>*/}

          {/*<p>{infoModalText}</p>*/}
          {/*<p style={{color: 'red'}}>PLEASE NOTE: THIS IS A DEMO, THESE ARE NOT ACTUAL NFTS AND NO PAINTINGS ARE FOR SALE.</p>*/}


          <p><b>Instructions:</b></p>
          <ol>
          {/*<li>Click to Engage MetaSpace.</li>*/}
          <li>Move with Keyboard/Mouse/Trackpad to explore the MetaSpace.</li>
          <li>Click objects to interact.</li>
          <li>Explore to find <b>Web4Coin Tokens</b>.</li>
          <li><b>PRESS ESC</b> to disengage MetaSpace.</li>
          </ol>

          <hr/>

        </div>

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
