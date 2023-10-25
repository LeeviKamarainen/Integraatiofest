import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Spotify } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { Telegram } from 'react-bootstrap-icons';


import ReactPlayer from 'react-player/lazy';

import promoVideo1 from '../assets/videos/promoVideo1Trim.mp4'
import kotip from '../assets/sponsors/Kotipizza_logo_vihrea_RGB.jpg'

import '../assets/styles/Home.css';


function Home() {

    return (
      <Box sx={{ flexGrow: 2 }} className="content-wrapper home" >
        <Typography sx={{ typography: {xs: 'h5', sm: 'h3', md: 'h2', lg: 'h1'}}} className="home-text main-title"> Integraatiofest 2023 </Typography>
        <ReactPlayer url={promoVideo1} playing={true} loop={true} muted={true} width="100%" height="100%" className="home-video" />
        <Typography sx={{ typography: {xs: 'h6', sm: 'h5', md:'h4', lg: 'h3'}}} className="home-text secondary-title"> Like never before </Typography>
              {/* <Button variant="link" href="https://open.spotify.com/track/7kXPGRvZAoo0J0gzc8hEGu?si=43eeb1b3df5c474f">
                <Spotify style={{color: 'rgb(30, 215, 96)', fontSize:"2.5rem"}}/>
              </Button>
              <Button variant="link" href="https://www.youtube.com/watch?v=_hhJCuKkOuY">
                <Youtube style={{color: 'rgb(255,0,0)', fontSize:"2.5rem"}}/>
              </Button>
              <Button variant="link" href="https://t.me/+DvADS3Tw5S9mYzZk">
                <Telegram style={{color: 'rgb(34, 158, 217)', fontSize:"2.5rem"}}/>
              </Button> */}
      </Box>
  )}
  
  export default Home;