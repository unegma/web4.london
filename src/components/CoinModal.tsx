import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Web3ConnectionButtons from "./layout/Web3ConnectionButtons";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";

export default function CoinModal ({ showModal, pointerControls, reserveBalance, reserveSymbol, tokenAddress, initiateClaim, buttonLock, setButtonLock, showNFTModal, setShowNFTModal, infoModalText }: any) {
  const context = useWeb3React<Web3Provider>(); // todo check because this web3provider is from ethers
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;

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


        {(!active && !error) && (
          <>
            {/*<div className="donateButton-container">*/}
            {/*  <BuyButton />*/}
            {/*</div>*/}
            <Button variant="contained" color="warning" className={`connectButton web3connectButton connect-button-modal`} onClick={showModal}>
              Connect
            </Button>
          </>
        )}

        {/*<p>{infoModalText}</p>*/}
        <p style={{color: 'red'}}><b>YOU FOUND WEB4COIN! YEY!</b></p>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        <img src="./android-chrome-384x384.png" style={{width: "5%", marginRight: "5px"}}/>
        {/*<p>Claim using your <a target="_blank" href={`${process.env.REACT_APP_METAMASK_VIDEO_LINK}`}>Metamask/Web3 Wallet</a>.</p>*/}
        <p>Claim using your <b>Metamask/Web3</b> Wallet:</p>
        <ol>
          <li>Connect using the <b>Connect</b> Button in the top right.</li>
          <li>Click the <b>Get</b> Button below.</li>
        </ol>
        {/*<p>You will need to be connected to <a target="_blank" href="https://chainlist.org/chain/137"><b>Polygon</b>.</a></p>*/}
        <hr/>

        <Typography className="modalText">
          <span className='yourBalance'>Your Balance: <b>{reserveBalance} {reserveSymbol}</b></span>.<br/>
          <span>To see these tokens in your Wallet,&nbsp;
          <a href="#" onClick={(event: any) =>
          {event.preventDefault();alert(`Copy: ${tokenAddress} to clipboard and import token into your Wallet. See here for how to: https://www.youtube.com/results?search_query=how+to+add+custom+token+in+metamask`)}}
          >
            add the address for <b>{reserveSymbol}</b>
          </a>.</span>
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
