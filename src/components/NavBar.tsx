import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Book, BookOutlined, Description, InsertPhoto, LibraryBooks, Menu, Note, Notes} from "@mui/icons-material";
import Web3ConnectionButtons from "./layout/Web3ConnectionButtons";

export default function NavBar(
  {pointerControls, toggleLeftSideDrawer, setShowBookingModal, showBookingModal, picSet, setPicSet}: any) {
  return (
    <Box component="div" sx={{ flexGrow: 1 }} className="navBar" >
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          {/*<div className={`hamburger-button`}>*/}
          {/*  <Menu className="pointer" style={{ color: "white", margin: "4px 10px 0 -5px" }} onClick={(event) => {toggleLeftSideDrawer(event)}}/>*/}
          {/*</div>*/}
          <Typography className="main-title" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={(event:any) => {toggleLeftSideDrawer(event)}}>
            {process.env.REACT_APP_NAV_TITLE}
          </Typography>
          {/*<Button style={{marginRight: '5px', color: 'black'}} color="inherit" variant="contained" onClick={() => {picSet === 1 ? setPicSet(2) : setPicSet(1)}}><InsertPhoto/> Set: {picSet}</Button>*/}
          <Button color="inherit" variant="outlined" href={`${process.env.REACT_APP_ARTICLE_LINK}`} target="_blank"><Description/>&nbsp;Why Web4</Button>
          <Web3ConnectionButtons className='connect-button' pointerControls={pointerControls} onClick={() => setTimeout(() => {pointerControls.current.unlock()},100)} />

        </Toolbar>
      </AppBar>
    </Box>
  )
}
