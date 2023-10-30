import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Spotify } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { Telegram } from 'react-bootstrap-icons';
import { Typography } from '@mui/material';
import '../assets/styles/LeftNav.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function LeftNavBar() {
    return (
      <Navbar className="bottomnav" expand="lg" fixed="left" bg="none" data-bs-theme="light" sx={{ paddingTop: 0}}>
        <Button variant="link" href="https://open.spotify.com/track/7kXPGRvZAoo0J0gzc8hEGu?si=43eeb1b3df5c474f" className="home-button " target="_blank">
          <Spotify style={{color: 'rgb(30, 215, 96)', fontSize:"2.3rem"}}/>
        </Button>
        <Button variant="link" href="https://www.youtube.com/watch?v=_hhJCuKkOuY" className="home-button flex-child" target="_blank">
          <Youtube style={{color: 'rgb(255,0,0)', fontSize:"2.3rem"}}/>
        </Button>
        <Button variant="link" href="https://t.me/+DvADS3Tw5S9mYzZk" className="home-button flex-child" target="_blank">
          <Telegram style={{color: 'rgb(34, 158, 217)', fontSize:"2.3rem"}}/>
        </Button>
      </Navbar>
    );
  }
  
  export default LeftNavBar;