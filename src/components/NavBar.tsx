import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Menu} from "@mui/icons-material";

export default function NavBar(
  {toggleLeftSideDrawer, setShowBookingModal, showBookingModal}:
    {toggleLeftSideDrawer: any, setShowBookingModal: any, showBookingModal: any}) {
  return (
    <Box component="div" sx={{ flexGrow: 1 }} className="navBar" >
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <div className={`hamburger-button`}>
            <Menu className="pointer" style={{ color: "white", margin: "4px 10px 0 -5px" }} onClick={(event) => {toggleLeftSideDrawer(event)}}/>
          </div>
          <Typography className="main-title" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={(event:any) => {toggleLeftSideDrawer(event)}}>
            {process.env.REACT_APP_NAV_TITLE}
          </Typography>
          <Button color="error" variant="contained" onClick={() => {setShowBookingModal(!showBookingModal)}}>Book</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
