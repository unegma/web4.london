import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function CoinModal ({ pointerControls, reserveBalance, reserveSymbol, tokenAddress, initiateClaim, buttonLock, setButtonLock, showNFTModal, setShowNFTModal, infoModalText }: any) {

  const handleClose = () => {
    setShowNFTModal(false);
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
      open={showNFTModal}
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
        <p style={{color: 'red'}}>YOU FOUND WEB4TOKENS!</p>
        <p>Claim using your <a target="_blank" href={`${process.env.REACT_APP_METAMASK_VIDEO_LINK}`}>Metamask/Web3 Wallet</a>.</p>
        <p>You will need to be connected to <a target="_blank" href="https://chainlist.org/chain/137"><b>Polygon</b>.</a></p>
        <hr/>

        <Typography className="modalText">
          <span className='yourBalance'>Your Balance: <b>{reserveBalance} {reserveSymbol}</b></span>.<br/>
          <p>To see these tokens in your Wallet,&nbsp;
          <a href="#" onClick={(event: any) =>
          {event.preventDefault();alert(`Copy: ${tokenAddress} to clipboard and import token in to your Wallet.`)}}
          >
            add the address for <b>{reserveSymbol}</b>
          </a>.</p>
        </Typography>

        <hr/>

        <br/>

        <Button disabled={buttonLock} className="fifty-percent-button" variant="contained" color="success" onClick={initiateClaim}>Get 100 Web4Coin!</Button>
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
