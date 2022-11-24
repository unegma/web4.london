import React, {useEffect, useRef, useState} from 'react';
import {
  Route, Routes
} from "react-router-dom";
import './App.scss';
import NavBar from "./components/NavBar";
import {CameraAltOutlined, ChevronLeft, ChevronRight, InfoOutlined, Menu, ZoomIn, ZoomOut} from "@mui/icons-material";
import PhotoViewer from "./components/PhotoViewer";
import InfoModal from "./components/InfoModal";
import LeftSideDrawer from "./components/LeftSideDrawer";
import HomeScreen from "./components/HomeScreen";
import SpaceOne from "./components/SpaceOne";
import CoinModal from "./components/CoinModal";
// import BookingModal from "./components/BookingModal";
import {getTokenData} from './helpers/subgraphCalls';
import {getReserveBalance, initiateClaim} from './helpers/web3Functions';
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import {Signer} from "ethers";

function App() {
  const context = useWeb3React<Web3Provider>(); // todo check because this web3provider is from ethers
  const { connector, library, chainId, account, activate, deactivate, active, error }: any = context;
  const [signer, setSigner] = useState<Signer|undefined>(undefined);

  const pointerControls = useRef(null);

  const [buttonLock, setButtonLock] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [tokenAddress, setTokenAddress] = React.useState(process.env.REACT_APP_WEB4COIN_ADDRESS as string); // this is now retrieved from the url
  const [showInfoModal, setShowInfoModal] = useState(true);
  const [showNFTModal, setShowNFTModal] = useState(false);
  const [infoModalText, setShowInfoModalText] = useState("Click a Picture to view info and buy.");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [picSet, setPicSet] = React.useState(1);
  const [claimComplete, setClaimComplete] = React.useState(false); // used to update user balance when complete
  const [consoleData, setConsoleData] = React.useState("");
  const [consoleColor, setConsoleColor] = React.useState('red');
  const [loading, setLoading] = useState(false);

  // all these from .env will be replaced by calls to blockchain within the getTokenData function when faucetView is set to true
  const [reserveClaimable, setReserveClaimable] = useState(process.env.REACT_APP_RESERVE_CLAIMABLE as string);
  const [reserveDecimals, setReserveDecimals] = useState(process.env.REACT_APP_RESERVE_ERC20_DECIMALS as string);
  const [reserveName, setReserveName] = React.useState(process.env.REACT_APP_RESERVE_NAME as string);
  const [reserveSymbol, setReserveSymbol] = React.useState(process.env.REACT_APP_RESERVE_SYMBOL as string);
  const [reserveBalance, setReserveBalance] = React.useState("?");

  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      console.log(isMobile)
    }
  }, []);

  useEffect(() => {
    setSigner(library?.getSigner());
  }, [library, account]);

  // this relies on useEffect above to get tokenAddress from url // todo may be able to merge this one with the above one
  // todo check this section because it is different in all frontends
  // TODO CHECK THIS WORKS WITH INJECTED CONNECTOR
  // TODO CHECK IF THIS WORKS WITHOUT SIGNER ON SALE EXAMPLE
  useEffect(() => {
    // todo check this still works with new url parameter
    if (tokenAddress) {
      getTokenData(tokenAddress, setReserveName, setReserveSymbol, setReserveDecimals);
    }
  }, [tokenAddress]); // only get sale data when signer and saleAddress have been loaded // monitor saleComplete so that the amount displayed on the button is updated when the sale is finished

  // user balance of reserveToken
  useEffect(() => {
    if (signer) {
      getReserveBalance(signer,account,tokenAddress,setReserveBalance);
    }
  }, [signer, account, tokenAddress, claimComplete])

  const toggleLeftSideDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (
        (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
      {
        return;
      }
      setDrawerOpen(!drawerOpen);
  };

  // web3 modal (moved)
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
    setTimeout(() => { // @ts-ignore
      pointerControls.current.unlock()},100);
  }

  return (
    <div className="App">
      {/*<CssBaseline /> todo add this? */}

      <NavBar showNFTModal={showNFTModal} setModalOpen={setModalOpen} showModal={showModal} modalOpen={modalOpen} pointerControls={pointerControls} picSet={picSet} setPicSet={setPicSet} toggleLeftSideDrawer={toggleLeftSideDrawer} showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />

      <InfoModal pointerControls={pointerControls} showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal} infoModalText={infoModalText} />
      <CoinModal
        showModal={showModal}
        pointerControls={pointerControls}
        initiateClaim={() => initiateClaim(
          signer, setButtonLock,setLoading,account,setConsoleData,setConsoleColor, tokenAddress, setClaimComplete
        )}
        buttonLock={buttonLock} setButtonLock={setButtonLock} showNFTModal={showNFTModal} setShowNFTModal={setShowNFTModal}
        reserveBalance={reserveBalance} reserveSymbol={reserveSymbol} tokenAddress={tokenAddress}
      />

      {/*<BookingModal showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />*/}
      {/*<PhotoViewer showImages={showImages} />*/}

      {/*<LeftSideDrawer*/}
      {/*  drawerOpen={drawerOpen}*/}
      {/*  toggleLeftSideDrawer={toggleLeftSideDrawer}*/}
      {/*  setShowImages={setShowImages}*/}
      {/*  setShowInfoModal={setShowInfoModal}*/}
      {/*/>*/}

      <Routes>
        <Route
          key={'home'}
          path="/"
          element={
            <SpaceOne pointerControls={pointerControls} picSet={picSet} isMobile={isMobile} cameraPosition={[0.1,0.8,0.1]} setShowInfoModal={setShowInfoModal} setShowNFTModal={setShowNFTModal} infoModalText={infoModalText} setInfoModalText={setShowInfoModalText}/>
          }
        />

        {/*<Route*/}
        {/*  key={'gallery'}*/}
        {/*  path="/gallery"*/}
        {/*  element={*/}
        {/*  }*/}
        {/*/>*/}

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <div className="buttons-container">
      {/*  <InfoOutlined className="pointer" style={{ color: "white", margin: "0 4px" }} onClick={() => {setShowInfoModal(!showInfoModal)}}/>*/}

      {/*  <div className="pointer" onClick={() => {setShowImages(!showImages)}}>*/}
      {/*    <CameraAltOutlined  style={{ color: "white", margin: "0 4px" }} />*/}
      {/*    { showImages && (*/}
      {/*      <ChevronRight style={{ color: "white", margin: "0 4px" }} />*/}
      {/*    )}*/}
      {/*    { !showImages && (*/}
      {/*      <ChevronLeft style={{ color: "white", margin: "0 4px" }} />*/}
      {/*    )}*/}
      {/*    </div>*/}
        <a target="_blank" style={{color: 'white', textDecoration:'none'}} href="https://unegma.com">unegma<span style={{color:'cyan'}}>.</span>com</a>
      </div>
    </div>
  );
}

export default App;
