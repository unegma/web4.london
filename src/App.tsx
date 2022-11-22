import React, {useEffect, useState} from 'react';
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
// import BookingModal from "./components/BookingModal";

function App() {
  const [showImages, setShowImages] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(true);
  const [infoModalText, setShowInfoModalText] = useState("Click a Picture to view info and buy.");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [picSet, setPicSet] = React.useState(1);

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


  const toggleLeftSideDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (
        (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
      {
        return;
      }
      setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="App">
      {/*<CssBaseline /> todo add this? */}

      <NavBar picSet={picSet} setPicSet={setPicSet} toggleLeftSideDrawer={toggleLeftSideDrawer} showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />

      <InfoModal showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal} infoModalText={infoModalText} />
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
            <SpaceOne picSet={picSet} isMobile={isMobile} cameraPosition={[0.1,0.8,0.1]} setShowInfoModal={setShowInfoModal} infoModalText={infoModalText} setInfoModalText={setShowInfoModalText}/>
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
